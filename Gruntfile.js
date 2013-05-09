module.exports = function(grunt) {
  grunt.initConfig({

    uglify: {
      options: {
        preserveComments: 'some'
      },
      my_target: {
        files: {
          'snap.min.js': ['snap.js']
        }
      }
    },

    jshint: {
      all: ['Gruntfile.js', 'snap.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'uglify']);

};