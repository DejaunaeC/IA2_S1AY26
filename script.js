// Product Data
var products = [
    {
        id: 1,
        name: 'Yara',
        brand: 'Lattafa',
        price: 7500,
        image: 'images/Yara.webp',
        rating: 4.9,
        reviews: 456,
        size: '3.4oz',
        description: 'A sweet and fruity fragrance with notes of orchid, heliotrope, and tangerine. Perfect for day and evening wear with incredible longevity.',
        customerReviews: [
            { author: 'Sarah M.', date: '2025-11-15', rating: 5, text: 'Absolutely stunning! Smells like expensive perfume at an affordable price.' },
            { author: 'Lisa K.', date: '2025-11-10', rating: 5, text: 'My signature scent now. Get compliments everywhere I go!' }
        ]
    },
    {
        id: 2,
        name: 'Yara Candy',
        brand: 'Lattafa',
        price: 7800,
        image: 'images/Yara Candy.webp',
        rating: 4.8,
        reviews: 389,
        size: '3.4oz',
        description: 'A sweeter version of the beloved Yara. Combines candy-like sweetness with elegant floral notes for a youthful, feminine scent.',
        customerReviews: [
            { author: 'Sarah M.', date: '2025-11-15', rating: 5, text: 'Absolutely stunning! Smells like expensive perfume at an affordable price.' },
            { author: 'Lisa K.', date: '2025-11-10', rating: 5, text: 'My signature scent now. Get compliments everywhere I go!' }
        ]
    },
    {
        id: 3,
        name: 'Angham',
        brand: 'Lattafa',
        price: 6500,
        image: 'images/Angham.webp',
        rating: 4.7,
        reviews: 234,
        size: '3.4oz',
        description: 'Elegant and sophisticated with fruity top notes, floral heart, and warm woody base. Perfect for confident, modern women.',
        customerReviews: [
            { author: 'Sarah M.', date: '2025-11-15', rating: 5, text: 'Absolutely stunning! Smells like expensive perfume at an affordable price.' },
            { author: 'Lisa K.', date: '2025-11-10', rating: 5, text: 'My signature scent now. Get compliments everywhere I go!' }
        ]
    },
    {
        id: 4,
        name: 'Haya',
        brand: 'Lattafa',
        price: 7200,
        image: 'images/Haya.webp',
        rating: 4.6,
        reviews: 178,
        size: '3.4oz',
        description: 'Fresh and vibrant with citrus and floral notes. A youthful, energetic fragrance perfect for daytime wear.',
        customerReviews:[
            { author: 'Sarah M.', date: '2025-11-15', rating: 5, text: 'Absolutely stunning! Smells like expensive perfume at an affordable price.' },
            { author: 'Lisa K.', date: '2025-11-10', rating: 5, text: 'My signature scent now. Get compliments everywhere I go!' }
        ]
    },
    {
        id: 5,
        name: 'Nebras',
        brand: 'Lattafa',
        price: 6800,
        image: 'images/Nebras.webp',
        rating: 4.7,
        reviews: 201,
        size: '3.4oz',
        description: 'A mysterious oriental fragrance with amber, musk, and floral notes. Warm and captivating for evening wear.',
        customerReviews: [
            { author: 'Sarah M.', date: '2025-11-15', rating: 5, text: 'Absolutely stunning! Smells like expensive perfume at an affordable price.' },
            { author: 'Lisa K.', date: '2025-11-10', rating: 5, text: 'My signature scent now. Get compliments everywhere I go!' }
        ]
    },
    {
        id: 6,
        name: 'Fakhar',
        brand: 'Lattafa',
        price: 8200,
        image: 'images/Fakhar.webp',
        rating: 4.9,
        reviews: 512,
        size: '3.4oz',
        description: 'Luxurious and rich with rose, saffron, and oud. A statement fragrance that commands attention with excellent projection.',
        customerReviews: [
            { author: 'Sarah M.', date: '2025-11-15', rating: 5, text: 'Absolutely stunning! Smells like expensive perfume at an affordable price.' },
            { author: 'Lisa K.', date: '2025-11-10', rating: 5, text: 'My signature scent now. Get compliments everywhere I go!' }
        ]
    },
    {
        id: 7,
        name: 'The Kingdom',
        brand: 'Lattafa',
        price: 7500,
        image: 'images/The Kingdom.webp',
        rating: 4.8,
        reviews: 345,
        size: '3.4oz',
        description: 'Royal and majestic with amber, vanilla, and floral notes. A warm, comforting scent perfect for all occasions.',
        customerReviews: [
            { author: 'Sarah M.', date: '2025-11-15', rating: 5, text: 'Absolutely stunning! Smells like expensive perfume at an affordable price.' },
            { author: 'Lisa K.', date: '2025-11-10', rating: 5, text: 'My signature scent now. Get compliments everywhere I go!' }
        ]
    },
    {
        id: 8,
        name: 'Rave Now',
        brand: 'Lattafa',
        price: 6200,
        image: 'images/Rave Now.webp',
        rating: 4.5,
        reviews: 167,
        size: '3.4oz',
        description: 'Playful and energetic with fruity and floral notes. Perfect for young, vibrant personalities who love to stand out.',
        customerReviews: [
            { author: 'Sarah M.', date: '2025-11-15', rating: 5, text: 'Absolutely stunning! Smells like expensive perfume at an affordable price.' },
            { author: 'Lisa K.', date: '2025-11-10', rating: 5, text: 'My signature scent now. Get compliments everywhere I go!' }
        ]
    },
    {
        id: 9,
        name: 'Her Confession',
        brand: 'Lattafa',
        price: 7800,
        image: 'images/Her Confession.webp',
        rating: 4.7,
        reviews: 289,
        size: '3.4oz',
        description: 'Romantic and feminine with jasmine, vanilla, and musk. A confession of elegance and grace in every spray.',
        customerReviews: [
            { author: 'Sarah M.', date: '2025-11-15', rating: 5, text: 'Absolutely stunning! Smells like expensive perfume at an affordable price.' },
            { author: 'Lisa K.', date: '2025-11-10', rating: 5, text: 'My signature scent now. Get compliments everywhere I go!' }
        ]
    },
    {
        id: 10,
        name: 'Teriaq',
        brand: 'Lattafa',
        price: 6900,
        image: 'images/Teriaq.webp',
        rating: 4.6,
        reviews: 198,
        size: '3.4oz',
        description: 'Exotic and intriguing with spicy and woody notes. A unique fragrance for women who dare to be different.',
        customerReviews:[
            { author: 'Sarah M.', date: '2025-11-15', rating: 5, text: 'Absolutely stunning! Smells like expensive perfume at an affordable price.' },
            { author: 'Lisa K.', date: '2025-11-10', rating: 5, text: 'My signature scent now. Get compliments everywhere I go!' }
        ]
    },
    {
        id: 11,
        name: 'Anabiyedh Coral',
        brand: 'Lattafa',
        price: 7100,
        image: 'images/Coral.webp',
        rating: 4.7,
        reviews: 223,
        size: '3.4oz',
        description: 'Fresh and aquatic with floral undertones. Like a breeze from the ocean, refreshing and invigorating.',
        customerReviews:[
            { author: 'Sarah M.', date: '2025-11-15', rating: 5, text: 'Absolutely stunning! Smells like expensive perfume at an affordable price.' },
            { author: 'Lisa K.', date: '2025-11-10', rating: 5, text: 'My signature scent now. Get compliments everywhere I go!' }
        ]
    },
    {
        id: 12,
        name: 'Qimmah',
        brand: 'Lattafa',
        price: 8500,
        image: 'images/Qimmah.webp',
        rating: 4.9,
        reviews: 478,
        size: '3.4oz',
        description: 'Precious and luxurious with rose, oud, and amber. A masterpiece that embodies luxury and sophistication.',
        customerReviews: [
            { author: 'Sarah M.', date: '2025-11-15', rating: 5, text: 'Absolutely stunning! Smells like expensive perfume at an affordable price.' },
            { author: 'Lisa K.', date: '2025-11-10', rating: 5, text: 'My signature scent now. Get compliments everywhere I go!' }
        ]
    },
    {
        id: 13,
        name: 'Eclaire',
        brand: 'Lattafa',
        price: 6700,
        image: 'images/Eclaire.webp',
        rating: 4.6,
        reviews: 187,
        size: '3.4oz',
        description: 'Sweet and gourmand with vanilla and caramel notes. A delicious scent that\'s comforting and warm.',
        customerReviews:[
            { author: 'Sarah M.', date: '2025-11-15', rating: 5, text: 'Absolutely stunning! Smells like expensive perfume at an affordable price.' },
            { author: 'Lisa K.', date: '2025-11-10', rating: 5, text: 'My signature scent now. Get compliments everywhere I go!' }
        ]
    },
    {
        id: 14,
        name: 'Khamrah',
        brand: 'Lattafa',
        price: 8800,
        image: 'images/Khamrah.webp',
        rating: 5.0,
        reviews: 623,
        size: '3.4oz',
        description: 'Rich and opulent with dates, spices, and vanilla. A luxurious oriental fragrance with exceptional performance.',
        customerReviews: [
            { author: 'Sarah M.', date: '2025-11-15', rating: 5, text: 'Absolutely stunning! Smells like expensive perfume at an affordable price.' },
            { author: 'Lisa K.', date: '2025-11-10', rating: 5, text: 'My signature scent now. Get compliments everywhere I go!' }
        ]
    },
    {
        id: 15,
        name: 'Khamrah Qahwa',
        brand: 'Lattafa',
        price: 9200,
        image: 'images/Qahwa.webp',
        rating: 4.9,
        reviews: 534,
        size: '3.4oz',
        description: 'Coffee-inspired with rich notes of cardamom, vanilla, and praline. A unique gourmand fragrance that\'s addictively delicious.',
        customerReviews:[
            { author: 'Sarah M.', date: '2025-11-15', rating: 5, text: 'Absolutely stunning! Smells like expensive perfume at an affordable price.' },
            { author: 'Lisa K.', date: '2025-11-10', rating: 5, text: 'My signature scent now. Get compliments everywhere I go!' }
        ]
    },
    {
        id: 16,
        name: 'I am White Rouge',
        brand: 'Lattafa',
        price: 7400,
        image: 'images/Rouge.webp',
        rating: 4.8,
        reviews: 312,
        size: '3.4oz',
        description: 'Elegant and feminine with white flowers and musk. A clean, sophisticated scent perfect for any occasion.',
        customerReviews: [
            { author: 'Sarah M.', date: '2025-11-15', rating: 5, text: 'Absolutely stunning! Smells like expensive perfume at an affordable price.' },
            { author: 'Lisa K.', date: '2025-11-10', rating: 5, text: 'My signature scent now. Get compliments everywhere I go!' }
        ]
    }
];

