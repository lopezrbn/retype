/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { Fragment_8aefff3f0dcc4f1c02398cfd8f962bf7 } from "/utils/stateful_components"
import { Box, Button, Center, Heading, Image as ChakraImage, Input, Spacer, VStack } from "@chakra-ui/react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, isTrue, set_val } from "/utils/state"
import "focus-visible/dist/focus-visible"
import { DebounceInput } from "react-debounce-input"
import NextHead from "next/head"



export function Fragment_b07ea18d2d9cfa8f91d1354efd943145 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__state = useContext(StateContexts.state__state)


  return (
    <Fragment>
  {isTrue(state__state.player_name_cookie) ? (
  <Fragment>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Center sx={{"height": "90vh"}}>
  <VStack>
  <ChakraImage src={`/main-logo-transparent.png`}/>
  <Heading sx={{"color": "#0B3C49", "textAlign": "center", "fontSize": "1.5em"}}>
  {`Welcome back to rety.pe,
`}
  {state__state.player_name_cookie}
  {`!`}
</Heading>
  <Spacer/>
  <Button onClick={(_e) => addEvents([Event("state.state.login_handler", {})], (_e), {})} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
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
  <ChakraImage src={`/main-logo-transparent.png`}/>
  <Heading sx={{"color": "#0B3C49", "textAlign": "center", "fontSize": "1.5em"}}>
  {`Welcome to rety.pe!`}
</Heading>
  <Spacer/>
  <DebounceInput debounceTimeout={50} element={Input} onChange={(_e0) => addEvents([Event("state.state.set_text_player_name_input", {value:_e0.target.value})], (_e0), {})} placeholder={`Enter your name`} type={`text`} value={state__state.text_player_name_input}/>
  <Spacer/>
  <Button onClick={(_e) => addEvents([Event("state.state.write_cookies", {player_name:state__state.text_player_name_input})], (_e), {})} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {`Log in`}
</Button>
</VStack>
</Center>
</Box>
</Fragment>
)}
</Fragment>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_8aefff3f0dcc4f1c02398cfd8f962bf7/>
  <Center>
  <VStack>
  <Fragment_b07ea18d2d9cfa8f91d1354efd943145/>
</VStack>
</Center>
  <NextHead>
  <title>
  {`Rety.pe - A game of words`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
