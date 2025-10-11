import React from "react";

const RecommendationCard = () => {
  return (
    <div className="border border-amber-700 p-4 2xl:w-1/2 w-full">
      {/* Header */}
      <div className="flex gap-2 mb-4 ">
        <div className="bg-amber-700 px-5 text-white py-1 rounded text-xs font-bold">
          MENU RECOMMENDATION
        </div>
      </div>
      {/* Items */}
      <div className="space-y-4">
        {/* Item 1 */}
        <div className="flex justify-between items-start">
          <div className="flex gap-2">
            <div className="font-bold text-lg">1</div>
            <div>
              <h3 className="font-bold text-lg">MIXED BERRIES</h3>
              <p className="text-sm text-gray-500">ミックスベリー</p>
            </div>
          </div>
          <div className="font-bold text-lg">¥1230</div>
        </div>
        {/* Item 2 */}
        <div className="flex justify-between items-start">
          <div className="flex gap-2">
            <div className="font-bold text-lg">2</div>
            <div>
              <h3 className="font-bold text-lg">
                AVOCADO BACON
              </h3>
              <p className="text-sm text-gray-500">
                アボカドベーコンと
              </p>
            </div>
          </div>
          <div className="font-bold text-lg">¥1530</div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
