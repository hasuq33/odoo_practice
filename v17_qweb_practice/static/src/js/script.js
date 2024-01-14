  /** @odoo-module **/

  import publicWidget from "@web/legacy/js/public/public_widget";
  import { renderToElement, renderToFragment } from "@web/core/utils/render";

  publicWidget.registry.jsTemplate = publicWidget.Widget.extend({
    selector:'.js-template',
    template:'v17_qweb_practice.jsTemplate',
    start(){
        this.renderElement();
    }
  })

  publicWidget.registry.jsSubTemplate = publicWidget.Widget.extend({
    selector:'.js-templateSub',
    template:'v17_qweb_practice.subTemplate',
    start(){
        this.renderElement();
    }
  })

  publicWidget.registry.eventListner = publicWidget.Widget.extend({
    selector:'.js-templateEventListner',
    template:'v17_qweb_practice.templateEvenrtListner',
    events:{
        'click button':'onClick'
    },
    init(){
        this._super(...arguments);
        this.counter = 0;
    },
    start(){
        this.renderElement();
    },
    onClick(){
        this.counter++;
        this.$el.find('#counter').text(this.counter);
    }
  })


  publicWidget.registry.jsTempalteWithVariable = publicWidget.Widget.extend({
    selector:'.js-template-with-variable',
    template:'v17_qweb_practice.jsTemplateWithvariable',
    init(){
        this._super(...arguments);
        this.orm = this.bindService("orm");
    },
    async start(){
        const content = renderToElement(this.template,{
            string:"I am Passing Some Random String",
            array:[0,1,2,3,4,5,6,7,8,9],
            email:"harshivjoshi1234@gmail.com",
            model: await this.orm.searchRead("sale.order",[],['name']),
        })

        this.$target.html(content);
    }
  })

  publicWidget.registry.mainTemplate = publicWidget.Widget.extend({
    selector:'.js-mainTemplate-extension',
    template:'v17_qweb_practice.mainTemplate',
    start(){
        this.renderElement();

        const templatePrimary = document.querySelector('.js-template-primary');
        templatePrimary.innerHTML = renderToElement("v17_qweb_practice.mainTemplatePrimary").outerHTML;

    }
  })