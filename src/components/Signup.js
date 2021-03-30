import React from "react";
import { gql, useMutation, userMutation } from "@apollo/client";

const REGISTER = gql`
  mutation createUser($data: UserInput) {
    createUser(data: $data)
  }
`;

function Signup() {
  const [createUser] = useMutation(REGISTER);
  let username;
  let display_name;
  let password;

  return (
    <form
      className="signup"
      onSubmit={(e) => {
        e.preventDefault();
        createUser({
          variables: {
            data: {
              username: username.value,
              display_name: display_name.value,
              password: password.value,
            },
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
      <input
        placeholder="Display Name"
        ref={(value) => {
          display_name = value;
        }}
      />
      <button>Signup</button>
    </form>
  );
}

export default Signup;
