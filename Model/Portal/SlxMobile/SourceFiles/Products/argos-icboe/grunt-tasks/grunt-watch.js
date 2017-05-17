module.exports = function gruntWatch(grunt) {
  grunt.config('watch', {
    options: {
    },
    babel: {
      files: ['src/**/*.js'],
      tasks: ['babel', 'lint'],
      options: {
        spawn: false,
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
