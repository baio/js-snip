(function() {
  var GridHeaderSortablePresenter;
  GridHeaderSortablePresenter = (function() {
    function GridHeaderSortablePresenter($target, settings) {
      this.$target = $target;
      this.settings = settings;
      this.clicksCount = 0;
      ({
        click: function() {
          alert(this.clicksCount);
          if (this.clicksCount < 2) {
            return this.clicksCount++;
          } else {
            return this.clicksCount = 0;
          }
        }
      });
    }
    return GridHeaderSortablePresenter;
  })();
}).call(this);
