import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyle from "../../globalStyle";
// import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import FilterPage from "../Filter";
import HomePage from "../Home";
import ListPage from "../List";
import AccountPage from "../Account";
import UserPage from "../UserProfile";
import RentOutPage from "../RentOut/Stepone";
import RentOutPageStepTwo from "../RentOut/Steptwo";
import RentOutPageStepThree from "../RentOut/Stepthree";
import RentOutPageStepFour from "../RentOut/Stepfour";
import RentOutPageStepFive from "../RentOut/Stepfive";
import RentOutPageStepSix from "../RentOut/Stepsix";

import CarInfoPage from "../CarInfo";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";

const App = () => (
  <Router>
    <GlobalStyle />
    <div>
      {/* <Navigation /> */}

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={ROUTES.FILTER} component={FilterPage} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.LIST} component={ListPage} />
      <Route exact path={ROUTES.CARINFO} component={CarInfoPage} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.USER} component={UserPage} />
      <Route exact path={ROUTES.RENTOUT} component={RentOutPage} />
      <Route
        exact
        path={ROUTES.RENTOUTSTEPTWO}
        component={RentOutPageStepTwo}
      />
      <Route
        exact
        path={ROUTES.RENTOUTSTEPTHREE}
        component={RentOutPageStepThree}
      />
      <Route
        exact
        path={ROUTES.RENTOUTSTEPFOUR}
        component={RentOutPageStepFour}
      />
      <Route
        exact
        path={ROUTES.RENTOUTSTEPFIVE}
        component={RentOutPageStepFive}
      />
      <Route
        exact
        path={ROUTES.RENTOUTSTEPSIX}
        component={RentOutPageStepSix}
      />
    </div>
  </Router>
);

export default withAuthentication(App);
