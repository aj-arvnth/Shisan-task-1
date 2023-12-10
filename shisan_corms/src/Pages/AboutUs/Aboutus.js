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
      <div className="fam-main ">
        <div class="about-card ">
          <br />
          <h2 class="section__header">Consultancy</h2>
          <p class="text">
            We are a team of experienced professionals with functional expertise
            in Enterprise Asset Management and technical skills in state-of
            the-art infotech environments. We trace our lineage to a global IT
            services parent firm that has ably served high street marquee
            customers in over a dozen countries.
            <br />
            <br />
            CoRMS has evolved from our own experience in managing assets spread
            over diverse locations. Our long-standing customers across industry
            verticals and locations have helped us continuously refine and
            evolve CoRMS into an intuitive user friendly product. We are proud
            of their association with us.
            <br />
            <br />
            Have a glimpse of CoRMS in the following pages. <a href="/contact">Contact us</a> for a 'no
            obligation' trial that will help you secure your assets and be
            compliant in very short time. You will be glad you did.
          </p>
        </div>

        <div className="fam-main-right-services">
          <img src="../ITAM.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Services;
