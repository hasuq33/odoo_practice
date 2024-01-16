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
    'views/owl_template.xml',
    'data/data.xml',
    ],
    'assets':{
        'web.assets_frontend':[
            'v17_qweb_practice/static/src/js/**/*.js',
            'v17_qweb_practice/static/src/xml/**/*.xml',
        ],
        'harshiv_owl_app.asset':[
               # bootstrap
            ('include', 'web._assets_helpers'),
            'web/static/src/scss/pre_variables.scss',
            'web/static/lib/bootstrap/scss/_variables.scss',
            ('include', 'web._assets_bootstrap_backend'),

            # required for fa icons
            'web/static/src/libs/fontawesome/css/font-awesome.css',

            # include base files from framework
            ('include', 'web._assets_core'),

            # remove some files that we do not use to create a minimal bundle
            # ('remove', 'web/static/src/core/**/*'),
            # ('remove', 'web/static/lib/luxon/luxon.js'),
            'web/static/src/core/utils/functions.js',
            'web/static/src/core/browser/browser.js',
            'web/static/src/core/registry.js',
            'web/static/src/core/assets.js',
            'v17_qweb_practice/static/src/components/*',
        ]
    },
    'installable':True,
    'license': 'LGPL-3',
}