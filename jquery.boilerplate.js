// jQuery Plugin Boilerplate
// A boilerplate for jumpstarting jQuery plugins development
// by François Germain
(function($) {

  // Static private vars
  var
  // Name of the plugin, edit it
  pluginName = 'boilerplate',
  plugin = $[ pluginName ] = function( node, options ) {
    // Private vars
    var
    // Plugin instance
    instance = this,
    // jQuery object
    element = $(node),
    // settings (user/default)
    settings = $.extend( {}, {
      lang: 'en'
    }, options ),
    
    // Private methods
    // Init the plugin instance
    init = function() {
      // code goes here
    },
    // Return translated string
    getText = function( name ) {
      if ( settings.lang in  plugin.langs && name in plugin.langs[ settings.lang ] ) {
        return plugin.langs[ settings.lang ][ name ];
      } else {
        return name;
      }
    };
    
    /**
     * Public methods
     */
    instance.methods = {
      // Return a clone of settings
      settings: function() {
        return $.extend( {}, settings );
      },
      // Return translated string
      getText: function( name ) {
        return getText( name );
      }
    };

    // Save plugin instance and init
    element.data( 'plugin-' + pluginName, instance );
    init();
  },
  call = function( instance, method, args ) {
    var output = undefined;
    if ( method in instance.methods ) {
      // Method is returning something, break the chain.
      return instance.methods[ method ].apply( instance, args );
    }
  };
  plugin.events = {
    name: pluginName + '-name'
  };
  plugin.langs = {
    en: { 'name': 'name' },
    fr: { 'name': 'nom' }
  };

  $.fn[ pluginName ] = function( options ) {
    var
    args = arguments,
    output = this;
    this.each(function() {
      // Instanciation
        if ( undefined == ( instance = $( this ).data( 'plugin-' + pluginName ))) {
            var instance = new plugin( this, options );
        }
        
        // Method calling
        if(undefined !== ( r = call( instance, options, Array.prototype.slice.call( args, 1 )))) {
          output = r;
        }
    });
    return output;
  }

})(jQuery);