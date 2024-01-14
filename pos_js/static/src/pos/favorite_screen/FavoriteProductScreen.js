odoo.define("point_of_sale.FavoriteProductScreen",function(require){
    "use strict";

   
    const  PosComponent  = require("point_of_sale.PosComponent");
    const Registries = require("point_of_sale.Registries");
    const {useState, onWillStart } = owl;

    class FavoriteProductScreen extends PosComponent {
        setup() {
            super.setup();

            this.state = useState({
                activeProduct:{},
                isFavorite: true,
                favorite_products : [],
                products:[],
            })

            onWillStart(async ()=>{
                this.state.favorite_products = await this.env.pos.favorite_products;
                this.getProducts();
            })
        }

        getProducts(){
            let products = this.env.pos.db.product_by_id;
            let product_list = [];

            console.log(Object.entries(products));

            if(this.state.isFavorite){
                this.state.favorite_products.forEach(p=> product_list.push(products[p]))
            }else{
                Object.entries(products).forEach(p=>product_list.push(p[1]))
            }

            this.state.products = product_list;
            this.state.isFavorite = !this.state.isFavorite;
        }

        setActiveProduct(product){
            this.state.activeProduct= product;
        }

        async markFavorite(product){
            await this.rpc({
                model:"product.product",
                method:'markFavorite',
                args:[[product.id]]
            })

            await this.env.pos.setFavoriteProducts();
            this.state.favorite_products =  await this.env.pos.favorite_products;
            this.getProducts();
        }
    }

    FavoriteProductScreen.template = "FavoriteProductScreen"; // Make sure this template exists in your module

    Registries.Component.add(FavoriteProductScreen);

    return FavoriteProductScreen;
})