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
            <p className="text-lg font-bold">{grain.price}</p>
            <button onClick={() => toggleCartItem(grain)} className="btn btn-error">
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    );
  };
  