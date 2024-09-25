// import React, { useState } from "react";

// const QuantityModal = ({ grain, isOpen, onClose, onAddToCart }) => {
//   const [quantity, setQuantity] = useState(1);

//   const handleAddToCart = () => {
//     onAddToCart(grain, quantity);
//     onClose(); // Close the modal after adding to cart
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
//       <div className="modal bg-white p-6 rounded shadow-lg">
//         <h2 className="text-lg font-bold mb-4">{grain.name}</h2>
//         <label className="block mb-2">Quantity (kg):</label>
//         <input
//           type="number"
//           min="1"
//           value={quantity}
//           onChange={(e) => setQuantity(e.target.value)}
//           className="input input-bordered mb-4 w-full"
//         />
//         <div className="flex justify-end">
//           <button onClick={handleAddToCart} className="btn btn-primary mr-2">
//             Add to Cart
//           </button>
//           <button onClick={onClose} className="btn btn-secondary">Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuantityModal;
