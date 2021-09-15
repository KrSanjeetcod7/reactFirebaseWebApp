import React, { useState } from 'react';
import HowtoUse from './API/HowtoUse';

const Aboutus = () => {
    const [aboutData, setAboutData] = useState(HowtoUse);
    return (
        <>
           <section className="common-section our-services">
               <div className="container mb-5">
                   <div className="row">
                       <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                           <img src="https://images.pexels.com/photos/5054349/pexels-photo-5054349.jpeg?crop=entropy&cs=srgb&dl=pexels-cottonbro-5054349.jpg&fit=crop&fm=jpg&h=1920&w=1280" alt="Aboutus" />
                       </div>
                       {/* 1st section right side data */}
                       <div className="col-12 col-lg-7 our-services-list">
                           <h3 className="mini-title">AVAILABLE @GOOGLE AND IOS APP STORE ONLY</h3>
                           <h1 className="main-heading">How To Use The App</h1>
                           {
                            HowtoUse.map((curElem) =>{
                            const {id, title, info} = curElem;
                            return(
                                <>
                                    <div className="row our-services-info" key={id}>
                                    <div className="col-1 our-services-number">{id}</div>
                                    <div className="col-10 our-services-data">
                                        <h2>{title}</h2>
                                        <p className="main-hero-para">{info}</p>
                                    </div>
                                </div>
                                </>
                                   )
                               })
                           }
                          
                           <br />
                           <button className="btn-style btn-style-border">Learn More</button>
                       </div>
                   </div>
               </div>
           </section>
           {/* 2nd part aboutus section */}
           <section className="common-section our-services our-services-rightside">
               <div className="container mb-5">
                   <div className="row">
                       {/* 2nd section right side data */}
                       <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
                           <h3 className="mini-title"> -- SUPPORT IN ANY LANGUAGE </h3>
                           <h1 className="main-heading">World Class Support is <br /> Available 24/7 </h1>
                           {
                        HowtoUse.map((curElem) =>{
                            const {id, title, info} = curElem;
                            return(
                                <>
                                    <div className="row our-services-info" key={id}>
                                    <div className="col-1 our-services-number">{id}</div>
                                    <div className="col-10 our-services-data">
                                        <h2>{title}</h2>
                                        <p className="main-hero-para">{info}</p>
                                    </div>
                                </div>
                                </>
                                   )
                               })
                           }
                          
                           <br />
                           <button className="btn-style btn-style-border">Learn More</button>
                       </div>
                       {/* images section */}
                       <div className="col-12 col-lg-5 text-center our-service-rightside-img">
                           <img src="https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg?crop=entropy&cs=srgb&dl=pexels-oleg-magni-2764678.jpg&fit=crop&fm=jpg&h=960&w=640" alt="Aboutus" />
                       </div>
                   </div>
               </div>
           </section>
        </>
    )
}

export default Aboutus;
