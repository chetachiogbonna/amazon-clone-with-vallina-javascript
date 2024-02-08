export const cart = [];

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

  console.log(cart);
};