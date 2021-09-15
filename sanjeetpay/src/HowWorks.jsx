import React, { useState } from 'react';
import workApi from './API/workApi';

const HowWorks = () => {
    const [workData, setWorkData] = useState(workApi);
    // setWorkData();
    return (
        <>
          <section>
              <div className="work-container container">
                 <h1 className="main-heading text-center">How Does It Works</h1>
                 <div className="row">
                {
                    workData.map((curElem) =>{
                        const {id, logo, title, info } = curElem;
                        return (
                        <>
                        <div className="col-12 col-lg-4 text-centers my-2 work-container_subdiv" key={id}>
                        <i className={`fontawesome-style ${logo}`}></i>
                        <h2 className="sub-heading">{title}</h2>
                        <p className="main-hero-para w-100">{info}</p>
                        </div>
                        </>
                        )
                    })
                }    
                 </div>
              </div>
          </section>
        </>
    )
}

export default HowWorks;
