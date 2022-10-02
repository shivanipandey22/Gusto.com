import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div id="landing_page">
      <div id="top_box1">
        <div id="left_top1">
          <h1>One place for payroll,benefits, and so much more.</h1>
          <p>
            People are at the heart of every successful business. Gusto puts the
            tools you need to hire, pay, insure, and support your team in one
            platform.
          </p>
          <div>
            <button id="acn_btnA">Create account</button>
            <button id="acn_btnB">Learn how Gusto works</button>
          </div>
        </div>
        <div id="right_top1">
          <div className="prom_box">
            <img src="https://bit.ly/3rjl4Vg" alt="img1" />
            <div className="prom_box_child ">
              <h1>Starting a business</h1>
              <p>
                Recenly Started a business or looking for a payroll provider?
                <a href="Learn more about Gusto"></a>
              </p>
            </div>
          </div>
          <div className="prom_box">
            <img src="https://bit.ly/3LV5Uz9" alt="img2" />
            <div className="prom_box_child ">
              <h1>Switching to Gusto</h1>
              <p>Looking for a payroll provider and benefits provider?</p>
              <a href="Let us help you switch providers"></a>
            </div>
          </div>
          <div className="prom_box">
            <img src="https://bit.ly/3SPriI3" alt="img3" />
            <div className="prom_box_child ">
              <h1>Accountant</h1>
              <p>
                Want to grow your accounting practice?
                <a href="Check out the perks for Gusto partners"></a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="bottom_box">
        <div id="bottomBoxA">
          <div id="bottomLeftBox">
            <h1>Quickly pay your employess and contractors.</h1>
            <button id="learn_btn">Learn how payroll works</button>

            <div>
              <h3 className="serv_text">
                Full-service payroll
               
              </h3>
              <hr />
            </div>

            <div>
              <h3 className="serv_text">
                Time and attendance
               
              </h3>
              <hr />
            </div>

            <div>
              <h3 className="serv_text">
                Insights and reporting
            
              </h3>
              <hr />
            </div>
          </div>
          <div id="promo_img">
            <img
              src="https://prod.gusto-assets.com/wp-content/uploads/Insights-and-reporting%402x.png"
              alt="Promo_img"
            />
          </div>
        </div>

        <div id="price_box">
          <div>
            <h1>Pricing plans start at just $46/month</h1>
            <p>
              No matter the size or stage of your business we'll work with you
              to find the plan that best suits your needs.{" "}
            </p>
          </div>
          <div>
            <button>See Price</button>
          </div>
        </div>

        <div id="bottomBoxB">
          <div id="promo_img">
            <img
              src="https://prod.gusto-assets.com/wp-content/uploads/Talent-management%402x.png"
              alt=""
            />
          </div>

          <div id="bottomLeftBox">
            <h1>
              Build a better workplace with flexible benefits and HR tools.
            </h1>
            <button id="learn_btn">Learn how benefits work</button>
            <div>
              <h3 className="serv_text">
                Employee benefit
              
              </h3>
              <hr />
            </div>

            <div>
              <h3 className="serv_text">
                Hiring and onboarding
                
              </h3>
              <hr />
            </div>

            <div>
              <h3 className="serv_text">
                Talent management
               
              </h3>
              <hr />
            </div>
          </div>
        </div>

        <div id="banner_one">
          <h1>
            "I can't imagine running out business without Gusto. We use it for
            payroll, compliance, 401(k), employee benefits, the HR resourcr
            center...the list goes on."
          </h1>
          <img
            src="https://prod.gusto-assets.com/wp-content/uploads/signature-Sara-Jane-Hess-1.svg"
            alt="Signature"
            id="sign"
          />{" "}
          Operations Director, SPI Media LLC
        </div>

        <div>
          <h4 id="prc_txt">Prices start at just $46/month</h4>
          <div>
            <h1 id="team_text">Get your team working with Gusto.</h1>
            <div id="bottomBoxC">
              <div>
                <h2>Create an account</h2>
                <p>
                  It's free to start. Tell us about business and we'll find the
                  best plan for your needs.
                </p>
              </div>

              <div>
                <h2>Add your people</h2>
                <p>
                  Enter your employees into Gusto. They can even self-onboard to
                  save you time.
                </p>
              </div>

              <div>
                <h2>Run your first payroll</h2>
                <p>
                  Once we have you employee and tax info, you can run payroll in
                  just a few clicks.
                </p>
              </div>
            </div>
            <button id="acn_btn">Create account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
