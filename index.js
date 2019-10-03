const pathCSS = [
    'css/themes/grey-white.css',
    'css/themes/indigo-white.css',
    'css/themes/green-white.css',
    'css/themes/red-white.css',
    'css/themes/white-indigo.css',
    'css/themes/white-blue.css',
    'css/themes/white-grey.css',
    'css/themes/white-red.css',
    'css/themes/yellow-black.css'
];



$(function () {
    const style = pathCSS[Math.floor(Math.random() * pathCSS.length)];
    if (document.createStyleSheet) {
        document.createStyleSheet(style);
    } else {
        $('<link />', {
            rel: 'stylesheet',
            type: 'text/css',
            href: style
        }).appendTo('head');
    }
});