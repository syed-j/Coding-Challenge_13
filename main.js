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

    // Function to dynamically create and display product details
function displayProducts(products) {
    products.forEach(product => {
        const { company, name, price, image } = product.fields;

        // Create a container div for each product
        const productElement = document.createElement('div');
        productElement.style.border = '1px solid #ddd';
        productElement.style.margin = '10px';
        productElement.style.padding = '10px';
        productElement.style.textAlign = 'center';
        productElement.style.width = '200px';
        productElement.style.display = 'inline-block';
        productElement.style.verticalAlign = 'top';

        // Product Image
        const productImage = document.createElement('img');
        productImage.src = image[0].url;
        productImage.alt = name;
        productImage.style.width = '100%';
        productElement.appendChild(productImage);

        // Product Name
        const productName = document.createElement('h2');
        productName.textContent = name;
        productName.style.fontSize = '1.2em';
        productName.style.margin = '10px 0';
        productElement.appendChild(productName);

        // Company Name
        const productCompany = document.createElement('p');
        productCompany.textContent = `Company: ${company}`;
        productCompany.style.margin = '5px 0';
        productElement.appendChild(productCompany);

        // Product Price
        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: $${(price / 100).toFixed(2)}`;
        productPrice.style.margin = '5px 0';
        productElement.appendChild(productPrice);

        // Append product to the main container
        productContainer.appendChild(productElement);
    });
}