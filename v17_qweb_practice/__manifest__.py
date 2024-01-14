# -*- coding: utf-8 -*-
{
    'name':'Qweb Practice In Version 17.0',
    'version':'17.0.0.1',
    'category':'Qweb/Qweb',
     'summary': 'Qweb Practice Module',
     'description':"""
    This module is for Practice Purpose
    """,
    'depends':['web','website'],
    'data':[
    'views/for_python_template.xml',
    'data/data.xml',
    ],
    'assets':{
        'web.assets_frontend':[
            'v17_qweb_practice/static/src/js/**/*.js',
            'v17_qweb_practice/static/src/xml/**/*.xml',
        ],
    },
    'installable':True,
    'license': 'LGPL-3',
}