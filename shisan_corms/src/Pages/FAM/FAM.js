import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "../../Styles/Itam.css";

const FAM = () => {
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
          CoRMS is an intuitive user friendly Enterprise Asset Management
          product that helps track, manage and administer assets through the
          life cycle of the asset from purchase to disposal giving Asset
          Register and India balance sheet Schedule V & VI. Additionally, it
          covers India centric pain points in Asset Management. One can use
          RFID/ Barcode to track Fixed Assets. With an option to cover
          Individual and group companies, CoRMS has a detailed Admin module that
          can help manage user privileges. Information flows seamlessly from
          Procurement to Disposal.
        </p>
        <br></br>
        <span>Who will benefit</span>
        <p>
          Mid to large sized companies across verticals will find CoRMS
          immensely beneficial. Made in India, specially addressing India pain
          points in Asset Management, CoRMS licenses come at one-time pricing
          with quarterly updates on AMC.
        </p>
      </div>
      <div className="fam-main">
        <div class="swiper">
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>

          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="testimonial__card">
                <br />
                <h2 class="section__header">Fixed Asset Management</h2>

                <ul>
                  <li class="text">Base lining of Assets</li>
                  <li class="text">Asset Life Cycle Management</li>
                  <li class="text">Tracking of Assets using Barcode/ RFID/ Asset code</li>
                  <li class="text">Flexible categorizing based on procurement type</li>
                  <li class="text">Depreciation Calculations</li>
                  <li class="text">Allocation, De-allocation of Assets</li>
                  <li class="text">Movement of assets inter and intra location &amp; department</li>
                  <li class="text">Linking Insurance details to Assets</li>
                  <li class="text">Disposal of assets</li>
                  <li class="text">Asset Audits</li>
                </ul>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="testimonial__card">
                <br />
                <h2 class="section__header">Service Tracking</h2>

                <ul>
                    <li class="text">Assets sent for Service</li>
                    <li class="text">Repair Status</li>
                    <li class="text">Cannibalisation for Component recovery</li>
                    <li class="text">Services Allocation and Management</li>
                    <li class="text">Separate email complaint for assets under Warranty/ AMC</li>
                    <li class="text">Call closure</li>
                    <li class="text">Tracking Warranty &amp; AMC with alerts</li>
                    <li class="text">Extension of Warranty</li>
                </ul>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="testimonial__card">
                <br />

                <h2 class="section__header">Fixed Asset Register</h2>

                <ul>
                    <li class="text">Fixed Asset Register using regular/ IT depreciation</li>
                    <li class="text">Assets purchased during the year</li>
                    <li class="text">Assets Disposed during the year</li>
                    <li class="text">Schedule V and VI for Balance sheet</li>
                </ul>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="testimonial__card">
                <br />

                <h2 class="section__header">Asset Locator</h2>

                <ul>
                    <li class="text">Asset Information linked with Building Plan/ Layout sketch/ Map</li>
                    <li class="text">Locator tool for defining premises as Location, Building, Floor, Zone and Space</li>
                    <li class="text">Built-in user-friendly Plan/Layout draw tool</li>
                    <li class="text">Helps locate IT and Non-IT assets at Desk level</li>
                </ul>
                
              </div>
            </div>
            <div class="swiper-slide">
              <div class="testimonial__card">
                <br />

                
                <h2 class="section__header">Barcode Interface</h2>

                <ul>
                  <li class="text">Generating Barcode labels</li>
                  <li class="text">Input of Barcode data</li>
                  <li class="text">Viewing Asset details using the barcode</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="swiper-pagination"></div>
        </div>
        <div className="fam-main-right-others">
          <img src="../CoRMS_AssetLifeCycle.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default FAM;
