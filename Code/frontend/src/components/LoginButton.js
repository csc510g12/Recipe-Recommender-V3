/* MIT License

Copyright (c) 2025 Ayush Gala, Ayush Pathak, Keyur Gondhalekar */

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      onClick={() => loginWithRedirect()}
      colorScheme="teal"
      variant="solid"
      size="lg"
    >
      Log In
    </Button>
  );
};

export default LoginButton;