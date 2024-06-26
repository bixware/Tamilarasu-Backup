/**
 * Rct Theme Provider
 */
import React, { Fragment } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';

// App locale
import AppLocale from '../lang';

// themes
import primaryTheme from './themes/primaryTheme';
import darkTheme from './themes/darkTheme';
import secondaryTheme from './themes/secondaryTheme';
import warningTheme from './themes/warningTheme';
import dangerTheme from './themes/dangerTheme';
import infoTheme from './themes/infoTheme';
import successTheme from './themes/successTheme';

function RctThemeProvider(props) {
   const settings = useSelector(state => state.settings);
   const { locale, darkMode, rtlLayout, activeTheme } = settings;
   const { children } = props;
   const currentAppLocale = AppLocale[locale.locale];
   // theme changes
   let theme = '';
   switch (activeTheme.id) {
      case 1:
         theme = primaryTheme
         break;
      case 2:
         theme = secondaryTheme
         break;
      case 3:
         theme = warningTheme
         break;
      case 4:
         theme = infoTheme
         break;
      case 5:
         theme = dangerTheme
         break;
      case 6:
         theme = successTheme
         break;
      default:
         break;
   }

   if (darkMode) {
      theme = darkTheme
   }

   if (rtlLayout) {
      theme.direction = 'rtl'
   } else {
      theme.direction = 'ltr'
   }

   return (
      <MuiThemeProvider theme={theme}>
         <IntlProvider
            locale={currentAppLocale.locale}
            //messages={currentAppLocale.messages}
         >
            <Fragment>
               {children}
            </Fragment>
         </IntlProvider>
      </MuiThemeProvider>
   );
}

export default RctThemeProvider;
