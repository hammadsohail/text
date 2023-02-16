import { AppBar, Toolbar, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const useStyles = makeStyles({
  appBar: {
    top: 0,
    bottom: 'auto',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '64px',
  },
  link: {
    color: 'white',
    margin: theme.spacing(1, 1.5),
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
});

export function DesktopNavbar() {
  const classes = useStyles();

  return (
    <>
    {/* Top Nav 01 */}
      <div className="flex flex-row justify-between top-0 bottom-auto px-4 py-6	 bg-[#FEEE00] z-60 space-x-4">
        <img className="h-9 " src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" />

        <button className="flex flex-row space-x-4">
          <img src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg" alt="country-ae" className="h-8" />
          <div className="-mt-4 flex-col space-y-2">
            <span className="flex flex-row text-2xl color-gray-400">
              Deliver to
              <div className="ml-6">
                <img className="h-8" src="https://z.nooncdn.com/s/app/com/noon/icons/dropdownArrow.svg" />
              </div>
            </span>
            <div className="flex justify-start">
              <span className="font-bold text-xl">Dubai</span>
            </div>
          </div>
        </button>

        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer ">
          <input className=" p-3 flex-grow flex-shrink bg-white rounded-lg text-2xl" placeholder="What are you looking for ?" />
        </div>

        <div className="flex flex-row space-x-1 items-center">
          <div className="text-2xl border-r border-gray-400 pr-4">العربية</div>
          <button className="flex flex-row text-2xl font-bold border-r border-gray-400 pr-4">
            Sign In <img className="ml-4 h-8" src="https://z.nooncdn.com/s/app/com/noon/icons/user_thin.svg" />
          </button>
          <button className="flex flex-row text-2xl font-bold pr-4 ">
            Cart <img className="ml-4 h-8" src="https://z.nooncdn.com/s/app/com/noon/icons/cart.svg" />
          </button>
        </div>
      </div>

      {/* top Nav 02 (list) */}

      <div className="flex space-x-8 items-center justify-between px-4 h-16 bg-white flex-row w-full">

       <div>
        <h1 className="text-md text-blue-600 font-bold">ALL CATEGORIES</h1>
       </div>

       <div className="flex flex-row space-x-5">
       <h1 className="text-md color-blue-400 font-bold">ELECTRONICS</h1>
       <h1 className="text-md color-blue-400 font-bold">MEN</h1>
       <h1 className="text-md color-blue-400 font-bold">WOMEN</h1>
       <h1 className="text-md color-blue-400 font-bold">HOME</h1>
       <h1 className="text-md color-blue-400 font-bold">BEAUTY & FRAGRANCE</h1>
       <h1 className="text-md color-blue-400 font-bold">ALL CATEGORIES</h1>
       <h1 className="text-md color-blue-400 font-bold">ALL CATEGORIES</h1>
       <h1 className="text-md color-blue-400 font-bold">ALL CATEGORIES</h1>
       <h1 className="text-md color-blue-400 font-bold">ALL CATEGORIES</h1>

       </div>

       <div className="flex flex-end" ><img className="h-8" src="https://z.nooncdn.com/s/app/com/noon/images/en_grocery_logo_gif_v3.gif" /></div>

      </div>

      <div className="flex w-full bg-[#F3E008] p-2">
        <img  className="h-25 w-full" src="https://f.nooncdn.com/mpcms/EN0001/assets/35ed38ac-b1f1-4d24-a7c3-a21aafc803c0.png"/>
      </div>




    </>
  );
}
