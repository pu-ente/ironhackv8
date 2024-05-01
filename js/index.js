// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  const price = priceElement.innerText;
  const quantity = quantityElement.value;

  const subtotalElement = product.querySelector('.subtotal span');
  const subtotal = price * quantity;

  subtotalElement.innerText = subtotal;

  return subtotal;
}

function calculateAll() {

  // ITERATION 2

  const multipleProducts = document.querySelectorAll('.product');
  let total = 0;
  for (let product of multipleProducts) {
    total += updateSubtotal(product);
  }

  // ITERATION 3

  const totalPriceElement = document.querySelector('#total-value span');
  totalPriceElement.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const productElement = target.parentElement.parentElement;
  const tableBodyElement = productElement.parentElement;
  tableBodyElement.removeChild(productElement);
}

// ITERATION 5

function createProduct() {

  const tableBodyElement = document.querySelector('#cart tbody');
  const createProductNameElement = document.querySelector(
    '.create-product input[type="text"]'
  );
  const createProductPriceElement = document.querySelector(
    '.create-product input[type="number"]'
  );
  const name = createProductNameElement.value;
  const price = createProductPriceElement.valueAsNumber;
  const productElement = document.createElement('tr');
  productElement.classList.add('product');
  productElement.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${price.toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
  const productRemoveButtonElement = productElement.querySelector('button');
  productRemoveButtonElement.addEventListener('click', removeProduct);
  tableBodyElement.appendChild(productElement);
  createProductNameElement.value = '';
  createProductPriceElement.valueAsNumber = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeButtonElements = document.querySelectorAll('.btn-remove');

  for (const removeButtonElement of removeButtonElements)
    removeButtonElement.addEventListener('click', removeProduct);

  const createProductElement = document.getElementById('create');
  if (createProductElement)
    createProductElement.addEventListener('click', createProduct);
});