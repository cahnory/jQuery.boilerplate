// jQuery Plugin Boilerplate
// A boilerplate for jumpstarting jQuery plugins development
// by François Germain

(function($) {

	//	Static private vars
	var pluginName = 'boilerplate';

	$[pluginName] = function(node, options) {
		// Private vars
		var
		plugin		= this,
		node		= node,
		element		= $(node),
		settings	= $.extend({}, {
			// default settings
			foo: 'bar'
		}, options),
		
		// Private methods
		init = function() {
			// code goes here
		},
		// privateMethod exemple
		privateMethod = function() {
			// code goes here
		};
		
		/**
		 * Public methods
		 */
		plugin.methods = {
			bind: function() {
				arguments[0]	= arguments[0].replace(/([\s ]+|^)([^\s .]+)/g, '$1'+pluginName+'-$2');
				element.bind.apply(element, arguments);
			},
			unbind: function() {
				arguments[0]	= arguments[0].replace(/([\s ]+|^)([^\s .]+)/g, '$1'+pluginName+'-$2');
				element.unbind.apply(element, arguments);
			},
			trigger: function() {
				arguments[0]	= arguments[0].replace(/([\s ]+|^)([^\s .]+)/g, '$1'+pluginName+'-$2');
				element.trigger.apply(element, arguments);
			},
			settings: function() {
				return	$.extend({}, settings);
			},
			// publicMethod exemple
			publicMethod: function() {
				// code goes here
			}
		};

		// Save plugin instance and init
		element.data(pluginName, plugin);
		init();
	}

	$.fn[pluginName] = function(options) {
		var	args	= arguments,
			output	= this;
        this.each(function() {
        	// Instanciation
            if (undefined == (plugin = $(this).data(pluginName))) {
                var plugin = new $[pluginName](this, options);
            }
            
            // Method calling
            if (plugin.methods[options]) {
            	// Method is returning something, break the chain.
            	if(undefined !== (r = plugin.methods[options].apply( plugin, Array.prototype.slice.call( args, 1 )))) {
            		output	= r;
            		return	false;
            	}
            }
        });
        return	output;
	}

})(jQuery);