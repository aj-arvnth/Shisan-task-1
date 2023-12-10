import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "../../Styles/Itam.css";


const ITAM = () => {
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
      <div className="fam-header">
      <p>
CoRMS is an easy to use product that helps control and manage Computer resources covering Hardware Configuration, Software License Management, Purchase, Allocation, Movement, besides AMC, PMC, Service Management and Disposal. It gives the CIO just the kind of monitoring that is required to maximize the benefits from his organisation’s Computing resources. It can work both agent-less and with an agent, and can cover group companies too.
      </p>
      <br></br>
      <span >Who will benefit</span>
      <p >
        Mid to large sized companies across verticals will find
        CoRMS immensely beneficial. Made in India, specially
        addressing India pain points in Asset Management, CoRMS
        licenses come at one-time pricing with quarterly updates
        on AMC.
        </p>
      </div>
    <div className="fam-main">
    <div class="swiper">
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
  
        <div class="swiper-wrapper">
       
          <div class="swiper-slide">
            <div class="testimonial__card">
              <br/>
              <h2 class="section__header">Auto IT Discovery</h2>
             
              <ul>
                <li class="text">Detects Hardware &amp; Software on the WAN/LAN</li>
                <li class="text">Agent-less on the domain</li>
                <li class="text">OU-wise / range of IP’s discovery</li>
                <li class="text">Agent based discovery for systems in remote locations</li>
                <li class="text">Detects Change in Configuration</li>
                <li class="text">Shows systems not discovered in each run with alerts</li>
                <li class="text">Creation and discovery of working groups within domains</li>
                <li class="text">Shows Component-wise Configuration</li>
                <li class="text">Software Licenses Management with tracking against license key deployed</li>
                <li class="text">Detects Patches, Fixes and Antivirus</li>
                </ul>
             
            </div>
          </div>
          <div class="swiper-slide">
            <div class="testimonial__card">
              <br/>

              <h2 class="section__header">IT Asset Management</h2>
           
              
              <ul>
                <li class="text">Asset Life Cycle Management</li>
                <li class="text">Asset Acquisition Category Management</li>
                <li class="text">Depreciation Calculation</li>
                <li class="text">Grouping of Assets</li>
                <li class="text">Allocation, De-allocation of Assetsv</li>
                <li class="text">Movement of assets</li>
                <li class="text">Age of assets</li>
                <li class="text">Tracking Warranty and AMC with Alerts</li>
                <li class="text">Asset Insurance</li>
                <li class="text">Asset Cannibalisation &amp; Disposal</li>
                <li class="text">Fixed Asset Register</li>
                <li class="text">Inbuilt Asset Audit</li>
                </ul>
             
            </div>
          </div>
          <div class="swiper-slide">
            <div class="testimonial__card">
              <br/>

              <h2 class="section__header">Request Management</h2>
            
              
              <ul>
                <li class="text">User request for new asset – HW/SW, upgradation,<br/> Movement,Service request and Consumables</li>
                <li class="text">Rule based approval</li>
                </ul>
                <br></br>
                <h2 class="section__header">Barcode Interface</h2>
    
                
                <ul>
                  <li class="text">Generating Barcode labels</li>
                  <li class="text">Input of Barcode data</li>
                  <li class="text">Viewing Asset details using the barcode</li>
                  </ul>
              
            </div>
          </div>
          <div class="swiper-slide">
            <div class="testimonial__card">
              <br/>

              <h2 class="section__header">Sevice Desk</h2>
             
              
              <ul>
                <li class="text">Service Requests</li>
                <li class="text">Ticket Generation</li>
                <li class="text">Approval / Call Allocation &amp; Management</li>
                <li class="text">Direct call forwarding for assets under warranty/AMC</li>
                <li class="text">Automatic Service Level escalation</li>
                <li class="text">Service Call Status Monitoring</li>
                <li class="text">Call closure</li>
                <li class="text">Knowledge repository</li>
                <li class="text">Call history</li>
                <li class="text">SLA monitoring</li>
                <li class="text">Email escalation</li>
                </ul>
              
            </div>
           
          </div>
        </div>
       
        <div class="swiper-pagination"></div>
      </div>
      <div className="fam-main-right">
        <img src="../ITAM.jpg" alt=""/>
      </div>
    </div>
  

    </>
  
);
  };

export default ITAM;
