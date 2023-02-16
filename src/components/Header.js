import { AppBar, Toolbar, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
      <div className="flex flex-row justify-between top-0 bottom-auto px-4 bg-[#FEEE00] z-60 space-x-9 h-24 items-center ">
        <img className="h-9 " src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" />

        <button className="flex flex-row space-x-4 items-center ml-6 h-10 hover:opacity-60">
          <img src="https://z.nooncdn.com/s/app/com/common/images/flags/ae.svg" alt="country-ae" className="h-8" />

            <span className="flex flex-col text-2xl color-gray-400">
              <span className="flex inline-flex align-baseline">
              Deliver to
              <div className="w-6 h-6">
                <img className="ml-3 mr-3 w-full h-full" src="https://z.nooncdn.com/s/app/com/noon/icons/dropdownArrow.svg" />
              </div>
              </span>




            <div className="flex flex-row items-center ">
              <span className="font-bold text-xl inline-flex text-ellipsis overflow-hidden	whitespace-nowrap	">Dubai</span>

          </div>

          </span>
        </button>

        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer ">
          <input className=" p-3 flex-grow flex-shrink bg-white rounded-lg text-2xl" placeholder="What are you looking for ?" />
        </div>

        <div className="flex items-center">
          <div className="text-2xl">العربية</div>
          <div className="flex mx-4 border-l border-gray-400 h-6"></div>
        </div>

        <div className="">
          <div className="relative">

             <button className="flex flex-row items-center justify-center">
               <span className="font-bold text-right text-2xl"> Sign In </span>
             <img className="ml-4 w-8" src="https://z.nooncdn.com/s/app/com/noon/icons/user_thin.svg" />

             </button>

          </div>
        </div>

          <button className="flex items-center px-5 border-l border-gray-400 hover:opacity-60 ">
            <span className="flex mr-3 text-2xl font-bold">Cart</span>
            <div className="flex relative">

             <img className="h-8 w-8" src="https://z.nooncdn.com/s/app/com/noon/icons/cart.svg" />
             </div>
          </button>

      </div>

      {/* top Nav 02 (list) */}

      <div className="flex space-x-8 items-center justify-items p-6 h-16 bg-[#FCFBF4] flex-row w-full">

       <div className="flex-grow flex flex-row justify-between items-center">
        <h1 className="text-xl text-blue-600 font-bold">ALL CATEGORIES</h1>
        <KeyboardArrowDownIcon size={50} className="text-blue-400 h-20 w-20 border-r border-gray-400 h-14" />
       </div>

       <div className="flex flex-row space-x-8">
       <h1 className="text-xl  color-blue-400 font-bold">ELECTRONICS</h1>
       <h1 className="text-xl  color-blue-400 font-bold">MEN</h1>
       <h1 className="text-xl  color-blue-400 font-bold">WOMEN</h1>
       <h1 className="text-xl  color-blue-400 font-bold">HOME</h1>
       <h1 className="text-xl  color-blue-400 font-bold">BEAUTY & FRAGRANCE</h1>
       <h1 className="text-xl  color-blue-400 font-bold">ALL CATEGORIES</h1>
       <h1 className="text-xl  color-blue-400 font-bold">ALL CATEGORIES</h1>
       <h1 className="text-xl  color-blue-400 font-bold">ALL CATEGORIES</h1>
       <h1 className="text-xl  color-blue-400 font-bold">ALL CATEGORIES</h1>

       </div>

       <div className="flex flex-end" ><img className="h-8" src="https://z.nooncdn.com/s/app/com/noon/images/en_grocery_logo_gif_v3.gif" /></div>

      </div>

      <div className="flex w-full bg-[#F3E008] p-2">
        <img  className="h-25 w-full" src="https://f.nooncdn.com/mpcms/EN0001/assets/35ed38ac-b1f1-4d24-a7c3-a21aafc803c0.png"/>
      </div>




    </>
  );
}
