// import React, { useState } from "react";

// const GrainItem = ({ grain, toggleCartItem, isAdded }) => {
//   const [quantity, setQuantity] = useState(0);
//   const [isModalOpen, setModalOpen] = useState(false);

//   const handleAddToCart = () => {
//     if (quantity > 0) {
//       toggleCartItem({ ...grain, quantity }); // Pass the quantity along with grain data
//       setModalOpen(false); // Close modal
//     }
//   };

//   const handleRemoveFromCart = () => {
//     toggleCartItem(grain); // Just pass the grain item to remove it from the cart
//   };

//   return (
//     <div className="card w-96 bg-base-100 shadow-xl m-4">
//       <figure>
//         <img src={grain.imageUrl} alt={grain.name} className="object-cover h-48 w-full" />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{grain.name}</h2>
//         <p><strong>Ingredients:</strong> {grain.ingredients.join(", ")}</p>
//         <div className="mt-2">
//           <h3 className="font-semibold">Nutritional Info:</h3>
//           <p>Calories: {grain.nutrition.calories}</p>
//           <p>Protein: {grain.nutrition.protein}</p>
//           <p>Fat: {grain.nutrition.fat}</p>
//           <p>Carbs: {grain.nutrition.carbs}</p>
//         </div>
//         <div className="card-actions justify-between items-center">
//           <p className="text-lg font-bold">{grain.price}</p> {/* Show only the price */}
//           {isAdded ? (
//             <>
//               <button onClick={handleRemoveFromCart} className="btn btn-error">
//                 Remove from Cart
//               </button>
//             </>
//           ) : (
//             <>
//               <button onClick={() => setModalOpen(true)} className="btn btn-primary">
//                 Add to Cart
//               </button>

//               {/* Modal for quantity input */}
//               {isModalOpen && (
//                 <div className="modal modal-open">
//                   <div className="modal-box">
//                     <h2 className="font-bold text-lg">Enter Quantity (kg)</h2>
//                     <input
//                       type="number"
//                       min="0"
//                       value={quantity}
//                       onChange={(e) => setQuantity(e.target.value)}
//                       className="input input-bordered mt-2"
//                     />
//                     <div className="modal-action">
//                       <button onClick={handleAddToCart} className="btn">Add to Cart</button>
//                       <button onClick={() => setModalOpen(false)} className="btn">Cancel</button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GrainItem;
