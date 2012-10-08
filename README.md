# Example: Integrating CK Editor with elFinder in Sonata Admin

ElFinder: https://github.com/EricReiche/FMElfinderBundle

```twig
{% extends 'SonataAdminBundle:CRUD:base_edit.html.twig' %}
{% block javascripts %}
    <script type="text/javascript" charset="utf-8">
        var CKEDITOR_BASEPATH = '/bundles/mfbckeditor/';
    </script>
    {{ parent() }}

    {% javascripts
        '@MFBCkeditorBundle/Resources/public/ckeditor.js'
        '@MFBCkeditorBundle/Resources/public/adapters/jquery.js'
    %}
    <script src="{{ asset_url }}"></script>
    {% endjavascripts %}


    <script type="text/javascript" charset="utf-8">
        var action = '{{path('elfinder')}}';
        $().ready(function() {
            $('textarea.wysiwyg').ckeditor(
                    function() { /* callback code */ },
                    {
                        toolbar : 'Full',
                        uiColor : 'White',
                        filebrowserBrowseUrl : action+'?mode=file',
                        filebrowserImageBrowseUrl : action+'?mode=image',
                        filebrowserFlashBrowseUrl : action+'?mode=flash',
                        filebrowserImageWindowWidth : '950',
                        filebrowserImageWindowHeight : '520',
                        filebrowserWindowWidth : '950',
                        filebrowserWindowHeight : '520'
                    }
            );
        });
    </script>
{%endblock%}


{% block stylesheets %}
    {{  parent() }}

    <link rel="stylesheet" href="{{ asset('bundles/mfbckeditor/sonata.css') }}" type="text/css" media="all">
{%endblock%}
```