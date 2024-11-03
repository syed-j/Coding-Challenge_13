// Get the elements for displaying products and error messages
const productContainer = document.getElementById('product-container');
const errorMessage = document.getElementById('error-message');

// Fetch product data from the API
fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => displayProducts(data))
    .catch(error => {
        console.error('Error fetching products:', error);
        errorMessage.style.display = 'block';
        errorMessage.textContent = "Failed to load products. Please try again later.";
    });
