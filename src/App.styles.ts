import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
   appBar: {
      boxShadow: 'none',
      zIndex: theme.zIndex.drawer + 1
   },

   drawer: {
      width: 240,
      flexShrink: 0
   },

   drawerPaper: {
      width: 240,
      border: 'none'
   },

   searchInput: {
      width: 500,
      border: '1px solid #333',
      backgroundColor: '#181818',
      padding: '0 5px',
      borderRight: 0
   },

   searchButtonIcon: {
      backgroundColor: '#313131',
      borderRadius: 0,
      color: '#666',
      height: 34,
   },

   listItemText: {
      fontSize: 14
   },

   listItem: {
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 24
   },

   videoTitle: {
      fontSize: 16,
      fontWeight: 600,
      marginBottom: 3
   },

   videoChannel: {
      fontSize: 12,
      fontWeight: 300
   },

   videoInfo: {
      fontSize: 13,
      fontWeight: 300
   }
}));

