import { createTheme } from "@mui/material/styles";
import { Poppins } from '@next/font/google'


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})
export const theme = createTheme({
 palette: {
    mode: 'dark',
    primary: {
      main:'#fff'
    },
    error: {
      main:'#ba000d'
    }
 },
 typography: {
    fontFamily: poppins.style.fontFamily
  },
});