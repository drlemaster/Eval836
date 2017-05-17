module.exports = function initGrunt(grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  });

  grunt.loadTasks('grunt-tasks');

  grunt.registerTask('check', ['jshint', 'jscs']);
  grunt.registerTask('bundle', ['shell:bundle:<%= pkg.version %>']);
  grunt.registerTask('default', ['check']);
  grunt.registerTask('lint', ['eslint']);
};
