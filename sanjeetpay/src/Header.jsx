import React from 'react';

const Header = () => {
    return (
        <>
          <header>
              <section className="container main-hero-container">
                 <div className="row">
                     <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center align-items-start flex-column order-lg-first order-last">
                         <h1 className="display-2">
                             Online Payment Made <br /> Easy For You.
                         </h1>
                         <p className="main-hero-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa iusto earum odio dignissimos assumenda saepe voluptates vitae provident quia maiores delectus sapiente, ipsam amet in sit velit error sint modi dolores libero excepturi quaerat!</p>
                         <h3>Get Early Access for you</h3>
                         <div className="input-group mt-3">
                             <input type="text" className="rounded-pill w-75 p-2 w-lg-75 me-3 form-control-text" placeholder="Enter Your Email" />
                             <div className="input-group-button">
                                 Get It Now
                             </div>
                         </div>
                     </div>
                      {/* <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first">
                         <img src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?crop=entropy&cs=srgb&dl=pexels-designecologist-1779487.jpg&fit=crop&fm=jpg&h=426&w=640" alt="hero-img" className="img-fluid" />
                     </div>  */}
                 </div>
              </section>
          </header>  
        </>
    )
}

export default Header;
