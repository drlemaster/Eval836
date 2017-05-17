module.exports = function less(grunt) {
  grunt.config('less', {
      development: {
          options: {
              paths: ['content/css'],
          },
          files: {
              'min/css/icboe.min.debug.css': 'content/css/icboe.less',
          },
      },
      production: {
          options: {
              paths: ['content/css'],
              compress: true,
          },
          files: {
              'min/css/icboe.min.css': 'content/css/icboe.less',
          },
      },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
};
