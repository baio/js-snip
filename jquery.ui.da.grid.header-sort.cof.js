(function() {
  var $, GridHeaderSortablePresenter;
  $ = jQuery;
  GridHeaderSortablePresenter = (function() {
    function GridHeaderSortablePresenter($target, settings) {
      this.$target = $target;
      this.settings = settings;
      this.clicksCount = 0;
    }
    GridHeaderSortablePresenter.prototype.click = function() {
      alert(this.clicksCount);
      if (this.clicksCount < 2) {
        return this.clicksCount++;
      } else {
        return this.clicksCount = 0;
      }
    };
    return GridHeaderSortablePresenter;
  })();
  $.fn.extend({
    GridHeaderSort: function(method) {
      var methods, settings;
      settings = {
        'callbackUrl': null,
        'delay': 3000
      };
      methods = {
        init: function(options) {
          return this.each(function() {
            var $this, data;
            if (options) {
              $.extend(settings, options);
            }
            $this = $(this);
            data = $this.data("GridHeaderSort");
            $this.bind("click.GridHeaderSort", methods.click);
            if (!data) {
              return $this.data("GridHeaderSort", {
                presenter: new GridHeaderSortablePresenter($this, settings)
              });
            }
          });
        },
        destroy: function() {
          return this.each(function() {
            var $this, data;
            $this = $(this);
            data = $this.data("GridHeaderSort");
            $this.unbind(".GridHeaderSort");
            data.GridHeaderSort.remove();
            return $this.removeData("GridHeaderSort");
          });
        },
        click: function() {
          return $(this).data("GridHeaderSort").presenter.click();
        }
      };
      if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || !method) {
        return methods.init.apply(this, arguments);
      } else {
        return $.error("Method " + method + " does not exist on jQuery.GridHeaderSort");
      }
    }
  });
}).call(this);
