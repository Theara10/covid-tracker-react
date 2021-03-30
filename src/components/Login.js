import React, { useContext } from "react";
import { gql, useMutation } from "@apollo/client";
import { TokenContext } from "../context/tokenContext";

const LOGIN = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password)
  }
`;

function Login() {
  let username;
  let password;
  const context = useContext(TokenContext);
  const [loginUser] = useMutation(LOGIN, {
    onCompleted: (res) => {
      localStorage.setItem("token", res.loginUser);
      context.setToken(res.loginUser);
    },
  });

  return (
    <form
      className="login"
      onSubmit={(e) => {
        e.preventDefault();
        loginUser({
          variables: {
            username: username.value,
            password: password.value,
          },
        });
      }}
    >
      <input
        placeholder="Username"
        ref={(value) => {
          username = value;
        }}
      />
      <input
        placeholder="Password"
        ref={(value) => {
          password = value;
        }}
      />
      <button>Login</button>
    </form>
  );
}

export default Login;
