export default function Typography() {
  return (
    <div>
      {/* 1. 타이포그래피 */}
      <div className="flex flex-col gap-2">
        <div className="text-xs font-thin text-red-500">text-xs</div>
        <div className="text-sm font-light text-[rgb(100,30,200)]">text-sm</div>
        <div className="text-base font-medium text-[#0000ff]">text-base</div>
        <div className="text-lg font-bold">text-lg</div>
        <div className="text-xl font-extrabold">text-xl</div>
        <div className="text-2xl font-black">text-2xl</div>
        <div className="text-[13px] font-[150]">text-13px</div>
      </div>

      {/* 2. 백그라운드 컬러 */}
      <div className="flex flex-col">
        <div className="bg-amber-500">bg-amber-500</div>
        <div className="bg-blue-500">bg-blue-500</div>
        <div className="bg-green-500">bg-green-500</div>
        <div className="bg-red-500">bg-red-500</div>
        <div className="bg-yellow-500">bg-yellow-500</div>
        <div className="bg-purple-500">bg-purple-500</div>
        <div className="bg-pink-500">bg-pink-500</div>
        <div className="bg-gray-500">bg-gray-500</div>
      </div>

      {/* 3. 사이즈 */}
      <div className="flex flex-col">
        <div className="h-10 w-10 bg-amber-500">w-10 h-10</div>
        <div className="h-[100px] w-[100px] bg-blue-500">
          h-[100px] w-[100px]
        </div>
        <div className="h-20 w-full bg-green-500">w-full h-20</div>
      </div>

      {/* 4. 패딩, 마진 */}
      <div className="m-5 mx-5 my-5 h-50 w-50 bg-red-400 px-5 py-5">
        <div className="h-full w-full bg-amber-500"></div>
      </div>
    </div>
  );
}
