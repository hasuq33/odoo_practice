/** @odoo-module **/

import { Component,whenReady, App,useState,onWillStart } from "@odoo/owl";
import { makeEnv, startServices } from "@web/env";
import { templates } from "@web/core/assets";
import { useService } from "@web/core/utils/hooks";
import { MainComponentsContainer } from "@web/core/main_components_container";

class MyOwlApp extends Component{
    static template = 'v17_qweb_practice.my_owl_app_container';
    static components = {MainComponentsContainer};

    setup(){
        this.orm = useService('orm');
        this.state = useState({
            partners:[],
            name:"",
        })
        
        onWillStart(async ()=>{
            const data = await this.orm.searchRead("res.partner",[],["name"],{
                limit:10,
                order:'id desc',
            });

            this.state.partners = data;
        })

    }

    async createPartner(){
        if((this.state.name).trim().length > 0){
            await this.orm.create("res.partner",[{'name':this.state.name}]);
            this.env.services.notification.add("New Partner Added SuccessFully");
        }
        const data = await this.orm.searchRead("res.partner",[],["name"],{
            limit:10,
            order:'id desc',
        });

        this.state.partners = data;
        this.state.name = "";
    }

}

whenReady(async ()=>{
    const env = makeEnv();
    await startServices(env);
    const my_owl_app = new App(MyOwlApp,{templates,env});
    const owl_app_selector = document.querySelector('#owl_wrap_wrap');
    if(owl_app_selector){
        my_owl_app.mount(owl_app_selector);
    }
})