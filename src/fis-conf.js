fis.set('project.ignore', ['Parts/**', 'fis-conf.js', 'Common/plugins/**']);

fis.hook('ejs-include-path');

// fis.match('*.js', {
//     // fis-optimizer-uglify-js 插件进行压缩，已内置
//     optimizer: fis.plugin('uglify-js'),
// });

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

fis.match('*.{png,jpg,jpeg,gif}', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});

fis.match('*.{js,css,less,scss,png,jpg,jpeg,gif}', {
    domain: '/public'
});
fis.match('*/plugins/*.{js,css,less,scss,png,jpg,jpeg,gif}', {
    domain: ''
});

fis.match('**.ejs', {
    parser: fis.plugin('render-ejs'),
    rExt: '.html'
});

fis.media('rls')
    .set('project.ignore', ['Parts/**', 'fis-conf.js'])
    .match('*.{js,css,less,scss,png,jpg,jpeg,gif,ejs}', {
        domain: 'http://ov4rp02po.bkt.clouddn.com',
        deploy: fis.plugin('qiniu', {
            accessKey: 'OXORSLsFiEpyd1C5jG3XALwIKYjtnfgfdvvvYlXv',
            secretKey: 'maudgcj_j4e09m9CoEmMHIiigp2WLGMh-bA1Goaz',
            bucket: 'kenny-fis-study'
        })
    })
    .match('*.js', {
        // fis-optimizer-uglify-js 插件进行压缩，已内置
        optimizer: fis.plugin('uglify-js'),
    });