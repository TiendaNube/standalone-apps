import React from "react";
import { Box, Button, Text } from "@nimbus-ds/components";
import { useLocation, useNavigate } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <Box
      position="absolute"
      height="100vh"
      width="100%"
      top="0"
      left="0"
      backgroundColor="neutral-background"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="danger-interactive">{state?.message}</Text>
      <Box marginTop="4">
        <Button as="a" onClick={() => navigate("/")}>
          try again
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPage;
