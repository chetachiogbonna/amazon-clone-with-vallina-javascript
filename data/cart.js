export const cart = JSON.parse(localStorage.getItem('cart')) || [];

const saveToStorage = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export const addToCart = (productId, quantity) => {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity,
      deliveryOptionId: '1'
    })
  }

  saveToStorage();
};

export const countCartQuantity = () => {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return cartQuantity;
};