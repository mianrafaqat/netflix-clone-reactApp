import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/footer";
import HeaderContainer from "../containers/header";
import { Form } from "../components";
import * as ROUTES from "../components/constants/routes";

export default function Signup() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirestName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            navigate(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  const isInValid = firstName === "" || password === "" || emailAddress === "";
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              placeholder="First name"
              vaule={firstName}
              onChange={({ target }) => setFirestName(target.value)}
            />

            <Form.Input
              placeholder="Email address"
              vaule={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />

            <Form.Input
              placeholder="Password"
              value={password}
              autoComplete="off"
              type="Password"
              onChange={({ target }) => setPassword(target.value)}
            />

            <Form.Submit disabled={isInValid} type="submit">
              Sign Up
            </Form.Submit>

            <Form.Text>
              Alreadt a user? <Form.Link to="/signin">Sign in now</Form.Link>
            </Form.Text>

            <Form.TextSmall>
              This page is protected by Google reCAPTHA to ensure you are not a
              bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
