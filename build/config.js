module.exports = {
  css: {
    src: ['../css/**/*.+(css|styl|stylus|less|sass|scss)', '!../css/**/*.min.*'],
    dest: '../css'
  },
  img: {
    src: '../img/**/*.**',
    dest: '../img'
  },
  js: {
    src: ['../js/**/*.js', '!../js/**/*.min.*', '!../js/+(libs|vendor)/**/*.js'],
    dest: '../js'
  },
  clean: {
    src: ['../+(js|css)/**/*.min.**', '!../js/+(libs|vendor)/**/*.js']
  },
  watch: {
    src: '../+(js|css)/**/*.!(min)**'
  },
  server: {
    src: ['../+(js|css)/**/*.min.**', '/*.html']
  }
}
