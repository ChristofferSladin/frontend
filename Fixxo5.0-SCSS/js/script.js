fetch('https://kyh-net22.azurewebsites.net/api/products/%7Btag%7D')
    .then(response => response.json())
    .then(data => console.log(data));


    $.ajax({
        url: 'https://index.html',
        method: 'GET',
        success: function(products) {
          // Iterate over each product and append it to the page
            $(products).each(function() {
              $('#featured-products').append(this.products);
        });
      }
      });