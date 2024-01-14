# -*- coding: utf-8 -*-

from odoo import http
from odoo.http import Controller, route, request, Response
from odoo.tools import html_escape,html_sanitize
from markupsafe import Markup

class QwebTemplatePractice(http.Controller):

    @http.route('/qweb-parctice',auth="public",website=True,sitemap=True)
    def view_python_qwen_Template(self):

        def ht_some_python_function():
            return "Harshiv Technologies PVT. ltd."
        
        models_ids = request.env['sale.order'].sudo().search([])

        data = {
            'string': 'QWEB Tutorials',
            'integer' : 1000,
            'some_float':52.36,
            'boolean':True,
            'some_list':[1,2,43,5,7,8,9],
            'ht_dict': {'ht_key': 'HT Key'},
            'ht_func': ht_some_python_function(),
            'model_ids': models_ids,
            'html': '<h3>My Name is The Harshiv Joshi</h3> Added by Attacker <script>alert("Your Gand Faad The Harshiv Joshi!")</script>',
            'html_escape':'<h3>My Name is The Harshiv Joshi</h3>%s'% html_escape('Added by Attacker <script>alert("Your Gand Faad The Harshiv Joshi!")</script>'),
            'html_sanitize': '<h3>My Name is The Harshiv Joshi</h3>%s'% html_sanitize('Added by Attacker <script>alert("Your Gand Faad The Harshiv Joshi!")</script>'),
            # Html Sanitize will Remove automatically unsafe Html ELement
            'html_markup':Markup('<h3>My Name is The Harshiv Joshi</h3>%s'% html_sanitize('Added by Attacker <script>alert("Your Gand Faad The Harshiv Joshi!")</script>'),)
            # Using Markup You can Format the html field
        }
        return request.render('v17_qweb_practice.somePythonTemplate',data)