// Cart array
var cart = [];
var currentProduct = null;

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCart();
    setupForms();
});

// Show/Hide pages
function showPage(pageId) {
    var sections = document.querySelectorAll('.page-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }
    
    var targetSection = document.getElementById(pageId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    var links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }

    if (pageId === 'checkout') {
        updateCheckout();
    }
    
    window.scrollTo(0, 0);
}

// Load products
function loadProducts() {
    var grid = document.getElementById('productGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = (function(p) {
            return function() { showProductModal(p); };
        })(product);
        
        var stars = '';
        for (var j = 0; j < Math.floor(product.rating); j++) {
            stars += '★';
        }
        for (var j = Math.floor(product.rating); j < 5; j++) {
            stars += '☆';
        }
        
        card.innerHTML = '<div class="product-image"><img src="' + product.image + '" alt="' + product.name + '" onerror="this.style.display=\'none\'; this.parentElement.style.fontSize=\'4rem\'; this.parentElement.innerHTML=\'✦\';"></div><h3>' + product.name + '</h3><p class="product-brand">' + product.brand + '</p><div class="product-rating"><span class="stars">' + stars + '</span><span class="rating-count">(' + product.rating + ')</span></div><div class="product-details"><span class="product-size">' + product.size + '</span><div class="product-price">JMD $' + product.price.toLocaleString() + '</div></div>';
        
        grid.appendChild(card);
    }
}

