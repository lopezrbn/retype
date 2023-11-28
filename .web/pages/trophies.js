import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Button, Center, Divider, Flex, Heading, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Radio, RadioGroup, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import { getEventURL } from "/utils/state.js"
import NextLink from "next/link"
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

  const ref_period = useRef(null); refs['ref_period'] = ref_period;

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
  <Box sx={{"width": "100%", "margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
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
  <Flex align={`stretch`} justify={`center`} wrap={`wrap`}>
  <Flex align={`stretch`} direction={`row-reverse`} grow={`1`} justify={`center`} wrap={`wrap`}>
  <Box sx={{"flexGrow": "1", "margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <VStack>
  <Heading sx={{"color": "#0B3C49", "textAlign": "center", "fontSize": "1.5em"}}>
  {`Your trophies`}
</Heading>
  <Table>
  <Thead>
  <Tr>
  <Th>
  {`Trophy number`}
</Th>
  <Th>
  {`Description`}
</Th>
  <Th>
  {`Achieved`}
</Th>
  <Th>
  {`Word`}
</Th>
  <Th>
  {`Date`}
</Th>
</Tr>
</Thead>
  <Tbody>
  {state.trophies_to_show.map((zviqvulm, nofznopt) => (
  <Tr key={nofznopt}>
  {zviqvulm.map((hojvcigq, uhthjokz) => (
  <Td key={uhthjokz}>
  {hojvcigq}
</Td>
))}
</Tr>
))}
</Tbody>
</Table>
</VStack>
</Box>
  <Box sx={{"borderWidth": "medium", "width": "400px", "margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <VStack>
  <Heading sx={{"color": "#0B3C49", "textAlign": "center", "fontSize": "1.5em"}}>
  {`Your points`}
</Heading>
  <Text sx={{"color": "#0B3C49", "textAlign": "center"}}>
  {state.data["points_total"]}
</Text>
</VStack>
</Box>
  <Divider sx={{"color": "#FAC934", "borderWidth": "thin"}}/>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Heading sx={{"color": "#0B3C49", "textAlign": "center", "fontSize": "1.5em"}}>
  {`Your words`}
</Heading>
  <TableContainer>
  <Table>
  <Thead>
  <Tr>
  <Th>
  {`#`}
</Th>
  <Th>
  {`Word`}
</Th>
</Tr>
</Thead>
  <Tbody>
  {state.words_log_to_show.map((rndpzrpo, bzoexwss) => (
  <Tr key={bzoexwss}>
  {rndpzrpo.map((ayruoykf, ckojklwf) => (
  <Td key={ckojklwf}>
  {ayruoykf}
</Td>
))}
</Tr>
))}
</Tbody>
</Table>
</TableContainer>
</Box>
</Box>
</Flex>
  <Box sx={{"borderWidth": "medium", "width": "400px", "margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Heading sx={{"color": "#0B3C49", "textAlign": "center", "fontSize": "1.5em"}}>
  {`Ranking top players`}
</Heading>
</Box>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Box as={`form`}>
  <VStack>
  <HStack>
  <Button onClick={(_e) => addEvents([Event("state.ranking_top_points_button_handler", {})], (_e), {})} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {`Top points`}
</Button>
  <Button onClick={(_e) => addEvents([Event("state.ranking_more_words_button_handler", {})], (_e), {})} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {`More words`}
</Button>
  <Button onClick={(_e) => addEvents([Event("state.ranking_longest_word_button_handler", {})], (_e), {})} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {`Longest word`}
</Button>
</HStack>
  <HStack>
  <RadioGroup id={`period`} onChange={(_e0) => addEvents([Event("state.set_radio_value", {value:_e0})], (_e0), {})} ref={ref_period} sx={{"color": "#0B3C49"}} value={state.radio_value}>
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
  <Divider sx={{"color": "#FAC934", "borderWidth": "thin"}}/>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <TableContainer>
  <Table>
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
  {state.data["ranking"].at(0).at(0)}
</Td>
  <Td>
  {state.data["ranking"].at(0).at(1)}
</Td>
</Tr>
  <Tr>
  <Td>
  {`2`}
</Td>
  <Td>
  {state.data["ranking"].at(1).at(0)}
</Td>
  <Td>
  {state.data["ranking"].at(1).at(1)}
</Td>
</Tr>
  <Tr>
  <Td>
  {`3`}
</Td>
  <Td>
  {state.data["ranking"].at(2).at(0)}
</Td>
  <Td>
  {state.data["ranking"].at(2).at(1)}
</Td>
</Tr>
  <Tr>
  <Td>
  {`4`}
</Td>
  <Td>
  {state.data["ranking"].at(3).at(0)}
</Td>
  <Td>
  {state.data["ranking"].at(3).at(1)}
</Td>
</Tr>
  <Tr>
  <Td>
  {`5`}
</Td>
  <Td>
  {state.data["ranking"].at(4).at(0)}
</Td>
  <Td>
  {state.data["ranking"].at(4).at(1)}
</Td>
</Tr>
</Tbody>
</Table>
</TableContainer>
</Box>
</Box>
</Flex>
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
</Center>
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
