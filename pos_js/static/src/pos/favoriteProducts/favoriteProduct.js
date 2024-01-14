/**@odoo-module */
import Registries from "point_of_sale.Registries";

import ProductScreen from "point_of_sale.ProductScreen";
const {onWillStart} = owl;

const InheritedProductScreen = (product_screen) => class extends product_screen{
    setup(){
        super.setup();

        this.favorite_products = [];

        onWillStart(async ()=>{
            // let  data = await this.env.services.rpc({
            //     'model':'product.product',
            //     'method':'search',
            //     'kwargs':{
            //         'domain':[['available_in_pos','=',true],['pos_categ_id.name','=','Miscellaneous']]
            //     }
            // })
            this.favorite_products = await this.env.pos.favorite_products;
            // Here We Use POS GlobalState For calling our function because it will call api 
            // One Time so we can reduce the load on the server then we can increase the speed of our code 
        })
    }

   get favoriteProduct(){
        let products = this.env.pos.db.product_by_id;
        let favorites = [];
        this.favorite_products.forEach(p=>favorites.push(products[p]));
        return favorites;
    }
}

Registries.Component.extend(ProductScreen,InheritedProductScreen);