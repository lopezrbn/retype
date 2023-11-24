import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, set_val, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Button, Center, Heading, Image, Input, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, VStack } from "@chakra-ui/react"
import { getEventURL } from "/utils/state.js"
import { DebounceInput } from "react-debounce-input"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
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
    const change_complete = () => addEvents(initialEvents())
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
  <Text sx={{"color": "#0B3C49", "textAlign": "center"}}>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getEventURL().href}
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
  <VStack>
  <Fragment>
  {isTrue(state.player_name_cookie) ? (
  <Fragment>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Center sx={{"height": "90vh"}}>
  <VStack>
  <Image src={`/main-logo-transparent.png`}/>
  <Heading sx={{"color": "#0B3C49", "textAlign": "center", "fontSize": "2em"}}>
  {`Welcome back, `}
  {state.player_name_cookie}
  {`!`}
</Heading>
  <Spacer/>
  <Button onClick={(_e) => addEvents([Event("state.login_handler", {})], (_e), {})} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {`Log in`}
</Button>
</VStack>
</Center>
</Box>
</Fragment>
) : (
  <Fragment>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Center sx={{"height": "90vh"}}>
  <VStack>
  <Image src={`/main-logo-transparent.png`}/>
  <Heading sx={{"color": "#0B3C49", "textAlign": "center", "fontSize": "2em"}}>
  {`Welcome to Words!`}
</Heading>
  <Spacer/>
  <DebounceInput debounceTimeout={50} element={Input} onChange={(_e0) => addEvents([Event("state.set_text_player_name_input", {value:_e0.target.value})], (_e0), {})} placeholder={`Enter your name`} sx={{"borderColor": "#FAC934", "borderWidth": "medium", "color": "#0B3C49"}} type={`text`} value={state.text_player_name_input}/>
  <Spacer/>
  <Button onClick={(_e) => addEvents([Event("state.write_cookies", {player_name:state.text_player_name_input})], (_e), {})} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {`Log in`}
</Button>
</VStack>
</Center>
</Box>
</Fragment>
)}
</Fragment>
</VStack>
</Center>
  <NextHead>
  <title>
  {`Words - A words game 2`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
