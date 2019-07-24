(function() {
  const form = document.getElementById("AddToCartForm");
  form.onsubmit = function(e) {
    e.preventDefault();
    Shopify.addItemFromForm("AddToCartForm");
  };
})()