import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "../../Styles/Itam.css";

const Services = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);
  return (
    <>
      
      <div className="fam-main">
        <div class="swiper">
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>

          <div class="swiper-wrapper">
            
            <div class="swiper-slide">
              <div class="testimonial__card">
                <br />

                <h2 class="section__header">Consultancy</h2>
                
                  <p class="text">
			We advise customers on what would work best in their environment to meet their asset tracking goals, be it RFID, Bar-code, QR-code or any other. Coupled with this, we provide advisory services on tracking and managing IT assets, doing a gap analysis, thus ensuring all aspects of tracking and manging assets are covered using CoRMS.
		</p>
                
              </div>
            </div>
            <div class="swiper-slide">
              <div class="testimonial__card">
                <br />
                <h2 class="section__header">Base-lining</h2>

                <p>
                    
			Often due to historical reasons, you may find your asset data records are incomplete or not in a standard form.  In such cases, we carry out a structured base-lining exercise that ensures standardization of asset data both from asset management/usage as well as from financial reporting perspectives.   As a result, we are able to ensure data accuracy as well as significantly reduced asset audit efforts in future.
		
                </p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="testimonial__card">
                <br />
                <h2 class="section__header">Bar-coding / RFID tagging</h2>
<p>
    
			We assist in bar-coding of assets or in establishing a RFID based asset tracking system that links asset information to the CoRMS asset database. Related systems and procedures are defined to ensure technology driven processes integrate smoothly with manual procedures.
		
</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="testimonial__card">
                <br />

                <h2 class="section__header">Asset Audits</h2>

           <p>
            
			We provide Asset Audit services that ensure periodic audits, statutory or otherwise, meet stated goals of ensuring asset information is up-to-date and synchronized with corporate financial data. 
		
           </p>
              </div>
            </div>
            
          </div>

          <div class="swiper-pagination"></div>
        </div>
        <div className="fam-main-right-services">
          <img src="../ITAM.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Services;
