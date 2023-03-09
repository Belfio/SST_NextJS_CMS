import React from "react";
import { Flex } from "@chakra-ui/react";

const Navbar: React.FC = () => {
  const parola = "stogazzo";
  return (
    <>
      <Flex bg="white" height="48px" padding="6px 20px">
        <p>Questa è la NavBARRRR</p>
        {parola}
      </Flex>
    </>
  );
};
export default Navbar;
