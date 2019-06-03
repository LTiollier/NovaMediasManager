let mix = require('laravel-mix');

mix.setPublicPath('dist')
    .js('resources/js/medias-manager.js', 'js')
    .sass('resources/sass/medias-manager.scss', 'css')
    .browserSync('http://localhost');
