module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                },
                files: {
                    // the first path is the output and the second is the input
                    'assets/css/master.css': 'assets/scss/master.scss',
                }
            }
        },

        uglify: {
           dist: {
            files: {
                'assets/js/main.js': 'assets/js/custom/custom.js',
            }
          }
        },
        // configure the "grunt watch" task
        watch: {
            style: {
                files: ['assets/scss/*.scss'],
                tasks: ['sass']
            },
            script: {
                files: ['assets/js/custom/*.js'],
                tasks: ['uglify']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // "grunt" is the same as running "grunt sass:dist".
    // grunt.registerTask('default', ['sass','watch']);
    grunt.registerTask('default', ['sass' ,'uglify', 'watch']);
    // grunt.registerTask('dev', ['sass:dev']);
};
