import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";

import {
  StyledForm,
  FormContainer,
  Logo,
  Container,
  Wrapper,
} from "../SignUp/signupElements";

import {
  StyledButtonDark,
  StyledTextInput,
} from "../styledComponents/styledElements";

import { SignUpLink } from "../SignUp";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const SignInPage = () => (
  <Container>
    <Wrapper>
      <Logo>
        <h1>Log In</h1>
      </Logo>
      <FormContainer>
        <SignInFormBase />
      </FormContainer>
    </Wrapper>
  </Container>
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
      <StyledForm onSubmit={this.onSubmit}>
        <StyledTextInput
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <StyledTextInput
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <SignUpLink />
        <StyledButtonDark disabled={isInvalid} type="submit">
          LOGIN
        </StyledButtonDark>

        {error && <p>{error.message}</p>}
      </StyledForm>
    );
  }
}
const SignInLink = () => (
  <p>
    Already have an account? <Link to={ROUTES.SIGN_IN}>Log In</Link>
  </p>
);

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;

export { SignInForm, SignInLink };
