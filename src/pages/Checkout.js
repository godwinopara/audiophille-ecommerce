import { Fragment, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import GoBackBtn from "../components/shared/GoBackBtn";
import Heading4 from "../components/form/Heading4";
import InputWrapper from "../components/form/InputWrapper";
import PaymentMethod from "../components/form/PaymentMethod";
import Label from "../components/form/Label";
import Heading3 from "../components/shared/Heading3";
import { useContext } from "react";
import CartContext from "../context/cart/cartContext";
import CartItemDetails from "../components/cart/CartItemDetails";
import CostList from "../components/checkout/CostList";
import Input from "../components/shared/Input";

const Checkout = () => {
  const { cart, total } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("eMoney");

  const handleOnChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <Fragment>
      <Header />
      <section className="max-w-screen-xxl mb-56 mx-auto px-10 xl:px-0">
        <GoBackBtn />
        <div className="xl:grid xl:grid-cols-3 gap-x-12">
          <form action="" className="px-10 border col-span-2">
            <Heading3 text="checkout" classList="sm:text-4xxl md:text-5xl" />
            <div>
              <Heading4 text="BILLING DETAILS" />
              <div>
                <InputWrapper inputType="text" labelText="Name" placeholder="Alexei Ward" />
                <InputWrapper
                  inputType="text"
                  labelText="Email Address"
                  placeholder="alexei@mail.com"
                />
                <InputWrapper
                  inputType="number"
                  labelText="Phone Number"
                  placeholder="+1 202-555-0136"
                />
              </div>
            </div>
            <div>
              <Heading4 text="SHIPPING INFO" />
              <div>
                <InputWrapper
                  inputType="text"
                  labelText="Address"
                  placeholder="1137 William Avenue"
                />
                <InputWrapper inputType="text" labelText="ZIP Code" placeholder="10001" />
                <InputWrapper inputType="text" labelText="City" placeholder="New York" />
                <InputWrapper inputType="text" labelText="Country" placeholder="United States" />
              </div>
            </div>

            <div>
              <Heading4 text="PAYMENT DETAILS" />
              <div className="xl:flex justify-between">
                <Label text="Payment Method" />
                <div>
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

              {paymentMethod === "eMoney" && (
                <div>
                  <InputWrapper type="number" labelText="e-Money Number" placeholder="238531992" />
                  <InputWrapper type="number" labelText="e-Money PIN" placeholder="6891" />
                </div>
              )}

              <div>
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier
                  arrives at your residence. Just make sure your address is correct so that your
                  order will not be cancelled.
                </p>
              </div>
            </div>
          </form>
          <aside className="px-10">
            <h5 className="my-12 font-bold text-3xl">SUMMARY</h5>

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

            <ul>
              <CostList name="total" amount={total} />
              <CostList name="shipping" amount={50} />
              <CostList name="vat(included)" amount={Math.floor(total / 5)} />
              <div className="mt-10">
                <CostList name="grandtotal" amount={total + 50} />
              </div>
            </ul>

            <Input
              value="continue & pay"
              classList="uppercase font-bold bg-brown-100 text-white-300 w-full my-12 cursor-pointer hover:bg-brown-200"
            />
          </aside>
        </div>
      </section>
      {/*
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
