module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    concat: {
      options: {
        separator: ';',
        stripBanners: true 
      },
      basic: {
        src: [
               'js/*/*.js'
        ],
        dest: 'js/plugins.js'
      }
    },



    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'js/min/main-custom.min.js': ['build/mobile/common/js/<%= pkg.name %>-custom.js'],
          'js/min/plugins.min.js': ['build/mobile/common/js/<%= pkg.name %>-thirdparty.js']
        }
      }
    },



    qunit: {
      files: ['test/**/*.html']
    },



    jshint: {
      files: ['Gruntfile.js', 'js/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },



    compass: {
      dist: {
        options: {
          sassDir: 'scss/',
          cssDir: 'css/'
        }
      }
    },




    watch: {
      css: {
        files: [
          'scss/*.scss',
          'scss/*/*.scss',
           'js/*.js'
          // 'src/mobile/includes/*.php',
          // 'src/mobile/*.php'
        ],
        tasks: ['compass'],
        options: {
          livereload: 35729,
        }
      }
    },




    connect: {
      all: {
        options:{
          port: 9000,
          hostname: "localhost"
          // keepalive: true,
        }
      }
    },




    php: {
        dist: {
            options: {
                port: 9000,
                base: ''
            }
        }
    },




    open: {
      all: {
        path: 'http://localhost:<%= php.dist.options.port%>'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-sassdoc');
  grunt.loadNpmTasks('grunt-contrib-yuidoc');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-php');

  grunt.registerTask('test', ['jshint', 'qunit']);

  // grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

  grunt.registerTask('publishjs', ['concat', 'uglify']);

   grunt.registerTask('default', function (target) {
      grunt.log.warn('Default task set to Serve for development');
      grunt.task.run([target ? ('serve:' + target) : 'serve']);
  });

  grunt.registerTask('server', function (target) {
      grunt.log.warn('The "server" task has been deprecated. Use "grunt serve" to start a server.');
      grunt.task.run([target ? ('serve:' + target) : 'serve']);
  });



  grunt.registerTask('serve',[
    'php',
    'open',
    'watch'
  ]);

};