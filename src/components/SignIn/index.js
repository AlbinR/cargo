import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { compose } from "recompose";

import { Input } from "../Input.style";
import { BackButton, Button } from "../Button.style";
import { AppContainer, Wrapper, Box, TopNavDiv } from "../Container.style";

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const SignInPage = () => (
  <AppContainer>
    <Wrapper>
      <TopNavDiv>
        <Link to={ROUTES.LANDING}>
          <BackButton />
        </Link>
      </TopNavDiv>
      <Box>
        <h1>Login</h1>
        <SignInForm />
      </Box>
    </Wrapper>
  </AppContainer>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <form onSubmit={this.onSubmit}>
        {error && <p>{error.message}</p>}
        <Input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email"
        />
        <Input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <PasswordForgetLink />
        <Button
          backgroundColor="#43456C"
          textColor="#fff"
          disabled={isInvalid}
          type="submit"
        >
          LOGIN
        </Button>

        <SignUpLink />
      </form>
    );
  }
}

const SignInLink = () => (
  <p>
    Already have an account? <Link to={ROUTES.SIGN_IN}>Login</Link>
  </p>
);

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;

export { SignInForm, SignInLink };
