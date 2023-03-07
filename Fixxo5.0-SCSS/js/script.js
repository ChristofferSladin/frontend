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

// FUNCTION GENERATING A PRODUCT CARD PER PRODUCT FROM API
function generateProducts(data, prefix, productsEl) {
  for (let i = 0; i < data.length; i++) {
    const product = data[i];
    const productEl = document.createElement('div');
    productEl.setAttribute('id', `${prefix}-product-${i}`);
    productEl.classList.add('product-card');

    const innerHTML = `
      <div class="product-card-image-container">
        <img src="${product.imageUrl}" alt="${product.name}"/>
      </div>
      <h2 class="product-card-category">${product.category}</h2>
      <h2 class="product-card-title">${product.name}</h2>
      <div class="product-card-rating">
        <div>${showStars(product.starRating)}</div>
      </div>
      <p class="product-card-price">${product.originalPrice} ${product.currency}</p>`;
    
    productEl.innerHTML = innerHTML;
    productsEl.appendChild(productEl);
  }
}

// NEW PRODUCTS
async function getNewProducts() {
  try {
    const response = await fetch('https://kyh-net22.azurewebsites.net/api/products/new');
    const data = await response.json();
    
    const productsEl = document.getElementById('new-products-grid');
    generateProducts(data, 'new', productsEl);
    
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// NULL PRODUCTS
async function getNullProducts() {
  try {
    const response = await fetch('https://kyh-net22.azurewebsites.net/api/products/');
    const data = await response.json();
    
    const nullTagProducts = data.filter(product => !product.tag).slice(0, 2);

    const productsEl = document.getElementById('new-products-grid');
    generateProducts(nullTagProducts, 'null', productsEl);
    
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// FEATURED PRODUCTS
async function getFeaturedProducts() {
  try {
    const response = await fetch('https://kyh-net22.azurewebsites.net/api/products/featured');
    const data = await response.json();

    const productsEl = document.getElementById('product-container');

    productsEl.innerHTML = '';
  
    for (let i = 0; i < data.length; i++) {
      const product = data[i];

      const productEl = document.createElement('div');
      productEl.setAttribute('id', `product-${i}`);
      productEl.classList.add('product-card');

    const innerHTML = `
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
        <div>${showStars(product.starRating)}</div>
      </div>
      <p class="product-card-price">Price: ${product.originalPrice} ${product.currency}</p>`;
    
    productEl.innerHTML = innerHTML;
    productsEl.appendChild(productEl);
  }

  } catch (error) {
    console.error('Error fetching products:', error);
  }
}