// Show product modal
function showProductModal(product) {
    currentProduct = product;
    
    var modal = document.getElementById('productModal');
    var modalImg = document.getElementById('modalProductImg');
    modalImg.src = product.image;
    modalImg.alt = product.name;
    modalImg.onerror = function() {
        this.style.display = 'none';
        this.parentElement.style.fontSize = '8rem';
        this.parentElement.innerHTML = '✦';
    };
    
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductBrand').textContent = product.brand;
    
    var stars = '';
    for (var i = 0; i < Math.floor(product.rating); i++) {
        stars += '★';
    }
    for (var i = Math.floor(product.rating); i < 5; i++) {
        stars += '☆';
    }
    document.getElementById('modalProductStars').textContent = stars;
    document.getElementById('modalProductRating').textContent = '(' + product.rating + ')';
    document.getElementById('modalProductReviews').textContent = product.reviews + ' reviews';
    
    document.getElementById('modalProductPrice').textContent = 'JMD $' + product.price.toLocaleString() + ' (' + product.size + ')';
    document.getElementById('modalProductDescription').textContent = product.description;
    
    var reviewsContainer = document.getElementById('reviewsContainer');
    reviewsContainer.innerHTML = '';
    for (var i = 0; i < product.customerReviews.length; i++) {
        var review = product.customerReviews[i];
        var reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        var reviewStars = '';
        for (var j = 0; j < review.rating; j++) {
            reviewStars += '★';
        }
        for (var j = review.rating; j < 5; j++) {
            reviewStars += '☆';
        }
        reviewCard.innerHTML = '<div class="review-header"><span class="review-author">' + review.author + '</span><span class="review-date">' + review.date + '</span></div><div class="product-rating" style="justify-content: flex-start;"><span class="stars">' + reviewStars + '</span></div><p class="review-text">' + review.text + '</p>';
        reviewsContainer.appendChild(reviewCard);
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Add to cart
function addToCart() {
    if (!currentProduct) return;
    
    var cartItem = {
        id: currentProduct.id,
        name: currentProduct.name,
        brand: currentProduct.brand,
        price: currentProduct.price,
        image: currentProduct.image,
        size: currentProduct.size,
        quantity: 1,
        cartId: Date.now()
    };
    
    var existingItem = null;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === cartItem.id) {
            existingItem = cart[i];
            break;
        }
    }
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push(cartItem);
    }
    
    updateCart();
    closeModal();
    alert(currentProduct.name + ' added to cart!');
}

