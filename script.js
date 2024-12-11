
// for move carosel
let currentIndex = 0;


function moveSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    
 
    currentIndex++;
    
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    
    //
    const offset = -currentIndex * 100;
    

    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(${offset}%)`;
}
//time
setInterval(moveSlide, 4000);

//JSON object

const productData = {
    "products": [
      {
        "id": 1,
        "name": "Product 1",
        "description": "This is the description of Product 1.",
        "image": "https://i.postimg.cc/VvpvsHHc/photo-1542291026-7eec264c27ff.jpg", 
        "price": "$25"
      },
      {
        "id": 2,
        "name": "Product 2",
        "description": "This is the description of Product 2.",
        "image": "https://i.postimg.cc/gkLrtmnc/images.jpg", 
        "price": "$30"
      },
      {
        "id": 3,
        "name": "Product 3",
        "description": "This is the description of Product 3.",
        "image": "https://i.postimg.cc/mrBDr9Vh/istockphoto-1350560575-612x612.jpg", 
        "price": "$35"
      },
      {
        "id": 4,
        "name": "Product 4",
        "description": "This is the description of Product 4.",
        "image": "https://i.postimg.cc/pdCd5d1C/pexels-webdonut-19090.jpg", 
        "price": "$40"
      },
      {
        "id": 7,
        "name": "Product 3",
        "description": "This is the description of Product 3.",
        "image": "https://i.postimg.cc/mrBDr9Vh/istockphoto-1350560575-612x612.jpg", 
        "price": "$35"
      },
      {
        "id": 8,
        "name": "Product 4",
        "description": "This is the description of Product 4.",
        "image": "https://i.postimg.cc/pdCd5d1C/pexels-webdonut-19090.jpg", 
        "price": "$40"
      },
   
      {
        "id": 6,
        "name": "Product 2",
        "description": "This is the description of Product 2.",
        "image": "https://i.postimg.cc/gkLrtmnc/images.jpg", 
        "price": "$30"
      },
  
      {
        "id": 5,
        "name": "Product 1",
        "description": "This is the description of Product 1.",
        "image": "https://i.postimg.cc/VvpvsHHc/photo-1542291026-7eec264c27ff.jpg", 
        "price": "$25"
      }
  
    ]
  };
  //for map data from json and displaying multiple cards in product container div

  window.onload = () => {
    const container = document.getElementById('product-container');
    productData.products.forEach(product => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>${product.price}</p>
                <button>Add to Cart</button>
            </div>
        `;
    });
};
  