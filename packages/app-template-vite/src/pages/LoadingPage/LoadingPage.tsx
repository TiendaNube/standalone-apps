import React from "react";
import { Box, Spinner } from "@nimbus-ds/components";

const Loading: React.FC = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner size="medium" />
    </Box>
  );
};

export default Loading;
