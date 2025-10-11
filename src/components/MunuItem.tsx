import React from "react";

const MenuItem = () => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12">
          <img
            src="https://yt3.googleusercontent.com/ytc/AIdro_n8jnIJ8uvPkrJ8eTdTxeUtIqarZZdieZJFYgbqYKLkhw=s900-c-k-c0x00ffffff-no-rj"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-base font-bold">Standard</h3>
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
