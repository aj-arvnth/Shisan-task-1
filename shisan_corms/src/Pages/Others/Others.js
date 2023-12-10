import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "../../Styles/Itam.css";


const Others = () => {
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
              <br/>
              <h2 class="section__header">Budgeting & Procurement</h2>
             
              <ul>
                <li class="text">Capex &amp; Opex budget distribution to Cost-centres /Departments/Branches</li>
                <li class="text">Utilisation of budget YTD</li>
                <li class="text">Procurement – Vendor rating &amp; selection</li>
                <li class="text">RFQ/ Direct PO/ Rate Contract/ Work Order</li>
                <li class="text">Finalisation of Vendor, GRN, Gate pass</li>
                <li class="text">Invoice vs Payment mapping</li>
            </ul>
             
            </div>
          </div>
          <div class="swiper-slide">
            <div class="testimonial__card">
              <br/>

              <h2 class="section__header">Spares & Consumablest</h2>
           
              
              <ul>
                <li class="text">Generating PO’s or entering PO details</li>
                <li class="text">Purchase register</li>
                <li class="text">Indents</li>
                <li class="text">Tracking consumable levels with alerts for reorder level</li>
                <li class="text">Consumable request escalation and approval</li>
                <li class="text">Issue register</li>
                <li class="text">Refill Management</li>
                <li class="text">Disposal</li>
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
      <div className="fam-main-right-others">
        <img src="../CoRMS_AssetLifeCycle.png" alt=""/>
      </div>
    </div>
  

    </>
  
);
  };

export default Others;
