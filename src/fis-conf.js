fis.set('project.ignore', ['Parts/**', 'fis-conf.js', 'Common/plugins/**']);

fis.hook('ejs-include-path');

//less编译
fis.match('*.{css,less,scss}', {
    //less自动补充兼容
    preprocessor: fis.plugin('autoprefixer', {
        "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
        "cascade": true
    }),
    parser: fis.plugin('less'),
    rExt: '.css',
    optimizer: fis.plugin('clean-css')
});

//图片压缩
fis.match('*.{png,jpg,jpeg,gif}', {
    optimizer: fis.plugin('png-compressor')
});

//添加public
fis.match('*.{js,css,less,scss,png,jpg,jpeg,gif}', {
    domain: '/public'
});

//插件目录不动
fis.match('*/plugins/*.{js,css,less,scss,png,jpg,jpeg,gif}', {
    domain: ''
});

//解析ejs转为html
fis.match('**.ejs', {
    parser: fis.plugin('render-ejs'),
    rExt: '.html'
});

// fis.media('rls')
//     .set('project.ignore', ['Parts/**', 'fis-conf.js'])
//     .match('*.{js,css,less,scss,png,jpg,jpeg,gif,ejs}', {
//         domain: 'http://ov4rp02po.bkt.clouddn.com',
//         deploy: fis.plugin('qiniu', {
//             accessKey: 'OXORSLsFiEpyd1C5jG3XALwIKYjtnfgfdvvvYlXv',
//             secretKey: 'maudgcj_j4e09m9CoEmMHIiigp2WLGMh-bA1Goaz',
//             bucket: 'kenny-fis-study'
//         })
//     })
//     .match('*.js', {
//         // fis-optimizer-uglify-js 插件进行压缩，已内置
//         optimizer: fis.plugin('uglify-js'),
//     });