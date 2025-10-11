import RecommendationCard from "./Reccommend";
import NameMenu from "./NameMenu";
import React from "react";
import MenuItem from "./MunuItem";
import MenuItemNoImg from "./MunuItemNoImg";

function Menu() {
  const images = [
    {
      imageLink: "https://i.pinimg.com/736x/cf/4b/e3/cf4be3d3a03f0a4841cfe6ad428227b8.jpg",
    },
    {
      imageLink:
        "https://i.pinimg.com/736x/cf/4b/e3/cf4be3d3a03f0a4841cfe6ad428227b8.jpg",
    },
    {
      imageLink:
        "https://i.pinimg.com/736x/cf/4b/e3/cf4be3d3a03f0a4841cfe6ad428227b8.jpg",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      {/* ซ้าย */}
      <div className="w-full lg:w-1/2">
        {/* รูป */}
        <div className="flex gap-1 w-full h-1/3">
          {/* รูปแรก */}
          <div className="w-2/4">
            <img
              className="h-full w-full object-cover"
              src={images[2].imageLink}
              alt=""
            />
          </div>
          {/* รูปที่สองและสาม */}
          <div className="grid grid-rows-2 gap-1 w-2/4">
            <img
              className="h-full object-cover w-full"
              src={images[0].imageLink}
              alt=""
            />
            <img
              className="h-full object-cover w-full"
              src={images[1].imageLink}
              alt=""
            />
          </div>
        </div>

        {/* เนื้อหา */}
        <div className="px-10 py-6 grid gap-4">
          {/* ข้อความ 1 */}
          <div className="flex flex-col lg:flex-row items-center xl:gap-10 md:gap-5">
            <h1 className="text-2xl font-bold whitespace-nowrap tracking-[.15em]">
              MAIN MEAL
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consecteture adipisicing elit. Quisquam
              a quos quod quae quibusdam.
            </p>
          </div>

          {/* Recommend 2 */}
          <div className="flex flex-col lg:flex-row">
            <RecommendationCard />
            <div className="pl-4 lg:my-auto 2xl:w-1/2 w-full mt-4">
              <NameMenu />
            </div>
          </div>

          {/* 4 menu 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="flex items-start space-x-4">
              <img
                src={images[0].imageLink}
                alt=""
                className="w-28 h-32 object-cover"
              />
              <div className="flex flex-col justify-between w-full h-full">
                <div className="flex flex-col justify-start">
                  <h3 className="font-semibold m-0">Berries</h3>
                  <p className="text-sm text-gray-500">ベリーミッ</p>
                </div>
                <div className="font-semibold text-right mt-auto">¥1230</div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img
                src={images[0].imageLink}
                alt=""
                className="w-28 h-32 object-cover"
              />
              <div className="flex flex-col justify-between w-full h-full">
                <div className="flex flex-col justify-start">
                  <h3 className="font-semibold m-0">Berries</h3>
                  <p className="text-sm text-gray-500">ベリーミッ</p>
                </div>
                <div className="font-semibold text-right mt-auto">¥1230</div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img
                src={images[0].imageLink}
                alt=""
                className="w-28 h-32 object-cover"
              />
              <div className="flex flex-col justify-between w-full h-full">
                <div className="flex flex-col justify-start">
                  <h3 className="font-semibold">Berries</h3>
                  <p className="text-sm text-gray-500">ベリーミッ</p>
                </div>
                <div className="font-semibold text-right mt-auto">¥1230</div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <img
                src={images[0].imageLink}
                alt=""
                className="w-28 h-32 object-cover"
              />
              <div className="flex flex-col justify-between w-full h-full">
                <div className="flex flex-col justify-start">
                  <h3 className="font-semibold m-0">Berries</h3>
                  <p className="text-sm text-gray-500">ベリーミッ</p>
                </div>
                <div className="font-semibold text-right mt-auto">¥1230</div>
              </div>
            </div>
          </div>
        </div>

        {/* footer option */}
        <div className="bg-orange-950 px-10 py-6">
          <div className="flex flex-col md:flex-row items-center xl:gap-10 md:gap-5">
            <h1 className="text-2xl font-bold tracking-[.15em] text-white">
              OPTION
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <div className="flex flex-row w-full h-full justify-between">
                <div>
                  <h6 className="text-white font-semibold">Option 1</h6>
                  <p className="text-sm text-gray-500 text-nowrap">
                    Lorem ipsum
                  </p>
                </div>
                <div className="font-semibold text-gray-500 text-right my-auto">
                  ¥1230
                </div>
              </div>
              <div className="flex flex-row w-full h-full justify-between">
                <div>
                  <h5 className="text-white font-semibold">Option 1</h5>
                  <p className="text-sm text-gray-500 text-nowrap">
                    Lorem ipsum
                  </p>
                </div>
                <div className="font-semibold text-right text-gray-500 my-auto">
                  ¥1230
                </div>
              </div>
              <div className="flex flex-row w-full h-full justify-between">
                <div>
                  <h5 className="text-white font-semibold">Option 1</h5>
                  <p className="text-sm text-gray-500 text-nowrap">
                    Lorem ipsum
                  </p>
                </div>
                <div className="font-semibold text-right text-gray-500 my-auto">
                  ¥1230
                </div>
              </div>
              <div className="flex flex-row w-full h-full justify-between">
                <div>
                  <h5 className="text-white font-semibold">Option 1</h5>
                  <p className="text-sm text-gray-500 text-nowrap">
                    Lorem ipsum
                  </p>
                </div>
                <div className="font-semibold text-right text-gray-500 my-auto">
                  ¥1230
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ขวา */}
      <div className="w-full lg:w-1/2 flex p-10">
        <div className="flex lg:flex-row flex-col w-full gap-3">
          <div className="lg:w-full p-3">
            {/* grid */}
            <div className="grid gap-0 h-full">
              <h1 className="text-2xl font-bold tracking-[.15em]">DESSERT</h1>
              <div>
                <NameMenu />
                <div>
                  <img
                    className="h-36 object-cover w-full"
                    src={images[0].imageLink}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <NameMenu />
                <div>
                  <img
                    className="h-36 object-cover w-full"
                    src={images[1].imageLink}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <NameMenu />
                <div>
                  <img
                    className="h-36 object-cover w-full"
                    src={images[2].imageLink}
                    alt=""
                  />
                </div>
              </div>
              <div className="border border-amber-700 p-3 w-full">
                <NameMenu />
                <p className="text-sm">
                  Lorem ipsum dolor sit amet afa a qwxa consectetur adipisicing
                  elit.
                </p>
                <p className="text-sm font-bold">
                  Lorem ipsum dolor sit amet afa a qwxa consectetur adipisicing
                  elit.
                </p>
                <NameMenu />
                <p className="text-sm">
                  Lorem ipsum dolor sit amet afa a qwxa consectetur adipisicing
                  elit.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-full p-3">
            <div className="border border-amber-700 w-full p-3 h-full">
              <div className="grid gap-4">
                <div>
                  <h1 className="text-2xl font-bold whitespace-nowrap tracking-[.15em]">
                    DRINKS
                    <hr className="border-amber-700" />
                  </h1>
                  <span className="font-bold mr-2">TEA</span>
                  <span>lorem ipsum</span>
                  <MenuItem />
                  <MenuItem />
                  <MenuItem />
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet afa a qwxa consectetur
                    adipisicing elit.
                  </p>
                </div>
                <div className="bg-gray-400 w-full h-full p-2">
                  <h2 className="font-bold text-white">ABOUT TEA</h2>
                  <p className="text-xs text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    doloribus, adipisci nostrum saepe recusandae omnis nisi in,
                    deserunt maxime ex nulla doloremque. maxime ex nulla
                    doloremque.
                  </p>
                </div>
                <div>
                  <h2 className="font-bold">COFFEE</h2>
                  <MenuItemNoImg />
                  <MenuItemNoImg />
                  <MenuItemNoImg />
                  <MenuItemNoImg />
                </div>
                <div>
                  <h2 className="font-bold">OTHERS</h2>
                  <MenuItemNoImg />
                  <MenuItemNoImg />
                  <MenuItemNoImg />
                  <MenuItemNoImg />
                </div>
                <div>
                  <h2 className="font-bold">BEAR</h2>
                  <MenuItemNoImg />
                  <MenuItemNoImg />
                  <MenuItemNoImg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
