import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Fragment } from "react";
import GoBackBtn from "../components/shared/GoBackBtn";
import Heading4 from "../components/form/Heading4";
import InputWrapper from "../components/form/InputWrapper";

const Checkout = () => {
  return (
    <Fragment>
      <Header />
      <section className="max-w-screen-xxl mx-auto">
        <GoBackBtn />

        <form action="">
          <div>
            <Heading4 text="BILLING DETAILS" />
            <div>
              <InputWrapper inputType="text" labelText="Name" />
              <InputWrapper inputType="text" labelText="Email Address" />
              <InputWrapper inputType="number" labelText="Phone Number" />
            </div>
          </div>
          <div>
            <Heading4 text="SHIPPING INFO" />
            <div>
              <InputWrapper inputType="text" labelText="Address" />
              <InputWrapper inputType="text" labelText="ZIP Code" />
              <InputWrapper inputType="text" labelText="City" />
              <InputWrapper inputType="text" labelText="Country" />
            </div>
          </div>
        </form>
      </section>
      <br />
      <br />
      Payment details Payment method e-Money Cash on delivery e-Money number e-money PIN
      <br />
      The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at
      your residence. Just make sure your address is correct so that your order will not be
      cancelled.
      <br />
      Summary XX99 MK II x1 $2,999
      <br />
      XX59 x2 $899
      <br />
      YX1 x1 $599
      <br />
      Total $5,396 Shipping $10 VAT $120
      <br />
      Grand total $5,526
      <br />
      Continue & pay
      <br />
      {/* <!-- Success Modal --> */}
      Thank you for your order You will receive an email confirmation shortly.
      <br />
      XX99 MK II x 1 $2,999 and 2 other item(s)
      <br />
      Grand total $5,526
      <br />
      Back to home
      {/* <!-- End success modal --> */}
      <br />
      Home Headphones Speakers Earphones
      <br />
      Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music
      lovers and sound specialists who are devoted to helping you get the most out of personal
      audio. Come and visit our demo facility - we’re open 7 days a week.
      <br />
      Copyright 2021. All Rights Reserved
      <Footer />
    </Fragment>
  );
};

export default Checkout;
