/**@odoo-module **/

import { mount, whenReady } from '@odoo/owl';
import { templates } from "@web/core/assets";
import { WebClient } from './webclient/web_client';

whenReady(()=>{
    mount(WebClient,document.body,{
        templates,
        dev:true,
        name:"My OWL App",
    })
})

