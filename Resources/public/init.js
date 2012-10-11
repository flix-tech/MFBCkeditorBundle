$().ready(function() {
    $('textarea.wysiwyg').ckeditor(
        function() { /* callback code */ },
        {
            uiColor : 'White',
            width : '710',
            removePlugins : 'a11yhelp,about,adobeair,ajax,bbcode,flash,forms,smiley,xml',
            filebrowserBrowseUrl : action+'?mode=file',
            filebrowserImageBrowseUrl : action+'?mode=image',
            filebrowserFlashBrowseUrl : action+'?mode=flash',
            filebrowserImageWindowWidth : '950',
            filebrowserImageWindowHeight : '520',
            filebrowserWindowWidth : '950',
            filebrowserWindowHeight : '520',

            toolbar : 'MFB',

            toolbar_MFB :
                [
                    { name: 'document', items : [ 'Source',] },
                    { name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
                    { name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
                    { name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
                    { name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv',
                        '-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock' ] },
                    { name: 'links', items : [ 'Link','Unlink','Anchor' ] },
                    { name: 'insert', items : [ 'Image','Table','HorizontalRule','SpecialChar','PageBreak','Iframe' ] },
                    { name: 'tools', items : [ 'Maximize', 'ShowBlocks' ] },
                    '/',
                    { name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
                    { name: 'colors', items : [ 'TextColor','BGColor' ] }
                ]
        }
    );
});