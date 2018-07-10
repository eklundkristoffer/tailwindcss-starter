let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix.js('resources/assets/js/app.js', 'public/js');

mix.sass('resources/assets/sass/app.scss', 'public/css');

mix.options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.js') ],
});
