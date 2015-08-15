module.exports = config:
  overrides:
    production:
      optimize: true
      sourceMaps: false
      plugins: autoReload: enabled: false

  files:
    javascripts:
      joinTo:
        'js/app.js': /^app/
        'js/vendor.js': /^(?!app)/
        'test/js/test.js': /^test(\/|\\)(?!vendor)/
        'test/js/vendor.js': /^test(\/|\\)(?=vendor)/
      order:
         before: [
           'bower_components/jquery/dist/jquery.js'
           'bower_components/lodash/lodash.js'
           'bower_components/backbone/backbone.js'
           'bower_components/marionette/lib/backbone.marionette.js'
         ]
    stylesheets:
        joinTo: 'css/app.css'
  plugins:
    babel:
        ignore: [
            /^(bower_components|node_modules|test|vendor)/
            'app/legacyES5Code/**/*'
        ]
        pattern: /\.(js|es6|jsx)$/

    sass:
      mode: 'ruby' # set to 'native' to force libsass, faster

    autoReload:
      enabled:
        css: on
        js: on
        assets: on
      port: [3030, 4040]
