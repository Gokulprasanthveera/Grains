
import React from "react";

// CartItem Component to display individual items in the cart
const CartItem = ({ grain, toggleCartItem }) => {
  return (
    <div className="card w-full lg:w-3/4 bg-base-100 shadow-xl m-4 flex flex-row h-[50vh]">
      <figure className="w-1/3 h-full">
        <img src={grain.imageUrl} alt={grain.name} className="object-cover h-full w-full" />
      </figure>
      <div className="card-body w-2/3 flex flex-col justify-between">
        <h2 className="card-title">{grain.name}</h2>
        <p><strong>Ingredients:</strong> {grain.ingredients.join(", ")}</p>
        <div className="mt-2">
          <h3 className="font-semibold">Nutritional Info:</h3>
          <p>Calories: {grain.nutrition.calories}</p>
          <p>Protein: {grain.nutrition.protein}</p>
          <p>Fat: {grain.nutrition.fat}</p>
          <p>Carbs: {grain.nutrition.carbs}</p>
        </div>
        <div className="card-actions justify-between items-center mt-4">
          <p className="text-lg font-bold">
            {grain.quantity} kg @ {grain.price} per kg
          </p>
          <p className="text-lg font-semibold">
            Total: ${(parseFloat(grain.price.replace('$', '')) * grain.quantity).toFixed(2)}
          </p>
          <button
            onClick={() => toggleCartItem(grain)}
            className="btn btn-error"
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Cart Component
const Cart = ({ cartItems, toggleCartItem, clearCart }) => {
  // Calculate total price of all items in the cart
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('$', '')); // Extract the price number
    return total + price * item.quantity; // Multiply by quantity
  }, 0);

  // Calculate total quantity of all items in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cartItems.length > 0 ? (
        <>
          <div className="flex flex-wrap justify-center">
            {cartItems.map((grain) => (
              <CartItem key={grain.id} grain={grain} toggleCartItem={toggleCartItem} />
            ))}
          </div>
          <div className="mt-8 w-full flex flex-col items-center">
            {/* Total Quantity and Total Price */}
            <p className="text-2xl font-semibold mb-4 bg-gradient-to-r from-green-200 to-red-100 text-transparent bg-clip-text">
              Total Quantity: {totalQuantity} kg
            </p>
            <p className="text-2xl font-semibold mb-4 bg-gradient-to-r from-green-200 to-red-100 text-transparent bg-clip-text">
              Total Price: ${totalPrice.toFixed(2)}
            </p>
            <button className="btn btn-primary mb-4">Buy Items</button>

            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="btn btn-error"
            >
              Clear Cart
            </button>
          </div>
        </>
      ) : (
        <p className="text-xl">Your cart is empty!</p>
      )}
    </div>
  );
};

export default Cart;
