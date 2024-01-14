odoo.define("pos_js.message_popupbutton",function(require){
    "use strict";

    const PosComponent = require('point_of_sale.PosComponent');
    const Registries = require("point_of_sale.Registries");

    class MessagePopupButton extends PosComponent {
        setup(){
            super.setup();
            console.log("New Message Popup Button.");
        }

        async showPopupMessage(){
             const { confirmed, payload } = await this.showPopup('MessagePopup');
             console.log("Confirmed The Message Popup.", confirmed , payload);

             if(confirmed){
                this.env.pos.popupMessage = payload;
             }
        }
    }

    MessagePopupButton.template = "MessagePopupButton";

    Registries.Component.add(MessagePopupButton);

    return MessagePopupButton;
})