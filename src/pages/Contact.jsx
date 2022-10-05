import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {  Flex, 
          FormControl, 
          Heading, 
          Input, 
          Stack, 
          Text, 
          Box, 
          Textarea, 
          Button, 
          Alert, 
          AlertIcon, 
          Link, 
          Highlight } from '@chakra-ui/react'

const Contact = () => {

  const [alert, setAlert] = useState({type: 'success', visible: false, text: 'Your message sent!'})
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_KEY}`, `${process.env.REACT_APP_TEMPLATE_KEY}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`) //service, template, publicKey
      .then((result) => {
          setAlert({type: 'success', visible: true, text: 'Your message sent!'})
          console.log(result.text)
          setTimeout(() => {
            setAlert({type: 'success', visible: false, text: 'Your message sent!'})
          }, 2000)
          // clearTimeout(timer)
      }, (error) => {
          setAlert({type: 'error', visible: true, text: 'There was an error processing your request'})
          console.log(error.text)
          setTimeout(() => {
            setAlert({type: 'success', visible: false, text: 'Your message sent!'})
          }, 2000)
          // clearTimeout(timer)
      })}

  return (
    <>
      <Flex direction='column' p='35px' justify='center' maxW='800px' margin='auto'>
        <Heading as='h2' size='lg'>Write me</Heading>
        {alert.visible && 
          <Alert status={alert.type} mt='20px'>
            <AlertIcon />
            {alert.text}
        </Alert>
        }
        <FormControl as='form' ref={form} onSubmit={sendEmail} mt='30px'>
          <Stack spacing={3}>
            <Box>
              <Text as='label'>Name</Text>
              <Input placeholder='Enter your name' type="text" size='md' name="user_name"/>
            </Box>
            <Box>
              <Text as='label'>Email</Text>
              <Input placeholder='Enter your email' size='md' type="email" name="user_email"/>
            </Box>
            <Box>
              <Text as='label'>Message</Text>
              <Textarea placeholder='Enter your message' size='md' name="message"/>
            </Box>
            <Button colorScheme='orange' size='sm' type="submit" value="Send">
              Send
            </Button>
          </Stack>
        </FormControl>
        <Flex mt='40px' alignItems='center'>
          <Highlight query='...Or just email me here:' styles={{ px: '1', py: '1', bg: 'orange.100' }}>
            ...Or just email me here:
          </Highlight>
          <Link ml='16px' as='a' href='mailto:evgeniykozlovfordev@gmail.com'>evgeniykozlovfordev@gmail.com</Link>
        </Flex>
      </Flex>
    </>
  )
}

export default Contact