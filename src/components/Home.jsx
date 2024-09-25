import React, { useState } from "react";
import { grainsData } from "./GrainsData";
import SearchBox from "./SearchBox"; 
import Modal from "./Modal"; // Import the modal component

// GrainItem Component
const GrainItem = ({ grain, toggleCartItem, isAdded, openModal }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-4">
      <figure>
        <img src={grain.imageUrl} alt={grain.name} className="object-cover h-48 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{grain.name}</h2>
        <p><strong>Ingredients:</strong> {grain.ingredients.join(", ")}</p>
        <div className="mt-2">
          <h3 className="font-semibold">Nutritional Info:</h3>
          <p>Calories: {grain.nutrition.calories}</p>
          <p>Protein: {grain.nutrition.protein}</p>
          <p>Fat: {grain.nutrition.fat}</p>
          <p>Carbs: {grain.nutrition.carbs}</p>
        </div>
        <div className="card-actions justify-between items-center">
          <p className="text-lg font-bold">{grain.price} per kg</p>
          <button
            onClick={() => (isAdded ? toggleCartItem(grain) : openModal(grain))}
            className={`btn ${isAdded ? "btn-error" : "btn-primary"}`}
          >
            {isAdded ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

// Home Component (GrainsList)
const Home = ({ cartItems, toggleCartItem, searchTerm, onSearch, onClear }) => {
  const [selectedGrain, setSelectedGrain] = useState(null); // For tracking selected grain
  const [quantity, setQuantity] = useState(1); // For storing the selected quantity

  const filteredGrains = grainsData.filter(grain => {
    if (!searchTerm) return true; 
    return grain.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Open the modal to select the quantity
  const openModal = (grain) => {
    setSelectedGrain(grain);
  };

  // Handle closing the modal and adding item to cart
  const handleAddToCart = () => {
    if (selectedGrain) {
      const itemWithQuantity = {
        ...selectedGrain,
        quantity,
        totalPrice: parseFloat(selectedGrain.price.replace('$', '')) * quantity
      };
      toggleCartItem(itemWithQuantity); // Add the item with quantity to cart
      setSelectedGrain(null); // Close the modal
      setQuantity(1); // Reset quantity
    }
  };

  return (
    <div>
      <div className="flex justify-end p-4">
        <SearchBox onSearch={onSearch} onClear={onClear} />
      </div>

      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Benefits of Grains</h2>
        <p className="mb-4">
          Grains are an essential part of a healthy diet. They provide 
          vital nutrients, including fiber, vitamins, and minerals.
        </p>
        <ul className="list-disc list-inside">
          <li>High in fiber, promoting digestive health.</li>
          <li>Rich in essential nutrients such as iron and magnesium.</li>
          <li>Can help with weight management.</li>
          <li>May reduce the risk of heart disease.</li>
        </ul>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredGrains.map((grain) => (
          <GrainItem
            key={grain.id}
            grain={grain}
            toggleCartItem={toggleCartItem}
            isAdded={cartItems.some((item) => item.id === grain.id)}
            openModal={openModal}
          />
        ))}
      </div>

      {/* Modal for selecting quantity */}
      {selectedGrain && (
        <Modal 
          grain={selectedGrain}
          quantity={quantity}
          setQuantity={setQuantity}
          onAddToCart={handleAddToCart}
          onClose={() => setSelectedGrain(null)}
        />
      )}
    </div>
  );
};

export default Home;
