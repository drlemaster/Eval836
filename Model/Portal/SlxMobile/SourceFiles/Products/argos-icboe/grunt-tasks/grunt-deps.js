/* eslint-disable */
module.exports = function gruntDeps(grunt) {
  grunt.config('argos-deps', {
    files: '../src/**/*.js',
    cwd: './build',
    template: 'release.tmpl',
    output: 'release.jsb2',
    modules: [{
      name: 'icboe',
      location: '../src'
    }]
  });

  grunt.loadNpmTasks('grunt-argos-deps');
};