// Update cart display
function updateCart() {
    var cartBadge = document.getElementById('cartBadge');
    var cartItems = document.getElementById('cartItems');
    var cartSummary = document.getElementById('cartSummary');
    
    var totalItems = 0;
    for (var i = 0; i < cart.length; i++) {
        totalItems += cart[i].quantity;
    }
    
    if (cartBadge) {
        cartBadge.textContent = totalItems;
        if (totalItems === 0) {
            cartBadge.style.display = 'none';
        } else {
            cartBadge.style.display = 'flex';
        }
    }
    
    if (!cartItems || !cartSummary) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-state"><h3>Your cart is empty</h3><p>Add some fragrances to get started!</p></div>';
        cartSummary.innerHTML = '';
        return;
    }
    
    cartItems.innerHTML = '';
    var subtotal = 0;
    
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        var itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        var cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = '<div class="cart-item-image"><img src="' + item.image + '" alt="' + item.name + '" onerror="this.style.display=\'none\';"></div><div><h4>' + item.name + '</h4><p>' + item.brand + ' - ' + item.size + '</p></div><div>JMD $' + item.price.toLocaleString() + '</div><div class="quantity-control"><button onclick="updateQuantity(' + item.cartId + ', -1)">-</button><input type="number" value="' + item.quantity + '" readonly><button onclick="updateQuantity(' + item.cartId + ', 1)">+</button></div><div>JMD $' + itemTotal.toLocaleString() + '</div><button class="delete-btn" onclick="removeFromCart(' + item.cartId + ')">✕</button>';
        cartItems.appendChild(cartItemDiv);
    }
    
    var discount = subtotal * 0.10;
    var afterDiscount = subtotal - discount;
    var tax = afterDiscount * 0.15;
    var total = afterDiscount + tax;
    
    cartSummary.innerHTML = '<div class="summary-row"><span>Subtotal:</span><span>JMD $' + subtotal.toLocaleString() + '</span></div><div class="summary-row"><span>Discount (10%):</span><span>-JMD $' + discount.toLocaleString() + '</span></div><div class="summary-row"><span>Tax (15% GCT):</span><span>JMD $' + tax.toLocaleString() + '</span></div><div class="summary-row total"><span>Total:</span><span>JMD $' + total.toLocaleString() + '</span></div>';
}

// Update quantity
function updateQuantity(cartId, change) {
    var item = null;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].cartId === cartId) {
            item = cart[i];
            break;
        }
    }
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(cartId);
        } else {
            updateCart();
        }
    }
}

// Remove from cart
function removeFromCart(cartId) {
    var newCart = [];
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].cartId !== cartId) {
            newCart.push(cart[i]);
        }
    }
    cart = newCart;
    updateCart();
}

