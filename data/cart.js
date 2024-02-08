export const cart = JSON.parse(localStorage.getItem('cart')) || [];

const saveToStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export const addToCart = (productId) => {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId,
      quantity: 1,
      deliveryOptionId: '1'
    })
  }

  saveToStorage();
};