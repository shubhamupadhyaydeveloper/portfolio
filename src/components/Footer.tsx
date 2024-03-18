import { Box, Text, Flex } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" py="4" mt={"3rem"}>
      <Flex justify="center" align="center" flexDirection={"column"}>
        <Text fontWeight={"semibold"}>Advocate Balmukund Tiwari</Text>
        <Text>&copy; All rights reserved.</Text>
      </Flex>
    </Box>
  );
}

export default Footer;
