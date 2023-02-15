import React, {useState} from 'react'

export const Promotions = () => {
    const [gsa, setGsa] = useState(false);
  return (
    <>
  <div className="bg-white flex flex-col p-10 space-y-5">
        <h1 className="text-2xl sm:text-4xl font-bold">More Reasons to shop</h1>
        <div className="grid grid-cols-2 gap-4">
            <img className="object-fit w-full h-full" src="https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png" />
            <img className="object-fit w-full h-full"  src="https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png" />
           <img className="object-fit w-full h-full" src="https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png" />
           <img  className="object-fit w-full h-full" src="https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png" />
        </div>
    </div>

    <div className="bg-white flex flex-col p-10 space-y-5">
        <h1 className="text-2xl sm:text-4xl font-bold">More Reasons to shop</h1>
        <div className="grid grid-cols-2 gap-4">
            <img className="object-fit w-full h-full" src="https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png" />
            <img className="object-fit w-full h-full"  src="https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png" />
           <img className="object-fit w-full h-full" src="https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png" />
           <img  className="object-fit w-full h-full" src="https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png" />
        </div>
    </div>

    <div className="bg-white flex flex-col p-10 space-y-5">
    <h1 className="text-2xl sm:text-4xl font-bold">More Reasons to shop</h1>
        <div className={` ${gsa === true ? 'grid grid-cols-2 gap-4' : 'grid grid-cols-1 gap-4'}`}>
          <img  className="object-fit w-full h-full" src="https://f.nooncdn.com/mpcms/EN0001/assets/75222376-70d9-44aa-8f66-e5af9722f0fa.png" />
           <img className="object-fit w-full h-full" src="https://f.nooncdn.com/mpcms/EN0001/assets/d0f2ffc1-4c5f-4253-ab12-b6bbb80662f2.png" />
        </div>
    </div>




    </>
  )
};

