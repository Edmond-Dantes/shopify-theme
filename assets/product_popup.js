(function() {
  const addToCartform = document.getElementById('AddToCartForm');
  const stockListData = addToCartform.dataset.stockList;
  const stockList = JSON.parse(stockListData);
  const stock = stockList.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  Swal.fire('There are ' + stock + ' left!');
})()