import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import react from "../assets/react.svg";
const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px 20px">
        <HStack>
          <Image src={logo} boxSize="60px"></Image>
          <Image src={react} boxSize="60px"></Image>
        </HStack>
        <HStack>
          <Image src={logo} boxSize="40px"></Image>
          <Image src={react} boxSize="40px"></Image>
        </HStack>
        <HStack>
          <Image src={logo} boxSize="60px"></Image>
          <Image src={react} boxSize="60px"></Image>
        </HStack>
      </HStack>
    </>
  );
};

export default NavBar;
