# Example: Integrating CK Editor with elFinder in Sonata Admin

ElFinder: https://github.com/EricReiche/FMElfinderBundle

```twig
{% extends 'SonataAdminBundle:CRUD:base_edit.html.twig' %}
{% block javascripts %}
    <script type="text/javascript" charset="utf-8">
        var CKEDITOR_BASEPATH = '/bundles/mfbckeditor/';
        var action = '{{path('elfinder')}}';
    </script>
    {{ parent() }}

    {% javascripts
        '@MFBCkeditorBundle/Resources/public/ckeditor.js'
        '@MFBCkeditorBundle/Resources/public/adapters/jquery.js'
        '@MFBCkeditorBundle/Resources/public/init.js'
    %}
    <script src="{{ asset_url }}"></script>
    {% endjavascripts %}
{%endblock%}

{% block stylesheets %}
    {{  parent() }}
    <link rel="stylesheet" href="{{ asset('bundles/mfbckeditor/sonata.css') }}" type="text/css" media="all">
{%endblock%}
```