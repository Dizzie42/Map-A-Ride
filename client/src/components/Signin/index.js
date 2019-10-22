import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import Landing from "../Landing/index";
import { Form, Title, StyledLink, Input } from "../../styles/form-elements";
import MainActionButton from "../shared/MainActionButton";
import StyledH4 from "../shared/StyledH4";
import { PulseLoader } from "react-spinners";
import useHandleInputs from "../../utils/useHandleInputs";
import useHandleSubmit from "../../utils/useHandleSubmit";
import cb from "./submitCallback";
import ErrorMessage from "../shared/ErrorMessage";
import { AuthContext } from "../../context/AuthContext";

const initialState = {
  email: "",
  password: ""
};

const SignIn = props => {
  const { dispatch, store } = useContext(AuthContext);
  const { handleChange, inputs } = useHandleInputs(initialState);
  const { handleSubmit } = useHandleSubmit(() => cb(inputs, dispatch, props));
  const { signInErrors: errors, loading } = store;

  return (
    <Landing>
      <Title>Log in</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter your email"
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          error={errors.email}
        ></Input>
        <ErrorMessage>{errors.email}</ErrorMessage>
        <Input
          placeholder="Enter your password"
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          error={errors.password}
        ></Input>
        <ErrorMessage>{errors.password}</ErrorMessage>
        <MainActionButton type="submit">
          {!loading ? (
            "Log in"
          ) : (
            <PulseLoader size={8} color={"#ffffff"} loading={loading} />
          )}
        </MainActionButton>
      </Form>
      <StyledH4>
        Don't have an account? <StyledLink to="/sign-up">Sign up</StyledLink>
      </StyledH4>
    </Landing>
  );
};

export default withRouter(SignIn);
