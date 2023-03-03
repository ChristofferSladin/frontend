
// GENERATE STARS FROM API

function showStars(rating) {
  const fullStar = '<i class="fa-sharp fa-star"></i>';
  const emptyStar = '<i class="fa fa-regular fa-star"></i>';

  const fullCount = Math.floor(rating);
  const emptyCount = 5 - fullCount;

  let html = '';
  for (let i = 0; i < fullCount; i++) {
    html += fullStar;
  }
  for (let i = 0; i < emptyCount; i++) {
    html += emptyStar;
  }
  return html;
}

// GENERATE PRODUCT CARDS FROM API

async function getFeaturedProducts() {
  try {
    const response = await fetch('https://kyh-net22.azurewebsites.net/api/products/featured');
    const data = await response.json();
    const productsEl = document.getElementById('product-container');
    for (let i = 0; i < 8; i++) {
      const product = data[i];
      const productEl = document.createElement('div');
      productEl.setAttribute('id', `product-${i}`);
      productEl.classList.add('product-card');
      productEl.innerHTML = `
        <div class="product-card-image-container">
          <img src="${product.imageUrl}" alt="${product.name}"/>
          <div class="product-card-menu">
            <nav class="menu-icons">
              <a class="menu-link" href="#"><i class="fa-regular fa-code-compare"></i></a>
              <a class="menu-link" href="#"><i class="fa-regular fa-heart"></i></a>
              <a class="menu-link" href="#"><i class="fa-regular fa-bag-shopping"></i></a>                   
            </nav>
            <a href="#" id="btn-quick-view" class="btn-theme">QUICK VIEW</a>
          </div>
        </div>
        <h2 class="product-card-category">${product.category}</h2>
        <h2 class="product-card-title">${product.name}</h2>
        <div class="product-card-rating">
          <div ${showStars(product.starRating)}</div>
        </div>
        <p class="product-card-price">Price: ${product.originalPrice} ${product.currency}</p>`;
      productsEl.appendChild(productEl);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// --------------- BUTTON SCROLL --------------------------------
const mybutton = document.getElementById("button-scroll");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// async function getFeaturedProducts() {
//   try {
//       const response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline');
//       const data = await response.json();

//       const productsEl = document.getElementById('product-container');
//       for (let i = 0; i < 8; i++) {
//           const product = data[i];
//           const productEl = document.createElement('div');
//           productEl.setAttribute('id', `product-${i}`);
//           productEl.classList.add('product-card');
//           productEl.innerHTML = `
//               <div class="product-card-image-container">
//                   <img src="${product.image_link}" alt="${product.name}"/>
//                   <div class="product-card-menu">
//                       <nav class="menu-icons">
//                           <a class="menu-link" href="#"><i class="fa-regular fa-code-compare"></i></a>
//                           <a class="menu-link" href="#"><i class="fa-regular fa-heart"></i></a>
//                           <a class="menu-link" href="#"><i class="fa-regular fa-bag-shopping"></i></a>                   
//                       </nav>
//                       <a href="#" class="btn-theme">QUICK VIEW</a>
//                   </div>
//               </div>
//               <h2 class="product-card-title">${product.name}</h2>
//               <p class="product-card-price">Price: ${product.price}</p>`;
//           productsEl.appendChild(productEl);
//       }

//   } catch (err) {
//       console.error('Error fetching products:', err);
//   }
// }

  
// ---------------------------------------------------------------------






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