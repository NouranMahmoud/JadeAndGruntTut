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
        cwd: 'source',
        src: [ '**', '!**/*.jade' ],
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
    }
  }); 
  
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-contrib-jade");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-copy");

  // Default task.
  grunt.registerTask('default',null, ['jade','watch']);
};