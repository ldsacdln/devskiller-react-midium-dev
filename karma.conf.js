module.exports = function (config) {

    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'node_modules/karma-read-json/karma-read-json.js',
            {pattern: 'src/**/*.json', included: false},
            {pattern: 'src/**/*.spec.js', watched: false}
        ],
        exclude: [],
        junitReporter: {
            useBrowserName: false,
            outputFile: 'test-results.xml'
        },
        preprocessors: {
            'src/*.spec.js': ['webpack'],
            'src/**/*.spec.js': ['webpack']
        },

        webpack: {
            mode : 'development',
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['babel-preset-env'],
                                plugins: ['transform-object-rest-spread']
                            }
                        }
                    }
                ]
            }
        },
        reporters: ['progress', 'junit'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        concurrency: Infinity
    });
};
