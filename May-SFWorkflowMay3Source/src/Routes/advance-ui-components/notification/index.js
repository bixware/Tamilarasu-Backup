/**
 * Notification Advance UI Components
 */
import React from 'react';
import Button from '@material-ui/core/Button';
import { NotificationContainer, NotificationManager } from 'react-notifications';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

function Notification(props) {
   const createNotification = (type) => {
      return () => {
         switch (type) {
            case 'info':
               NotificationManager.info('Info message');
               break;
            case 'success':
               NotificationManager.success('Success message', 'Title here');
               break;
            case 'warning':
               NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
               break;
            case 'error':
               NotificationManager.error('Error message', 'Click me!', 5000, () => {
                  alert('callback');
               });
               break;
            default:
               NotificationManager.success('Success message', 'Title here');
               break;
         }
      };
   };

   return (
      <div className="notification-wrapper">
         <PageTitleBar title={<IntlMessages id="sidebar.notification" />} match={props.match} />
         <RctCollapsibleCard
            heading="Notifications"
         >
            <Button variant="contained" className='text-white btn btn-info mr-10 mb-10'
               onClick={createNotification('info')}>Info
         </Button>
            <Button variant="contained" className='text-white btn btn-success mr-10 mb-10'
               onClick={createNotification('success')}>Success
         </Button>
            <Button variant="contained" className='text-white btn btn-warning mr-10 mb-10'
               onClick={createNotification('warning')}>Warning
         </Button>
            <Button variant="contained" className='text-white btn btn-danger mr-10 mb-10'
               onClick={createNotification('error')}>Error
         </Button>
         </RctCollapsibleCard>
         <NotificationContainer />
      </div>
   );
}

export default Notification