# -*- coding: utf-8 -*-
{
    'name': "Harhiv Learn OWL",
    'summary': """
        Harshiv Owl Summary
    """,

    'description': """
        Harshiv Owl Summary
    """,

    'author': "Harshiv",
    'website': "https://www.harhiv.com",

    # Categories can be used to filter modules in modules listing
    'category': 'Tutorial',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web'],
    'application': True,
    'installable': True,
    'data': [
        'views/templates.xml',
    ],
    'assets': {
        'harshiv_app.assets': [
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
            'ht_learn_owl/static/src/**/*',
        ],
    },
    'license': 'AGPL-3'
}