  /** @odoo-module **/

  import publicWidget from "@web/legacy/js/public/public_widget";

  publicWidget.registry.jsTemplate = publicWidget.Widget.extend({
    selector:'.js-template',
    template:'v17_qweb_practice.jsTemplate',
    start(){
        this.renderElement();
    }
  })