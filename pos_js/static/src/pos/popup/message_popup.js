odoo.define("pos_js.message_popup",function(require){
    "use strict";

    const AbstractAwaitablePopup = require('point_of_sale.AbstractAwaitablePopup');
    const Registries = require("point_of_sale.Registries");
    const {useState,onMounted, useRef } = owl;

    class MessagePopup extends AbstractAwaitablePopup {
        setup(){
            super.setup();
            this.state = useState({text_value:''});
            this.txtRef = useRef('text-value');

            onMounted(()=>this.txtRef.el.focus());
        }

        confirm(){
            console.log("You Confirmed The message Popup.");
            console.log("Confirm Message",this.state.text_value);
            super.confirm();
        }

        cancel(){
            console.log("You Canceled The Message popup.");
            super.cancel();
        }

        getPayload(){
            return this.state.text_value;
        }
    }

    MessagePopup.template = 'MessagePopup';
    Registries.Component.add(MessagePopup);

    return MessagePopup;

})