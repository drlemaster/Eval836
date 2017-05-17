module.exports = function gruntBabel(grunt) {
  grunt.config('babel', {
    options: {
      sourceMap: false,
      modules: 'amd',
      moduleIds: true,
      moduleRoot: 'icboe',
      sourceRoot: 'src',
      blacklist: [
        'strict',
      ],
    },
    dist: {
      files: [{
        expand: true,
        cwd: 'src',
        src: ['**/*.js'],
        dest: 'src-out',
      }],
    },
  });

  grunt.loadNpmTasks('grunt-babel');
};
