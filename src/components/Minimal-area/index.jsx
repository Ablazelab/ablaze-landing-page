/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  About us.
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                </p>
              </Split>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Our Mission
                  </h6>
                  <p>
                  Our mission is to foster a culture of innovation and collaboration and create a
                  supportive ecosystem that enables entrepreneurs to thrive. We believe that by 
                  investing in African entrepreneurship, we can help unlock the continent&apos;s full 
                  potential and create a brighter future for all.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Our Vision
                  </h6>
                  <p>
                  Our vision is to be a catalyst for innovation on the African continent. We aim to empower
                  the community with cutting-edge technology and resources to build sustainable businesses 
                  that will drive economic growth and create positive social impact.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Our values
                  </h6>
                  <p>
                  Our values are at the core of everything we do at Ablaze Labs. We believe in innovation, 
                  excellence, collaboration, integrity, and customer success. We are committed to operating
                  with the highest level of integrity and ethical standards. We measure our success by the 
                  success of our clients. We give special attention to humanity, curiosity, go-for-it-ness, 
                  shooting for the moon & generosity.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
