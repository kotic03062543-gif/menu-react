import React from "react";

const FoodMenu = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">FOOD MENU</h1>
        <h2 className="text-2xl font-semibold text-center mb-4">
          Paucek and Lage Restaurant
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">MAIN COURSE</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Cheeseburger</span>
              <span>$34</span>
            </div>
            <div className="flex justify-between">
              <span>Cheese sandwich</span>
              <span>$22</span>
            </div>
            <div className="flex justify-between">
              <span>Chicken burgers</span>
              <span>$23</span>
            </div>
            <div className="flex justify-between">
              <span>Spicy chicken</span>
              <span>$33</span>
            </div>
            <div className="flex justify-between">
              <span>Hot dog</span>
              <span>$24</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">APPETIZERS</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Fruit Salad</span>
              <span>$13</span>
            </div>
            <div className="flex justify-between">
              <span>Cocktails</span>
              <span>$12</span>
            </div>
            <div className="flex justify-between">
              <span>Nuggets</span>
              <span>$14</span>
            </div>
            <div className="flex justify-between">
              <span>Sandwich</span>
              <span>$13</span>
            </div>
            <div className="flex justify-between">
              <span>French Fries</span>
              <span>$15</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">BEVERAGES</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Milk Shake</span>
              <span>$3</span>
            </div>
            <div className="flex justify-between">
              <span>Iced Tea</span>
              <span>$2</span>
            </div>
            <div className="flex justify-between">
              <span>Orange Juice</span>
              <span>$4</span>
            </div>
            <div className="flex justify-between">
              <span>Lemon Tea</span>
              <span>$3</span>
            </div>
            <div className="flex justify-between">
              <span>Coffee</span>
              <span>$5</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">123-456-7890</p>
          <p className="text-gray-600">123 Anywhere St., Any City</p>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
