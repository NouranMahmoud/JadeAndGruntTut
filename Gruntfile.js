module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    
    jade: {
      compile: {
        options: {
            pretty: true
        },
        files: [ {
          expand: true,
          cwd: "app/views",
          src: "**/*.jade",
          dest: "build/templates",
          ext: ".html"
        }]
      }
    },

    sass: {  
      options: {
        includePaths: ['public/components/foundation/scss']
      },
      dist: {
        options: {
          sourceMap: false
        },
        files: {
          'build/css/app.css': 'app/assets/styles/scss/app.scss'
        }
      }
    },

    watch: {
      jade: {
        files: 'app/views/*.jade',
        tasks: ['jade']
      }
    }
  }); 
  
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-contrib-jade");
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Default task.
  grunt.registerTask('build', ['sass', 'jade']);
  grunt.registerTask('default',null, ['jade','watch']);
};