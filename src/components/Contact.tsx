import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { BsPerson } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

const ContactForm = () => {
  const handlesubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <Box maxWidth="500px" mx="auto" mt={"6rem"} bg={useColorModeValue("gray.100", "gray.800")} p="6" rounded="lg">
      <VStack spacing="6">
        <Heading size="lg" textAlign="center">Contact Me</Heading>
        <form  onSubmit={handlesubmit}>
          <Stack spacing="4" width="100%">
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<BsPerson color="gray.300" />} />
                <Input type="text" id="name" placeholder="Enter your name" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<MdOutlineEmail color="gray.300" />} />
                <Input type="email" id="email" placeholder="Enter your email address" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea id="message" placeholder="Enter your message" />
            </FormControl>
            <Button colorScheme="blue"  type="submit">Submit</Button>
            <Text fontWeight={"semibold"}> call 6307229382</Text>
          </Stack>
        </form>
      </VStack>
    </Box>
  );
}

export default ContactForm;
