fis.set('project.ignore', ['Parts/**', 'fis-conf.js', 'Common/plugins/**']);

fis.hook('ejs-include-path');

fis.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.{css,less,scss}', {
    preprocessor: fis.plugin('autoprefixer', {
        "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
        "cascade": true
    }),
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css',
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});

fis.match('**.ejs', {
    parser: fis.plugin('render-ejs'),
    rExt: '.html'
});

// fis.match('::package', {
//     postpackager: fis.plugin('loader', {
//         allInOne: true
//     })
// });