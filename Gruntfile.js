module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    
    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            jobs: grunt.file.readJSON('data.json')
          }
        },
        files: {
          "build/index.html": "app/views/jobs.jade"
        }
      }
    },
    copy: {
      build: {
        cwd: 'app',
        src: [ 'js/*','style/*', '!**/*.jade' ],
        dest: 'build',
        expand: true
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },
      jade: {
        files: ['app/views/**/*.jade'],
        tasks: ['jade']
      }
    },
    connect: {
      server: {
        options: {
          port: 4000,
          base: 'build',
          hostname: '*'
        }
      }
    }
  }); 
  
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-contrib-jade");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task.
  grunt.registerTask('default',"Convert Jade templates into html templates", ['jade', 'copy' ,'connect','watch']);
};