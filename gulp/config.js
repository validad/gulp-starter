var dest = './build';
var src = './src';

module.exports = {
    browserSync: {
        open: false,
        server: {
            // We're serving the src folder as well
            // for sass sourcemap linking
            baseDir: [dest, src]
        },
        files: [
            dest + '/**',
            // Exclude Map files
            '!' + dest + '/**.map'
        ]
    },
    sass: {
        src: src + '/scss/**/*.scss',
        dest: dest
    },
    images: {
        src: src + '/images/**',
        dest: dest + '/images'
    },
    markup: {
        src: src + '/htdocs/**',
        dest: dest
    },
    browserify: {
        // Enable source maps
        debug: true,
        // Additional file extentions to make optional
        //extensions: [],
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: './src/js/app.js',
            dest: dest,
            outputName: 'app.js'
        }]
    }
};
