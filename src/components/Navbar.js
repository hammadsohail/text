import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {MobileNavbar} from './Mobile';
import {DesktopNavbar} from './Header';

export function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
}

