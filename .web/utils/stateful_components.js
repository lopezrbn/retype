/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, isTrue } from "/utils/state"
import { Heading, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { getEventURL } from "/utils/state.js"
import NextLink from "next/link"




export function Fragment_8aefff3f0dcc4f1c02398cfd8f962bf7 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
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
  )
}

export function Link_bfffecc422062882caa95ea6d74a56ae () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Link as={NextLink} href={`/`} sx={{"textDecoration": "underline", "color": "#0B3C49"}}>
  {`${state__state.data["player_name"]}`}
</Link>
  )
}

export function Heading_90693c0783c06a0d4f30e08f2a1c6b32 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Heading sx={{"fontSize": "1.5em", "color": "#0B3C49", "textAlign": "center"}}>
  {state__state.date_today}
</Heading>
  )
}

export function Text_34ad5dfe8f798cf543bf2ce0818cfaf6 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"color": "#0B3C49", "textAlign": "center"}}>
  {`Today ${state__state.global_values_today_to_show.at(0)} people have                 participated and ${state__state.global_values_today_to_show.at(1)} words                 have been found, scoring ${state__state.global_values_today_to_show.at(2)}                 points per word on average.`}
</Text>
  )
}
