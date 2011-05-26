/**
 * Created by JetBrains WebStorm.
 * User: max
 * Date: 26.05.11
 * Time: 10:11
 * The simplest template for jQuery widgets + class as working object
 */

//class is built by guide -
//http://phrogz.net/js/classes/OOPinJS.html
function GridHeaderSortPresenter($target, settings)
{
    //private
    var $target = $target;
    var settings = settings;

    var clicksCount = 0;

    this.click = function()
    {
        alert(clicksCount);
        if (clicksCount < 2) {
          return clicksCount++;
        } else {
          return clicksCount = 0;
        }
    }
}

//plugins is built by boilerplate -
// http://docs.jquery.com/Plugins/Authoring
// and http://stefangabos.ro/jquery/jquery-plugin-boilerplate/
(function($){
    $.fn.GridHeaderSort = function(method)
    {
        //Settings
        var settings = {

          'callbackUrl' : null,

          'delay' : 3000
        };

        var methods =
        {
            init : function(options)
            {
                return this.each(function()
                {
                    if (options)
                    {
                        $.extend(settings, options);
                    }

                    var $this = $(this),
                        data = $this.data("GridHeaderSort");

                    //bind events here
                    $this.bind('click.GridHeaderSort', methods.click);

                    //set for element reference to this
                    if (!data)
                    {
                        $this.data("GridHeaderSort", {target: $this, presenter : new GridHeaderSortPresenter(settings)});
                    }

                });
            },
            destroy : function()
            {
                return this.each(function(){
                     var $this = $(this),
                     data = $this.data("GridHeaderSort");
                    ///

                     // unbind events
                     $this.unbind(".GridHeaderSort");
                     // remove referenced data
                     data.GridHeaderSort.remove();
                     $this.removeData("GridHeaderSort");
                            })

            },
            click : function()
            {
                var data = $(this).data("GridHeaderSort");

                data.presenter.click();
            }
        }

        // Method calling logic
        if ( methods[method] ) {
          return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
          return methods.init.apply( this, arguments );
        } else {
          $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        }        
    };
})(jQuery);
