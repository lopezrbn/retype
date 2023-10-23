import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, set_val, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Button, ButtonGroup, Center, Divider, Heading, HStack, Input, ListItem, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, OrderedList, Radio, RadioGroup, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useColorMode, VStack } from "@chakra-ui/react"
import { DebounceInput } from "react-debounce-input"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents.map((e) => ({...e})))
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {`http://localhost:8000`}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Center>
  <Box sx={{"width": "99%", "borderColor": "black", "borderWidth": "thick", "borderRadius": "lg", "margin": "0.8em"}}>
  <Box sx={{"borderColor": "black", "borderWidth": "thick", "borderRadius": "lg", "margin": "0.8em"}}>
  <Text>
  {`Today 1 people have participated and 1 words have been found, 
            scoring 8 points per word on average`}
</Text>
</Box>
  <Box sx={{"margin": "0.8em"}}>
  <HStack sx={{"position": "sticky", "zIndex": "999", "borderColor": "black", "borderWidth": "thick", "borderRadius": "lg"}}>
  <Text>
  {`Navbar`}
</Text>
</HStack>
</Box>
  <Box sx={{"margin": "0.8em"}}>
  <HStack alignItems={`top`} justifyContent={`True`}>
  <Box sx={{"width": "25%", "height": "100%", "borderColor": "black", "borderWidth": "thick", "borderRadius": "lg", "margin": "0.8em"}}>
  <VStack>
  <Box sx={{"margin": "0.8em"}}>
  <Heading>
  {`Ranking top players`}
</Heading>
</Box>
  <Divider sx={{"borderColor": "black"}}/>
  <Box sx={{"margin": "0.8em"}}>
  <Box as={`form`}>
  <VStack>
  <HStack>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  {`Top points`}
</Button>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  {`More words`}
</Button>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  {`Longest word`}
</Button>
</HStack>
  <HStack>
  <RadioGroup>
  <Radio value={`Day`}>
  {`Day`}
</Radio>
  <Radio value={`Week`}>
  {`Week`}
</Radio>
  <Radio value={`Month`}>
  {`Month`}
</Radio>
</RadioGroup>
</HStack>
</VStack>
</Box>
</Box>
  <Divider sx={{"borderColor": "black"}}/>
  <Box sx={{"margin": "0.8em"}}>
  <TableContainer>
  <Table variant={`stripped`}>
  <Thead>
  <Tr>
  <Th>
  {`#`}
</Th>
  <Th>
  {`Player`}
</Th>
  <Th>
  {`Points`}
</Th>
</Tr>
</Thead>
  <Tbody>
  <Tr>
  <Td>
  {`1`}
</Td>
  <Td>
  {`Player_name`}
</Td>
  <Td>
  {`100`}
</Td>
</Tr>
  <Tr>
  <Td>
  {`2`}
</Td>
  <Td>
  {`Player_name`}
</Td>
  <Td>
  {`100`}
</Td>
</Tr>
  <Tr>
  <Td>
  {`3`}
</Td>
  <Td>
  {`Player_name`}
</Td>
  <Td>
  {`100`}
</Td>
</Tr>
  <Tr>
  <Td>
  {`4`}
</Td>
  <Td>
  {`Player_name`}
</Td>
  <Td>
  {`100`}
</Td>
</Tr>
  <Tr>
  <Td>
  {`5`}
</Td>
  <Td>
  {`Player_name`}
</Td>
  <Td>
  {`100`}
</Td>
</Tr>
</Tbody>
</Table>
</TableContainer>
</Box>
</VStack>
</Box>
  <Box sx={{"width": "49%", "margin": "0.8em"}}>
  <VStack>
  <Box sx={{"margin": "0.8em"}}>
  <Heading>
  {`Welcome to Words, Rubén!`}
</Heading>
</Box>
  <Divider sx={{"borderColor": "black"}}/>
  <Box sx={{"margin": "0.8em"}}>
  <VStack>
  <Center>
  <Box sx={{"textAlign": "center", "margin": "0.8em"}}>
  <Heading>
  {`Today's letters are:`}
</Heading>
  <ButtonGroup>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  {`letter 1`}
</Button>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  {`letter 2`}
</Button>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  {`letter 3`}
</Button>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  {`letter 4`}
</Button>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  {`letter 5`}
</Button>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  {`letter 6`}
</Button>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  {`letter 7`}
</Button>
</ButtonGroup>
</Box>
</Center>
  <Spacer/>
  <Box as={`form`}>
  <VStack>
  <Input placeholder={`Enter a word`} type={`text`}/>
  <HStack>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}} type={`submit`}>
  {`Submit`}
</Button>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}} type={`reset`}>
  {`Reset`}
</Button>
</HStack>
</VStack>
</Box>
  <Spacer/>
  <Box sx={{"margin": "0.8em"}}>
  <Text>
  {`Response`}
</Text>
</Box>
</VStack>
</Box>
</VStack>
</Box>
  <Box sx={{"width": "25%", "height": "100%", "borderColor": "black", "borderWidth": "thick", "borderRadius": "lg", "margin": "0.8em"}}>
  <VStack>
  <Box sx={{"margin": "0.8em"}}>
  <Heading>
  {`Your points`}
</Heading>
  <Text>
  {`8 points`}
</Text>
</Box>
  <Divider sx={{"borderColor": "black"}}/>
  <Box sx={{"margin": "0.8em"}}>
  <Heading>
  {`Your words`}
</Heading>
  <Center>
  <OrderedList>
  <ListItem>
  {`Word 1`}
</ListItem>
  <ListItem>
  {`Word 2`}
</ListItem>
  <ListItem>
  {`Word 3`}
</ListItem>
  <ListItem>
  {`Word 4`}
</ListItem>
  <ListItem>
  {`Word 5`}
</ListItem>
  <ListItem>
  {`Word 6`}
</ListItem>
  <ListItem>
  {`Word 7`}
</ListItem>
  <ListItem>
  {`Word 8`}
</ListItem>
  <ListItem>
  {`Word 9`}
</ListItem>
  <ListItem>
  {`Word 10`}
</ListItem>
</OrderedList>
</Center>
</Box>
</VStack>
</Box>
</HStack>
</Box>
  <Box sx={{"borderColor": "black", "borderWidth": "thick", "borderRadius": "lg", "margin": "0.8em"}}>
  <Text>
  {`Footer`}
</Text>
</Box>
  <Button onClick={(_e) => addEvents([Event("state.update_index", {})], (_e))} sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em"}}>
  {`a`}
</Button>
  <DebounceInput debounceTimeout={50} element={Input} onChange={(_e0) => addEvents([Event("state.set_text_to_show", {value:_e0.target.value})], (_e0))} placeholder={`Enter a word`} type={`text`} value={state.text_to_show}/>
</Box>
</Center>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
