(function() {
  var GridHeaderSortable;
  GridHeaderSortable = (function() {
    function GridHeaderSortable(e, wait, request) {
      this.e = e;
      this.wait = wait;
      this.request = request;
      this.clicksCount = 0;
      $(this.e).click(function() {
        alert(this.clicksCount);
        if (this.clicksCount < 2) {
          return this.clicksCount++;
        } else {
          return this.clicksCount = 0;
        }
      });
    }
    return GridHeaderSortable;
  })();
}).call(this);
