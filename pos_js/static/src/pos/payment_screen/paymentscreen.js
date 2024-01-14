/**@odoo-module */

import Registries from "point_of_sale.Registries";
import PaymentScreen from "point_of_sale.PaymentScreen";

const PaymentScreenInherit = (payment_screen) => class extends payment_screen {
    setup(){
        super.setup()
        console.log("Successfully Inherited PaymentScreen");
    }

    addNewPaymentLine({ detail: paymentMethod }){
        let payment_line = super.addNewPaymentLine({ detail: paymentMethod });
        console.log("Add NewPaymentLine");
        return payment_line
    }
    goNext(){
        console.log("Go Next Is Success.")
    }
}

Registries.Component.extend(PaymentScreen,PaymentScreenInherit)