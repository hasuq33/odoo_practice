# -*- coding: utf-8 -*-
from odoo import models

class getFavoriteProduct(models.Model):
    _inherit = "product.product"

    def getFavoriteProduct(self):
        products = self.search([('available_in_pos','=',True),('pos_categ_id.name','=','Miscellaneous')])
        return products.ids
    
    def markFavorite(self):
        print("self=>>>>>",self)
        favoritetags = self.env["product.tag"].sudo().search([('name','=','Favorite')],limit=1)
        if not favoritetags:
            favoritetags = self.env["product.tag"].sudo().create({'name':'Favorite'})
        self.product_tag_ids = [(6,0,[favoritetags.id])]