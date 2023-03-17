import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                We are a technology company specializing in providing cutting-edge solutions to businesses 
                across various industries. Our team of dedicated professionals is passionate about innovation 
                and excellence, and we are committed to delivering world-class solutions that help our clients
                achieve their business objectives. From custom software development to web development, 
                digital marketing, and IT consulting, we offer a range of services that are tailored to our 
                clients&apos; specific needs. Our expertise in AI, blockchain and emerging technologies, all 
                in all, sets us apart from our competitors.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
