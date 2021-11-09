import React from 'react'

export const MainBox = () => {
    return (
        <div>
            <div className="cat-main-box">
         <div className="container">
            <div className="row panel-row">
               <div className="col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.0s">
                  <div className="panel panel-default">
                     <div className="panel-body">
                        <img src="./images/xpann-icon.jpg" className="icon-small" alt=""></img>
                        <h4>“Chamb” Your Business</h4>
                        <p>Grow easily with chamb. Create free account.
                           We help expanding your business easily.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                  <div className="panel panel-default">
                     <div className="panel-body">
                        <img src="./images/create-icon.jpg" className="icon-small" alt=""></img>
                        <h4>Create and add</h4>
                        <p>Grow easily with chamb. Create free account.
                           We help expanding your business easily.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="col-md-4 col-sm-6 wow fadeIn hidden-sm" data-wow-delay="0.4s">
                  <div className="panel panel-default">
                     <div className="panel-body">
                        <img src="./images/get-icon.jpg" className="icon-small" alt=""></img>
                        <h4>Get inspired</h4>
                        <p>Grow easily with chamb. Create free account.
                           We help expanding your business easily.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </div>
    )
}
export default MainBox
