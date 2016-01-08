'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-html2js');

  grunt.initConfig({
    clean: ['./dist/templates.js'],
    concat: {
      options: {
      },
      dist: {
        src: [
          './js/coluCopayAddon.js',
          './js/overrides/*.js',
          './js/controllers/*.js',
          './js/filters/*.js',
          './js/services/*.js',
          './js/models/*.js',
          './js/directives/*.js',
          './dist/templates.js',
          './bower_components/ng-file-upload/ng-file-upload.js',
          'node_modules/colu/client/colu.client.js'
        ],
        dest: './dist/coluCopayAddon.js'
      }
    },
    html2js: {
      app: {
        options: {
          rename: function(moduleName) {
            return 'colu-copay-addon/' + moduleName.replace('../', '');
          }
        },
        src: ['./views/{,*/}*.html'],
        dest: './dist/templates.js',
        module: 'copayAssetViewTemplates'
      }
    }
  });

  grunt.registerTask('default', [
    'html2js',
    'concat',
    'clean'
  ]);

};
