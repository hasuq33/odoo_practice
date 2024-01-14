/**@odoo-module */
import Registries from "point_of_sale.Registries";
const { PosGlobalState } = require('point_of_sale.models');

const InheritedPosGlobalState = (model) => class extends model{
    constructor(obj){
        super(obj);
        this.favorite_products = this.getFavoriteProducts();
        this.popupMessage = "";
    }

            async getFavoriteProducts(){
                let data = await this.env.services.rpc({
                    'model':'product.product',
                    'method':'getFavoriteProduct',
                    'args':[{}]
                })
                this.favorite_products = data;
            }

            async setFavoriteProducts(){
                await this.getFavoriteProducts();
            }
}

Registries.Model.extend(PosGlobalState,InheritedPosGlobalState);