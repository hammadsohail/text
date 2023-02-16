import React, {useState} from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
export const Promotions = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [gsa, setGsa] = useState(false);
    const promotions = [  {    id: 1,    images: [      {url: "https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png"},      {url: "https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png"},      {url: "https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png"},      {url: "https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png"},    ],
    name: "https://f.nooncdn.com/mpcms/EN0001/assets/66a5450d-bfd2-4ff3-ba71-434aee94d695.png",
  },
  {    id: 2,    images: [      {url: "https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png"},      {url: "https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png"},      {url: "https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png"},      {url: "https://f.nooncdn.com/mpcms/EN0001/assets/0150c5c8-02fd-491b-a591-90ec7bf42643.png"},    ],
    name: "https://f.nooncdn.com/mpcms/EN0001/assets/3d4912ae-c58f-47d5-bf26-85ebf71e14a1.png",
  },
  {    id: 3,    images: [  {url: "https://f.nooncdn.com/mpcms/EN0001/assets/75222376-70d9-44aa-8f66-e5af9722f0fa.png"},      {url: "https://f.nooncdn.com/mpcms/EN0001/assets/d0f2ffc1-4c5f-4253-ab12-b6bbb80662f2.png"},    ],
    name: "https://f.nooncdn.com/mpcms/EN0001/assets/af1cf1f1-8ce8-415d-87b7-061000aa21a7.png",
  }
]
  return (
    <>

    {promotions.map(item => (


      <>
      <div className="bg-white flex flex-col px-6 py-3 space-y-5">
          <img className="object-contain h-auto w-full" alt={item.id} src={item.name}  />

          <div className={` ${item.images.length > 2 ? 'grid grid-cols-2 gap-4' : 'grid grid-cols-1 gap-4'}`}>
          {item.images.map(img => (
           <img className="object-fit w-full h-full" src={img.url} />
           ))}
           </div>
           </div>
        </>

    ))}


    </>
  )
};

