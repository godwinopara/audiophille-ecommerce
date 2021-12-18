## Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order
  - VAT is calculated as 20% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

![](./preview.jpg)
![](./React-App.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- JSX
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React Router](https://reactrouter.com/) - For Routes
- [Formik](https://formik.org) - For Form
- [Yup](https://github.com/jquense/yup) - For Form Validation
- [Tailwind Css](https://tailwindcss.com/) - For styles

### What I learned

- I decided to use Tailwind since i wanted to learn Tailwind.. Tailwind is pretty cool! I was really against using Tailwind. Mostly because of how it makes HTML look 'messy'. While that still remains the case I was pleasantly surprised by how intuitive it became. Also the ease with which you can build components was welcomed.
- I also learnt how to use Formik and Yup for form validations.. i was amazed on how super easy and stress free it was to set up form validations with formik and yup and also with less code.

- if your are using react router, By default if you have a long content page and then you navigate to another long content page, you will stay scrolled down. This behavior doesn’t make lots of sense because not many people like to read text upside down. i had to google how to scroll to the top when a user navigate to another page so i found this solution:

- Create a wrapper component that handles scroll restoration for you:

```jsx
// ScrollToTop.jsx
// ScrollToTop Wrapper
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};
```

- Wrap the ScrollToTop Wrapper component round your application

```jsx
// App.jsx

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./LandingPage";
import ProductPage from "./ProductPage";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>

          <Route path="/product">
            <ProductPage />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
};
```

## Author

- Website - [Godwin Opara](https://godwin-ahamefula.netlify.app/)
- Frontend Mentor - [@godwinopara](https://www.frontendmentor.io/profile/godwinopara)
- Twitter - [@godwinopara12](https://www.twitter.com/godwinopara12)
