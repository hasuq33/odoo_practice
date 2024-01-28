# -*- coding: utf-8 -*-

from odoo import http
from odoo.http import request

class HTOwlController(http.Controller):

    @http.route('/myowl',type="http",auth="public")
    def ht_view_owl_app(self):
        return request.render('ht_learn_owl.harshiv_owl_template')