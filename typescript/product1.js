var _a;
var unitPriceSpan = document.getElementById('unitPrice');
var quantityInput = document.getElementById('quantity');
var totalPriceSpan = document.getElementById('totalPrice');
var unitPrice = parseFloat(((_a = unitPriceSpan.textContent) === null || _a === void 0 ? void 0 : _a.replace(/,/g, '')) || '0');
function updateTotalPrice() {
    var quantity = parseInt(quantityInput.value) || 1;
    var total = unitPrice * quantity;
    totalPriceSpan.textContent = total.toLocaleString(); // adds commas, e.g., 10,000
}
quantityInput.addEventListener('input', updateTotalPrice);
// Initial total on page load
updateTotalPrice();
