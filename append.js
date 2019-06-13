

document.addEventListener('DOMContentLoaded', function() {
    let tt__customCss = '.menu ul li a:not(.inline_menu_link) {color: #fff !important;}'
    $.ajax({
         url: 'https://cdn.jsdelivr.net/gh/laCour/slack-night-mode@master/css/raw/black.css',
        success: function(css) {
            $('<style></style>').appendTo('head').html(css + tt__customCss);
        }
   });
});
