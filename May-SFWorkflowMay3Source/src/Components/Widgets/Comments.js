/**
 * Comments Component
 */
import React, { useState, Fragment, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// Api
import api from 'Api';
// intl messages
import IntlMessages from 'Util/IntlMessages';
// card component
import { RctCardFooter } from 'Components/RctCard';
import { Fab } from '@material-ui/core';

function Comments() {
   const [comments,setComments] = useState(null);

   useEffect(() => {
      getComments();
   },[])

   // get comments
   const getComments = () => {
      api.get('comments.js')
         .then((response) => {
            setComments(response.data);
         })
         .catch(error => {
            // error hanlding
         })
   }

   return (
      <Fragment>
         <Scrollbars className="rct-scroll" autoHeight autoHeightMin={100} autoHeightMax={424} autoHide>
            <List className="list-group aqua-ripple p-0">
               {comments && comments.map((comment) => (
                  <ListItem className="d-flex px-20 py-3 align-items-start" key={comment.id} button>
                     <div className="avatar-wrap mr-15">
                        <img src={comment.userAvatar} alt="project logo" className="rounded-circle" width="40" height="40" />
                     </div>
                     <div className="comment-wrap">
                        <h5 className="mb-0">{comment.userName}</h5>
                        <span className="font-xs">commented on
                        <span className="text-primary"> {comment.commentTitle}</span>
                        </span>
                        <p className="mb-0 font-xs">{comment.comment}</p>
                     </div>
                     <div className="comment-action w-20 text-right">
                        <span className="font-xs text-muted font-weight-light d-block comment-date">{comment.date}</span>
                        <div className="hover-action d-flex align-items-center">
                           <Fab variant="circular" size="small" color="primary" className="btn-sm mx-1 bg-primary">
                              <i className="zmdi zmdi-check"></i>
                           </Fab>
                           <Fab variant="circular" size="small" className="bg-danger text-white btn-sm mx-1">
                              <i className="zmdi zmdi-delete"></i>
                           </Fab>
                        </div>
                     </div>
                  </ListItem>
               ))}
            </List>
         </Scrollbars>
         <RctCardFooter customClasses="d-flex justify-content-between align-items-center rounded-bottom">
            <Button variant="contained" color="primary" className="px-3 btn-xs bg-primary">
               <IntlMessages id="button.viewAll" />
            </Button>
         </RctCardFooter >
      </Fragment>
   );
}

export default Comments;