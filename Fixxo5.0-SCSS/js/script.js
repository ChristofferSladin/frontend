
// THIS CODE WORKS BUT GETS ALL PRODUCTS FROM THE API


//   function getProductsAll(){
//     fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
//       .then(response => response.json())
//       .then(data => {
  
//         const productsEl = document.getElementById('product-container');
        
//         data.forEach((product, index) => {
//             const productEl = document.createElement('div');
//             productEl.setAttribute('id', `product-${index}`);
//             productEl.innerHTML = `
//               <h2 class="product-card-title">${product.name}</h2>
//               <img src="${product.image_link}" alt="${product.name}"/>
//               <p class="product-card-category">${product.description}</p>
//               <p class="product-card-price">Price: ${product.price}</p>
//               <a href="#" class="btn-theme">QUICK VIEW</a>`;
//             productsEl.appendChild(productEl);
//         });
          
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
//   }

function get8Products() {
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then(response => response.json())
      .then(data => {
        const productsEl = document.getElementById('product-container');
        for (let i = 0; i < 8; i++) {
          const product = data[i];
          const productEl = document.createElement('div');
          productEl.setAttribute('id', `product-${i}`);
          productEl.classList.add('product-card');
          productEl.innerHTML = `
            <h2 class="product-card-title">${product.name}</h2>
            <img src="${product.image_link}" alt="${product.name}"/>
             
            <p class="product-card-price">Price: ${product.price}</p>
            <a href="#" class="btn-theme">QUICK VIEW</a>`;
          productsEl.appendChild(productEl);
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }
  

  

