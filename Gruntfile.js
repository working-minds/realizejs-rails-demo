/*global module:false*/
var path = require('path');

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: './vendor/assets',
          install: true,
          verbose: true,
          cleanTargetDir: false,
          cleanBowerDir: false,

          layout: function(type, component, source) {
            var renamedType = type;
            console.log(renamedType);
            if (type == 'js') renamedType = 'javascripts';
            else if (type == 'css') renamedType = 'stylesheets';


            return path.join(renamedType, component);
          }
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-bower-task');

};