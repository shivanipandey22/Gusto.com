import React from "react";
import "./Payroll.css";
// import { Player } from "video-react";

const Payroll = () => {
  return (
    <div>
      <div id="top_box">
        <div id="top_boxA">
          <p className="txt_one">Full-service payroll</p>
          <h1>Payroll that's easy to use and seriously smart</h1>
          <button className="txt_btn">Create account</button>
        </div>
        <div>
          <img
            src="https://embed-ssl.wistia.com/deliveries/2e1a900547e04794d979034c90c58347.webp?image_crop_resized=640x360"
            alt=""
          />
        </div>
      </div>

      <div id="mid_box">
        <div>
          <img
            src="https://prod.gusto-assets.com/wp-content/uploads/illo-sm-money-envelope.png"
            alt=""
          />
          <p>
            Automatically files your <br /> payroll taxes.
          </p>
        </div>
        <div>
          <img
            src="https://prod.gusto-assets.com/wp-content/uploads/illo-sm-calendar.png"
            alt=""
          />
          <p>
            Backed by best-in-class <br /> customer service.
          </p>
        </div>
        <div>
          <img
            src="https://prod.gusto-assets.com/wp-content/uploads/illo-sm-stethoscope.png"
            alt=""
          />
          <p>
            Benefits and time tracking <br /> built right in.
          </p>
        </div>
        <div>
          <img
            src="https://prod.gusto-assets.com/wp-content/uploads/illo-sm-dollar-sign-sync.png"
            alt=""
          />
          <p>
            Unlimited payrolls.Clear <br /> pricing. No surpricing.
          </p>
        </div>
      </div>

      <div id="mid_txt_box">
        <h3>How it works</h3>
        <h1>Run your payroll in minutes.</h1>
        <p>
          Run payroll as many times as you need to each month - we don't charge
          extra. Your team gets paid in just a few clicks. And you can even set
          it on AutoPilot.
        </p>
      </div>

      <div id="vdo_box">
        {/* <Player>
          <source src="../assets/popover-video.mp4" />
        </Player> */}
      </div>
      <div id="info_txt">
        <p>Sync your team's hours automatically.</p>

        <p>We summarize everthing so you can review.</p>

        <p>Submit! Your team's pay is on the way.</p>
      </div>

      <div id="banner">
        <div id="banner_box">
          <div>
            <h1>85%</h1>
            <p>
              of customers say Gusto is easier to use than their last payroll
              provider.
            </p>
          </div>

          <div>
            <h1>13 minutes</h1>
            <p>to run payroll on average, as reported by customers.</p>
          </div>

          <div>
            <h1>90%</h1>
            <p>of customers tell us switching to Gusto is easy.</p>
          </div>
        </div>
        <p id="val_txt">
          Based on a 2018 TechValidate survey of more than 600 Gusto customers
        </p>
      </div>
      <div>
        <div id="tax_txt">
          <h3>Payroll taxes</h3>
          <h1>Your payroll taxes, filed automatically.</h1>
          <p>
            We don’t just calculate your taxes, we file them with the right
            government agencies every time you run payroll. Other providers
            charge for this — with us, it’s included.
          </p>
        </div>
      </div>

      <div id="plt_txt">
        <h3>Integrated platform</h3>
        <h1>Everything you need, synced with payroll.</h1>
        <p>
          All our features work together seamlessly on one platform — health
          insurance, 401(k), workers’ comp, time tracking, PTO, Gusto Cashout™,
          and more.
        </p>
        <h4>We play nice with others too.</h4>
        <div id="li">
          <div>
            <ul>
              <li>✔ Xero</li>
              <li>✔ Clover</li>
              <li>✔ Trainual</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>✔ TSheets</li>
              <li>✔ QuickBooks</li>
              <li>✔ and more</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="mid_bnr">
        <div id="mid_bnrA">
          <img
            src="https://prod.gusto-assets.com/wp-content/uploads/payroll-compliance-signature%402x.png"
            alt=""
          />
        </div>

        <div>
          <h6 className="comp">Compliance</h6>
          <h1>Compliance, accuracy,and peace of mind.</h1>
          <h3>No forgotten forms or signatures.</h3>
          <p>
            Employee I-9s and W-2s, and contractor 1099s are stored and
            organized online.
          </p>

          <h3>State tax registration in all 50 states.</h3>
          <p>
            We handle the registration process in all the states your employees
            live and work.
          </p>

          <h3>Auto-calculations for fewer mistakes.</h3>
          <p>
            We keep track of changing tax laws and do the calculations for you.
          </p>

          <h3>Track lunches, breaks, and more.</h3>
          <p>
            If you have hourly workers, our time tracking with geolocation can
            help you stay in compliance.
          </p>
        </div>
      </div>

      <div id="btm_bnr">
        <h2>
          "My favorite thing about Gusto is the compliance aspect. They make{" "}
          <br />
          quarterly taxes, onboarding, and everything else so simple and easy,{" "}
          <br />
          which saves me a ton of time."
        </h2>
        <img
          src="https://prod.gusto-assets.com/wp-content/uploads/Luke-Henke-guava-500.svg"
          alt=""
        />
        <p>Accounting Manager at Amplio Digital LLC</p>
      </div>
      <div id="payroll_btm_box">
        <div>
          <h2>Workers’ compensation</h2>
          <h1>Workers’ comp with no lump sums.</h1>
          <p>
            Protect your business and your employees. Set up and sign your
            workers’ comp policy all online, then pay as you go instead of all
            at once.
          </p>

          <p>More about workers’ compensation</p>

          <div>
            <img
              src="https://prod.gusto-assets.com/wp-content/uploads/HumphrySlocombe-SanFranciscoCA-0334%402x.jpg"
              alt=""
            />
          </div>
        </div>

        <div>
          <div>
            <img
              src="https://prod.gusto-assets.com/wp-content/uploads/international-payment-contractors%402x.jpg"
              alt=""
            />
          </div>
          <h2>Pay contractors in more than 80 countries.</h2>
          <p>
            Growing businesses can’t always limit themselves to one time zone.
            We handle contractor payments in more than 80 countries so you can
            tap into great talent all over the world.
          </p>
          <h3>See all countries</h3>
        </div>

        <div>
          <h3>Customer support</h3>
          <h1>Help from people who care about your team. </h1>
          <p>
            The one thing that makes smart technology better? Even smarter
            people who care about you, your business, and your team.ye bakwas
          </p>
          <p>Get in touch with us. We’re here to help.</p>

          <div>
            <img
              src="https://prod.gusto-assets.com/wp-content/uploads/payroll-customer-support%402x.jpg"
              alt=""
            />
          </div>
        </div>

        <div>
          <h2>
            "As soon as I saw how easy it was to set everything up I liked it,
            but the first time I ever dealt with customer service is when I
            really knew we chose the right payroll company."
          </h2>
          <div>
            <img
              src="https://prod.gusto-assets.com/wp-content/uploads/KyleWoodman_Signature.svg"
              alt=""
            />
            <p>Co-founder of Matchless Builds</p>
          </div>
        </div>

        <div>
          <h3>Financial benefits</h3>

          <h1>Empower your employees and save time.</h1>

          <h3>Self-setup made easy.</h3>
          <p>
            Once hired, employees enter their own details in Gusto. They can
            view their Paystubs and W-2s anytime — even after they change jobs.
          </p>

          <h3>Financial tools built in.</h3>
          <p>
            With Gusto Wallet, savings are built into every paycheck. Employees
            can even access emergency cash between paydays.
          </p>

          <h3>Paperless paydays.</h3>
          <p>
            The Gusto debit card gives employees direct access to their money on
            payday so you don’t have to print checks.
          </p>

          <h3>Learn more about Gusto Wallet</h3>
        </div>

        <div>
          <h3>Financial benefits</h3>
          <h1>Empower your employees and save time.</h1>

          <h3>Self-setup made easy.</h3>
          <p>
            Once hired, employees enter their own details in Gusto. They can
            view their Paystubs and W-2s anytime — even after they change jobs.
          </p>

          <h3>Financial tools built in.</h3>
          <p>
            With Gusto Wallet, savings are built into every paycheck. Employees
            can even access emergency cash between paydays.
          </p>

          <h3>Paperless paydays.</h3>
          <p>
            The Gusto debit card gives employees direct access to their money on
            payday so you don’t have to print checks.
          </p>

          <h3>Learn more about Gusto Wallet</h3>

          <img
            src="https://prod.gusto-assets.com/wp-content/uploads/gusto-wallet%402x.png"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://prod.gusto-assets.com/wp-content/uploads/illo-sm-microscope.png"
            alt=""
          />
          <h1>Want to get into the details?</h1>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