// Clear cart
function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        updateCart();
    }
}

// Update checkout
function updateCheckout() {
    var checkoutSummary = document.getElementById('checkoutSummary');
    var amountInput = document.getElementById('checkoutAmount');
    
    if (!checkoutSummary || !amountInput) return;
    
    if (cart.length === 0) {
        checkoutSummary.innerHTML = '<p>Your cart is empty</p>';
        amountInput.value = 0;
        return;
    }
    
    var subtotal = 0;
    var itemsHtml = '';
    
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        var itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        itemsHtml += '<div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--light-gray);"><span>' + item.name + ' (' + item.size + ') x' + item.quantity + '</span><span>JMD $' + itemTotal.toLocaleString() + '</span></div>';
    }
    
    var discount = subtotal * 0.10;
    var afterDiscount = subtotal - discount;
    var tax = afterDiscount * 0.15;
    var total = afterDiscount + tax;
    
    checkoutSummary.innerHTML = itemsHtml + '<div style="margin-top: 1rem;"><div class="summary-row"><span>Subtotal:</span><span>JMD $' + subtotal.toLocaleString() + '</span></div><div class="summary-row"><span>Discount:</span><span>-JMD $' + discount.toLocaleString() + '</span></div><div class="summary-row"><span>Tax:</span><span>JMD $' + tax.toLocaleString() + '</span></div><div class="summary-row total"><span>Total:</span><span>JMD $' + total.toLocaleString() + '</span></div></div>';
    
    amountInput.value = total.toFixed(2);
}

// Setup forms
function setupForms() {
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.onsubmit = function(e) {
            e.preventDefault();
            alert('Incorrect username or password');
        };
    }
    
    var registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.onsubmit = function(e) {
            e.preventDefault();
            var password = document.getElementById('newpassword').value;
            var confirmPassword = document.getElementById('confirmpassword').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            alert('Registration successful! You can now login.');
            showPage('home');
        };
    }
    
    var checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.onsubmit = function(e) {
            e.preventDefault();
            
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            generateInvoice();
            showPage('invoice');
        };
    }
}

// Generate invoice
function generateInvoice() {
    var invoiceNumber = 'INV-' + Date.now().toString().slice(-6);
    var invoiceDate = new Date().toLocaleDateString();
    
    document.getElementById('invoiceNumber').textContent = invoiceNumber;
    document.getElementById('invoiceDate').textContent = invoiceDate;
    
    var name = document.getElementById('checkoutName').value;
    var email = document.getElementById('checkoutEmail').value;
    var address = document.getElementById('checkoutAddress').value;
    var city = document.getElementById('checkoutCity').value;
    var parish = document.getElementById('checkoutParish').value;
    
    document.getElementById('customerInfo').innerHTML = '<p><strong>Name:</strong> ' + name + '</p><p><strong>Email:</strong> ' + email + '</p><p><strong>Address:</strong> ' + address + '</p><p><strong>City:</strong> ' + city + '</p><p><strong>Parish:</strong> ' + parish + '</p>';
    
    var invoiceItems = document.getElementById('invoiceItems');
    invoiceItems.innerHTML = '';
    var subtotal = 0;
    
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        var itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        var row = document.createElement('tr');
        row.innerHTML = '<td>' + item.name + ' (' + item.size + ')</td><td>' + item.quantity + '</td><td>JMD $' + item.price.toLocaleString() + '</td><td>JMD $' + itemTotal.toLocaleString() + '</td>';
        invoiceItems.appendChild(row);
    }
    
    var discount = subtotal * 0.10;
    var afterDiscount = subtotal - discount;
    var tax = afterDiscount * 0.15;
    var total = afterDiscount + tax;
    
    document.getElementById('invoiceSubtotal').textContent = 'JMD $' + subtotal.toLocaleString();
    document.getElementById('invoiceDiscount').textContent = '-JMD $' + discount.toLocaleString();
    document.getElementById('invoiceTax').textContent = 'JMD $' + tax.toLocaleString();
    document.getElementById('invoiceTotal').textContent = 'JMD $' + total.toLocaleString();
    
    cart = [];
    updateCart();
}

// Logout
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        cart = [];
        updateCart();
        showPage('login');
    }
}

// Close modal on outside click
window.onclick = function(event) {
    var modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
};