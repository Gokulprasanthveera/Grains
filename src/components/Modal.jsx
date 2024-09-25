import React from "react";

// Modal Component for quantity selection
const Modal = ({ grain, quantity, setQuantity, onAddToCart, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Select Quantity for {grain.name}</h2>
        <p>Price per kg: {grain.price}</p>
        <div className="my-4">
          <label className="block mb-2">Quantity (in kg):</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="input input-bordered w-full"
            min="1"
          />
        </div>
        <div className="flex justify-between mt-4">
          <button className="btn btn-primary" onClick={onAddToCart}>
            Add to Cart
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
