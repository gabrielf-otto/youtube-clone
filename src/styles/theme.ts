import { createMuiTheme, ThemeOptions } from '@material-ui/core';


const theme: ThemeOptions = createMuiTheme({
   palette: {
      type: 'dark',

      secondary: {
         main: '#3ea6ff'
      },

      background: {
         default: '#181818',
         paper: '#232323'
      }
   }
});


export default theme;
