import React from "react";

const NameMenu = () => {
  return (
    <div className="flex justify-between items-start my-2">
      <div className="flex gap-2">
        <div className="font-bold text-lg">A</div>
        <div>
          <h3 className="font-bold text-lg">MIXED BERRIES</h3>
          <p className="text-sm text-gray-500">ミックスベリー</p>
        </div>
      </div>
      <div className="font-bold text-lg">¥123</div>
    </div>
  );
};
export default NameMenu;
