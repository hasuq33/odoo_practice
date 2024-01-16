/** @odoo-module **/

import { Component,xml,mount, whenReady,useState,onWillStart } from "@odoo/owl";
import { templates } from "@web/core/assets";
import { jsonrpc } from "@web/core/network/rpc_service";

class OwlSubComponent extends Component{
    static template = "v17_qweb_practice.owl_sub_template";
}

class OwlSubComponentChild extends Component{
    static template = "v17_qweb_practice.owl_sub_template_child";
}

class OwlMainComponent extends Component{
    setup(){
        this.state = useState({
            counter: 0,
        })

        this.date = new Date().toLocaleString();
    }

    increaseCounter(){
        this.state.counter++;
    }

   get getSomelist(){
        return [1,2,3,4,5];
    }
}

class OwlWithBackendData extends Component{
    static template = "v17_qweb_practice.owl_backend_interaction";
    setup(){
        this.state = useState({
            orders: [],
            txtInput:""
        })

        onWillStart(async ()=>{
            const data = await jsonrpc("/web/dataset/call_kw/sale.order/search_read",{
                model:'sale.order',
                method: "search_read",
                args:[[['state','in',['sale','done']]],['name','date_order']],
                kwargs:{
                    limit:10,
                    order:"date_order",
                }
            })

            this.state.order = data;
        })
    }

    async submitForm(ev){
        ev.preventDefault();
        const data = await jsonrpc("/qweb_ajax_call",{
            txtInput: this.state.txtInput,
            otherValues: 'Other Values'
        })

        console.log(data);
    }
}

// OwlMainComponent.template = xml`
// <div class="p-4 border">
//     <h3>This is rendered using owl</h3>
// </div>
// `

OwlMainComponent.template = 'v17_qweb_practice.ht_owl_template';
OwlMainComponent.components = {OwlSubComponent,OwlSubComponentChild}

whenReady(()=>{
    // const element =  document.querySelector('.js_template_using_owl');
    // if(element){
    //     mount(OwlMainComponent,element,{templates});
    // }

    const element = document.querySelectorAll('.js_template_using_owl');
    const element1 = document.querySelector('.backend_js_data');
    if(element1){
        mount(OwlWithBackendData,element1,{templates});
    }
    if(element.length>0){
        element.forEach(el =>  mount(OwlMainComponent,el,{templates}))
    }
});
