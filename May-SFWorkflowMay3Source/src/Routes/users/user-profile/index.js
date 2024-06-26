/**
 * User Profile
 */
import React from 'react';
import Button from '@material-ui/core/Button';
import { Helmet } from "react-helmet";
import {
	DiscoverPeoplesWidget,
	ToDoListWidget,
	ProductReportsWidget,
	ActivityWidget
} from "Components/Widgets";
import { Fab } from "@material-ui/core";
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
// intl messages
import IntlMessages from 'Util/IntlMessages';
// rct card box
import { RctCard } from 'Components/RctCard';
// rct collapsible card
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

function UserComponent(props){
   return (
      <div className="user-profile-wrapper">
         <Helmet>
            <title>User Profile</title>
            <meta name="description" content="User Profile" />
         </Helmet>
         <PageTitleBar title={<IntlMessages id="sidebar.userProfile" />} match={props.match} />
         <RctCard customClasses="profile-head">
            <div className="profile-top">
               <img src={`${process.env.PUBLIC_URL}/assets/images/img/profile-banner.jpg`} alt="profile banner" width="1920" height="200" />
            </div>
            <div className="profile-bottom border-bottom">
               <div className="user-image text-center mb-30">
                  <img
                     src={`${ process.env.PUBLIC_URL }/assets/images/avatars/user-11.jpg`}
                     className="img-fluid rounded-circle rct-notify mx-auto"
                     alt="user images"
                     width="110"
                     height="110"
                  />
               </div>
               <div className="user-list-content">
                  <div className="text-center">
                     <h3 className="fw-bold">Gregory A.</h3>
                     <p>Web Designer & Developer</p>
                     <div className="social-list clearfix mb-40">
                        <ul className="list-inline d-inline-block mb-0">
                           <li className="list-inline-item">
                              <Fab variant="circular" size="small" className="btn-facebook text-white">
                                 <i className="zmdi zmdi-facebook"></i>
                              </Fab>
                           </li>
                           <li className="list-inline-item">
                              <Fab variant="circular" size="small" className="btn-twitter text-white">
                                 <i className="zmdi zmdi-twitter"></i>
                              </Fab>
                           </li>
                           <li className="list-inline-item">
                              <Fab variant="circular" size="small" className="btn-google text-white">
                                 <i className="zmdi zmdi-google"></i>
                              </Fab>
                           </li>
                           <li className="list-inline-item">
                              <Fab variant="circular" size="small" className="btn-linkedin text-white">
                                 <i className="zmdi zmdi-linkedin"></i>
                              </Fab>
                           </li>
                           <li className="list-inline-item">
                              <Fab variant="circular" size="small" className="btn-youtube text-white">
                                 <i className="zmdi zmdi-youtube"></i>
                              </Fab>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div className="user-activity text-center">
               <ul className="list-inline d-inline-block">
                  <li className="list-inline-item">
                     <span className="fw-bold">588</span>
                     <span>Articles</span>
                  </li>
                  <li className="list-inline-item">
                     <span className="fw-bold">2400</span>
                     <span>Followers</span>
                  </li>
                  <li className="list-inline-item">
                     <span className="fw-bold">1200</span>
                     <span>Following</span>
                  </li>
               </ul>
            </div>
         </RctCard>
         <div className="profile-body">
            <div className="row">
               <div className="col-sm-12 col-md-5 col-lg-4 w-xs-full">
                  <div className="dash-cards">
                     <a href="!#" onClick={e => e.preventDefault()} className="square-40 bg-warning card-right-action"><i className="ti-id-badge"></i></a>
                     <div className="card">
                        <div className="media">
                           <div className="media-left mr-25">
                              <img src={`${process.env.PUBLIC_URL}/assets/images/img/user-8.jpg`} className="img-fluid rounded-circle" alt="user profile" width="90" height="90" />
                           </div>
                           <div className="media-body pt-10">
                              <span className="mb-5 text-primary fs-14 d-block">Contact Request</span>
                              <h4 className="mb-5">Andre Hicks</h4>
                              <span className="text-muted fs-14 mb-15 d-block">Sr. Develoepr @Oracle</span>
                              <Button variant="contained" className="btn-primary text-white btn-icon mr-10 mb-10">Accept <i className="zmdi zmdi-check-circle"></i></Button>
                              <Button variant="contained" className="btn-warning text-white btn-icon mr-10 mb-10">Reject <i className="zmdi zmdi-delete"></i></Button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <RctCollapsibleCard
                     heading={<IntlMessages id="widgets.productReports" />}
                     collapsible
                     reloadable
                     closeable
                     fullBlock
                  >
                     <ProductReportsWidget />
                  </RctCollapsibleCard>
                  <RctCollapsibleCard
                     heading={<IntlMessages id="widgets.discoverPeople" />}
                     collapsible
                     reloadable
                     closeable
                     fullBlock
                  >
                     <DiscoverPeoplesWidget />
                  </RctCollapsibleCard>
                  <RctCollapsibleCard
                     customClasses="to-do-list"
                     heading={<IntlMessages id="widgets.toDoList" />}
                     collapsible
                     reloadable
                     closeable
                     fullBlock
                  >
                     <ToDoListWidget />
                  </RctCollapsibleCard>
               </div>
               <RctCollapsibleCard
                  colClasses="col-sm-12 col-md-7 col-lg-8 w-xs-full"
                  heading="Activity"
                  headingCustomClasses="border-bottom"
                  collapsible
                  reloadable
                  closeable
                  fullBlock
               >
                  <ActivityWidget />
               </RctCollapsibleCard>
            </div>
         </div>
      </div>
   );
}

export default UserComponent;
