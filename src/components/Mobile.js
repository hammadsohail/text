import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
});

export function MobileNavbar() {
  const classes = useStyles();

  return (
    <>
    <div className="p-10 bg-yellow-500 fixed w-full top-0  z-30">

      </div>

    <div className="p-5 bg-yellow-500 fixed w-full bottom-0  z-30">

      </div>
      </>
  );
}

export default MobileNavbar;
