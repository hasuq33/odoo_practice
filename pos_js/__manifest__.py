# -*- coding: utf-8 -*-
{
    'name':'Harshiv Joshi Practicing POS s of odoo',
    'version' : '16.0',
    'summary':'Pos JS',
    'description':"""
  POS Practice
    """,
    'depends':['web','point_of_sale'],
    'data':[
        'views/posmenu.xml',
    ],
    'auto_install':True,
    'installable':True,
    'license':'OEEL-1',
    'assets':{
        'point_of_sale.assets':[
            'pos_js/static/src/pos/**/*.js',
            'pos_js/static/src/pos/**/*.xml',
            'pos_js/static/src/pos/**/*.scss',
        ]
    },
    
}