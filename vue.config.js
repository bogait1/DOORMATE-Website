module.exports = {
    pages: {
        index: {
            entry: 'src/pages/Home/main.js',
            template: 'public/index.html',
            title: 'DOORMATE',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        doku: {
            entry: 'src/pages/Doku/main.js',
            template: 'public/index.html',
            title: 'DOORMATE Dokumentation',
            chunks: ['chunk-vendors', 'chunk-common', 'doku']
        },
        physprototype: {
            entry: 'src/pages/PhysPro/main.js',
            template: 'public/index.html',
            title: 'DOORMATE Physischer Prototyp',
            chunks: ['chunk-vendors', 'chunk-common', 'physprototype']
        },
        appprototype: {
            entry: 'src/pages/AppPro/main.js',
            template: 'public/index.html',
            title: 'DOORMATE App Prototyp',
            chunks: ['chunk-vendors', 'chunk-common', 'appprototype']
        },
        interview: {
            entry: 'src/pages/Interview/main.js',
            template: 'public/index.html',
            title: 'DOORMATE Interview',
            chunks: ['chunk-vendors', 'chunk-common', 'interview']
        },
        downloads: {
            entry: 'src/pages/Downloads/main.js',
            template: 'public/index.html',
            title: 'DOORMATE Literatur',
            chunks: ['chunk-vendors', 'chunk-common', 'downloads']
        },
        about: {
            entry: 'src/pages/Team/main.js',
            template: 'public/index.html',
            title: 'Team DOORMATE',
            chunks: ['chunk-vendors', 'chunk-common', 'about']
        }
    }
}

chainWebpack: config => {
    config.module
        .rule("pdf")
        .test(/\.pdf$/)
        .use("file-loader")
        .loader("file-loader")
}