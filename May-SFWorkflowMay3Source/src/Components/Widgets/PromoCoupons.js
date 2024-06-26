/**
 * Promo Coupon Widget
 */
import React from 'react';
import Button from '@material-ui/core/Button';

// intl messages
import IntlMessages from 'Util/IntlMessages'

function PromoCoupons() {
   return (
      <div className="d-flex justify-content-between bg-info rct-block py-25 px-30 promo-coupon">
         <div>
            <div className="mb-20">
               <h3 className="text-white mb-10">UP TO 50% OFF</h3>
               <p className="mb-10 text-white">Last chance to save upto 50% off the orignal price on all gadgets and electronics!</p>
               <Button variant="contained" color="primary"><IntlMessages id="button.saveNow" /></Button>
            </div>
            <p className="mb-10 text-white">*Offer valid through February 15. While supplies last.</p>
         </div>
         <img className="img-fluid d-xs-none" alt="share" width="210" height="210" src={`${process.env.PUBLIC_URL}/assets/images/img/coupon.png`} />
      </div>
   )
}

export default PromoCoupons;