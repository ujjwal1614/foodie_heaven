document.addEventListener("DOMContentLoaded", function () {
    const cartPopup = document.getElementById("cart-popup");
    const cartItemsContainer = document.querySelector(".cart-items-container");
    const totalPriceElement = document.getElementById("total-price");

    // Add "loaded" class to body to trigger slide-in animation
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 100); // Delay to ensure smooth animation

    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalPrice = 0;

    cart.forEach((item) => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        // Create cart item element
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <p><strong>${item.name}</strong></p>
            <p>Price: ₹${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Subtotal: ₹${itemTotal}</p>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    // Update total price
    totalPriceElement.textContent = totalPrice;

    // Handle Checkout Button
    document.querySelector(".checkout-btn").addEventListener("click", function () {
        alert("Thank you for your purchase!");
        localStorage.removeItem("cart"); // Clear cart after checkout
        window.location.reload(); // Refresh page to clear cart UI
    });
});
// Select the elements
const openPanelButton = document.getElementById('open-panel');
const sidePanel = document.getElementById('side-panel');
const closePanelButton = document.getElementById('close-panel');
const panelContent = document.getElementById('panel-content');

// Event to open the panel
openPanelButton.addEventListener('click', () => {
    sidePanel.classList.add('open');

    // Dynamically load content
    fetch('new-page.html') // Replace 'new-page.html' with your URL
        .then(response => response.text())
        .then(data => {
            panelContent.innerHTML = data;
        })
        .catch(error => {
            panelContent.innerHTML = `<p>Error loading content: ${error}</p>`;
        });
});

// Event to close the panel
closePanelButton.addEventListener('click', () => {
    sidePanel.classList.remove('open');
});

