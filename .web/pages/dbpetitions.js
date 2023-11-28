import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, set_val, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Button, Checkbox, Divider, Heading, HStack, Image, Input, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Table, Tbody, Td, Text, Tr, VStack } from "@chakra-ui/react"
import { getEventURL } from "/utils/state.js"
import NextLink from "next/link"
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

  const ref_select = useRef(null); refs['ref_select'] = ref_select;
  const ref_query = useRef(null); refs['ref_query'] = ref_query;

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
  <Box sx={{"width": "99%", "margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <HStack>
  <Link as={NextLink} href={`/home`} sx={{"textDecoration": "underline", "color": "#0B3C49"}}>
  {`Home`}
</Link>
  <Link as={NextLink} href={`/stats`} sx={{"textDecoration": "underline", "color": "#0B3C49"}}>
  {`Stats`}
</Link>
  <Link as={NextLink} href={`/trophies`} sx={{"textDecoration": "underline", "color": "#0B3C49"}}>
  {`Trophies`}
</Link>
  <Spacer/>
  <Text sx={{"color": "#0B3C49", "textAlign": "center"}}>
  {`Logged in as `}
  <Text as={`span`}>
  <Link as={NextLink} href={`/`} sx={{"textDecoration": "underline", "color": "#0B3C49"}}>
  {`${state.data["player_name"]}`}
</Link>
</Text>
</Text>
</HStack>
  <Divider sx={{"color": "#FAC934", "borderWidth": "thin"}}/>
</Box>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <HStack alignItems={`center`}>
  <Link as={NextLink} href={`./home`} sx={{"textDecoration": "underline", "color": "#0B3C49"}}>
  <Image src={`/main-logo-transparent.png`}/>
</Link>
  <Heading sx={{"fontSize": "1.5em", "color": "#0B3C49", "textAlign": "center"}}>
  {state.date_today}
</Heading>
</HStack>
  <Divider sx={{"color": "#FAC934", "borderWidth": "thin"}}/>
</Box>
  <Box sx={{"flexGrow": "1", "alignItems": "center", "margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <VStack>
  <Box as={`form`} onSubmit={(_e0) => addEvents([Event("state.submit_dbpetition_handler", {form_data:{"select": getRefValue(ref_select), "query": getRefValue(ref_query)}})], (_e0), {"preventDefault": true})}>
  <VStack>
  <DebounceInput debounceTimeout={50} element={Input} id={`query`} inputRef={ref_query} onChange={(_e0) => addEvents([Event("state.set_text_to_show", {value:_e0.target.value})], (_e0), {})} placeholder={`Enter a valid query`} sx={{"borderColor": "#FAC934", "borderWidth": "medium", "color": "#0B3C49"}} type={`text`} value={state.compound_text}/>
  <Checkbox id={`select`} isChecked={state.select_db_petition} onChange={(_e0) => addEvents([Event("state.set_select_db_petition", {value:_e0.target.checked})], (_e0), {})} ref={ref_select}>
  {`Select`}
</Checkbox>
  <HStack>
  <Button sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}} type={`submit`}>
  {`Submit`}
</Button>
  <Button onClick={(_e) => addEvents([Event("state.set_text_to_show", {value:``})], (_e), {})} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}} type={`reset`}>
  {`Reset`}
</Button>
</HStack>
</VStack>
</Box>
  <Spacer/>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Table sx={{"textAlign": "center"}}>
  <Tbody>
  {state.db_petition_output.map((loyhfxeo, evdtwexd) => (
  <Tr key={evdtwexd}>
  {loyhfxeo.map((apilwigt, frvlvhay) => (
  <Td key={frvlvhay}>
  {apilwigt}
</Td>
))}
</Tr>
))}
</Tbody>
</Table>
</Box>
</VStack>
</Box>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Divider sx={{"color": "#FAC934", "borderWidth": "thin"}}/>
  <Text sx={{"color": "#0B3C49", "textAlign": "center"}}>
  {`Today ${state.global_values_today_to_show.at(0)} people have                 participated and ${state.global_values_today_to_show.at(1)} words                 have been found, scoring ${state.global_values_today_to_show.at(2)}                 points per word on average.`}
</Text>
  <Text sx={{"color": "#0B3C49", "textAlign": "center"}}>
  <Text as={`span`}>
  <Link as={NextLink} href={`./dbpetitions`} sx={{"textDecoration": "none", "color": "#0B3C49"}}>
  {`2023`}
</Link>
</Text>
  {` | @lopezrbn`}
</Text>
</Box>
</Box>
  <NextHead>
  <title>
  {`Rety.pe - A words game`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
