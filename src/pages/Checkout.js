import { Fragment, useState, useContext } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import GoBackBtn from "../components/shared/GoBackBtn";
import Heading4 from "../components/form/Heading4";
import InputWrapper from "../components/form/InputWrapper";
import PaymentMethod from "../components/form/PaymentMethod";
import Label from "../components/form/Label";
import Heading3 from "../components/shared/Heading3";
import CartContext from "../context/cart/cartContext";
import CartItemDetails from "../components/cart/CartItemDetails";
import CostList from "../components/checkout/CostList";
import cashPaymentImg from "../assets/shared/desktop/cash-payment.png";

/* REACT FORMIK IMPORTS */

import { Formik, Form } from "formik";
import FormikInput from "../components/form/FormikInput";
import { formValidation } from "../components/form/FormikValidation";

const Checkout = () => {
  const { cart, total } = useContext(CartContext);

  /* Default Values for various input fields */

  const initialValues = {
    name: "",
    email: "",
    phonenumber: "",
    address: "",
    city: "",
    zipcode: "",
    country: "",
  };

  const [paymentMethod, setPaymentMethod] = useState("eMoney");

  const handleOnChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Fragment>
      <Header />
      <section className="max-w-screen-xxl mb-56 mx-auto px-10 xl:px-0">
        <GoBackBtn link="" />

        {/* FORMIK FORM */}
        <Formik
          initialValues={initialValues}
          validationSchema={formValidation}
          onSubmit={handleSubmit}
        >
          <Form className="px-10">
            <div className="xl:grid xl:grid-cols-3 gap-x-12">
              <div className="col-span-2">
                <Heading3 text="checkout" classList="sm:text-4xxl md:text-5xl" />
                <Heading4 text="BILLING DETAILS" />
                <div className="xl:grid xl:grid-cols-2 gap-x-6">
                  <FormikInput name="name" label="Name" placeholder="Alexei Ward" />
                  <FormikInput name="email" label="Email" placeholder="alexei@mail.com" />
                  <FormikInput
                    name="phonenumber"
                    label="Phone Number"
                    placeholder="+1 202-555-0136"
                  />
                </div>
                <div>
                  <Heading4 text="SHIPPING INFO" />
                  <div className="xl:grid xl:grid-cols-2 gap-x-6">
                    <div className="col-span-2">
                      <FormikInput
                        name="address"
                        label="Address"
                        placeholder="1137 William Avenue"
                      />
                    </div>
                    <FormikInput name="zipcode" label="ZIP Code" placeholder="10001" />
                    <FormikInput name="city" label="City" placeholder="New York" />
                    <FormikInput name="country" label="Country" placeholder="United States" />
                  </div>
                </div>

                <div>
                  <Heading4 text="PAYMENT DETAILS" />
                  <div className="xl:flex xl:justify-between">
                    <Label text="Payment Method" />
                    <div className="xl:w-6/12">
                      <PaymentMethod
                        labelText="e-Money"
                        value="eMoney"
                        onChange={handleOnChange}
                        checked={paymentMethod === "eMoney"}
                      />
                      <PaymentMethod
                        labelText="Cash On Delivery"
                        value="cashOnDelivery"
                        onChange={handleOnChange}
                        checked={paymentMethod === "cashOnDelivery"}
                      />
                    </div>
                  </div>

                  <div className="my-12">
                    {paymentMethod === "eMoney" && (
                      <div className="xl:grid xl:grid-cols-2 gap-x-6">
                        <InputWrapper
                          type="number"
                          labelText="e-Money Number"
                          placeholder="238531992"
                        />
                        <InputWrapper type="number" labelText="e-Money PIN" placeholder="6891" />
                      </div>
                    )}

                    {paymentMethod === "cashOnDelivery" && (
                      <div className="md:flex">
                        <div className="mb-10 w-1/3 ">
                          <img src={cashPaymentImg} alt="" className="h-24 w-24" />
                        </div>
                        <p className="opacity-50">
                          The ‘Cash on Delivery’ option enables you to pay in cash when our delivery
                          courier arrives at your residence. Just make sure your address is correct
                          so that your order will not be cancelled.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* SUMMARY OF ALL THE PURCHASES */}

              <aside className="px-10">
                <h5 className="my-12 font-bold text-3xl">SUMMARY</h5>

                {/* GET THE CART ITEMS FROM THE CONTEXT API AND LOOP THROUGH AND DISPLAY THE ITEMS */}
                {cart.map((item) => (
                  <div className="flex justify-between items-center mb-10">
                    <CartItemDetails
                      productCartImg={item.image}
                      productName={item.name}
                      productAmount={item.amount}
                    />

                    <span className="block font-bold opacity-50">X{item.quantity}</span>
                  </div>
                ))}

                {/* SUMMARY OF ALL THE TOTAL COST */}
                <ul>
                  <CostList name="total" amount={total} />
                  <CostList name="shipping" amount={50} />
                  <CostList name="vat(included)" amount={Math.floor(total / 5)} />
                  <div className="mt-10">
                    <CostList name="grandtotal" amount={total + 50} />
                  </div>
                </ul>

                <button
                  type="submit"
                  className="uppercase font-bold bg-brown-100 text-white-300 w-full my-12 cursor-pointer hover:bg-brown-200"
                >
                  Continue & pay
                </button>
              </aside>
            </div>
          </Form>
        </Formik>
      </section>
      {/*
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
      <br /> */}

      {/* Thank you for your order You will receive an email confirmation shortly.
      <br />
      XX99 MK II x 1 $2,999 and 2 other item(s)
      <br />
      Grand total $5,526
      <br />
      Back to home */}

      <Footer />
    </Fragment>
  );
};

export default Checkout;
