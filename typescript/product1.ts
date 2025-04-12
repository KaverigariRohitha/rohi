const unitPriceSpan = document.getElementById('unitPrice') as HTMLSpanElement;
const quantityInput = document.getElementById('quantity') as HTMLInputElement;
const totalPriceSpan = document.getElementById('totalPrice') as HTMLSpanElement;

const unitPrice = parseFloat(unitPriceSpan.textContent?.replace(/,/g, '') || '0');

function updateTotalPrice(): void {
  const quantity = parseInt(quantityInput.value) || 1;
  const total = unitPrice * quantity;
  totalPriceSpan.textContent = total.toLocaleString(); // adds commas, e.g., 10,000
}

quantityInput.addEventListener('input', updateTotalPrice);

// Initial total on page load
updateTotalPrice();