import React from "react";

const MenuItem = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <div>
          <h3 className="text-base font-bold">Menu</h3>
          <p className="text-xs text-gray-500">スタンダー</p>
        </div>
      </div>
      <div>
        <p className="text-sm font-bold">¥550</p>
      </div>
    </div>
  );
};

export default MenuItem;
