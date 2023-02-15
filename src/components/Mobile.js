import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { Search, ExpandMore } from '@mui/icons-material';


const theme = createTheme();

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
});

export function MobileNavbar() {

  const menuName = [
    {
      id: 1,
      name: "Home",
      image: "https://z.nooncdn.com/s/app/com/noon/images/bottomNav/home-inactive.svg"
    },
    {
      id: 2,
      name: "Categories",
      image: "https://z.nooncdn.com/s/app/com/noon/images/bottomNav/categories-v2-inactive.svg"
    },

    {
      id: 3,
      name: "Clearance Deals",
      image: "https://z.nooncdn.com/s/app/com/noon/images/bottomNav/dynamic/deals-box/deals-box@3x.png"
    },

    {
      id: 4,
      name: "My Account",
      image: "https://z.nooncdn.com/s/app/com/noon/images/bottomNav/account-inactive.svg"
    },

    {
      id: 5,
      name: "Cart",
      image: "https://z.nooncdn.com/s/app/com/noon/images/bottomNav/cart-inactive.svg"
    },



  ];



  const classes = useStyles();

  return (
    <>
     <div className=" top-0 bottom-auto bg-white mx-2 mt-3 ">

      <div className="flex flex-row  items-center space-x-2 pb-3">
        <img className="h-5" src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" />
        <div className="flex items-center  rounded-md flex-grow cursor-pointer relative ">
          <input className="p-1 flex-grow flex-shrink bg-white rounded-lg text-lg border-solid border-2 border-gray-400" placeholder="What are you looking for ?"  />
          <Search className="absolute right-2 " size={20} />
        </div>
      </div>

      <button className="flex flex-row items-center space-x-1 pb-5">
        <div><img src="https://z.nooncdn.com/s/app/com/noon/images/address_latlng_indicator.svg" /></div>
        <div>Deliver to</div>
        <div className="font-bold">Dubai</div>
        <ExpandMore size={10} />

      </button>

      </div>

      <div>
        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/4aa154d6-56c6-4188-9f36-6520211564de.png" />
      </div>

    <div className="py-2 shadow-2xl bg-white fixed bottom-0">
      <div className="flex flex-row justify-content space-x-1 mx-auto">
        {menuName.map(item => (
          <div key={item.id}className="flex flex-col items-center">
            <img className="h-6 w-6 object-contain" src={item.image} />
            <p className="text-sm">{item.name}</p>

          </div>
        ))}




      </div>

      </div>
      </>
  );
}

export default MobileNavbar;
