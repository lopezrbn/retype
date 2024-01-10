/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { Fragment_8aefff3f0dcc4f1c02398cfd8f962bf7, Heading_90693c0783c06a0d4f30e08f2a1c6b32, Link_bfffecc422062882caa95ea6d74a56ae, Text_34ad5dfe8f798cf543bf2ce0818cfaf6 } from "/utils/stateful_components"
import { Box, Center, Divider, Heading, HStack, Image as ChakraImage, Link, Spacer, Table, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "@radix-ui/themes/styles.css"
import "focus-visible/dist/focus-visible"
import { Theme as RadixThemesTheme } from "@radix-ui/themes"
import { StateContexts } from "/utils/context"
import NextHead from "next/head"



export function Tbody_9c3af0ff575761dcd3bd6183dc1a4697 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Tbody>
  {state__state.trophies_to_show.map((row, index_743211e520cb92243cf71a29353ad65f) => (
  <Tr key={index_743211e520cb92243cf71a29353ad65f}>
  {row.map((children, props) => (
  <Td key={props}>
  {children}
</Td>
))}
</Tr>
))}
</Tbody>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_8aefff3f0dcc4f1c02398cfd8f962bf7/>
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
  <Link_bfffecc422062882caa95ea6d74a56ae/>
</Text>
</Text>
</HStack>
  <Divider sx={{"color": "#FAC934", "borderWidth": "thin"}}/>
</Box>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <HStack alignItems={`center`}>
  <Link as={NextLink} href={`./home`} sx={{"textDecoration": "underline", "color": "#0B3C49"}}>
  <ChakraImage src={`/main-logo-transparent.png`}/>
</Link>
  <Heading_90693c0783c06a0d4f30e08f2a1c6b32/>
</HStack>
  <Divider sx={{"color": "#FAC934", "borderWidth": "thin"}}/>
</Box>
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
  {`Date`}
</Th>
  <Th>
  {`Word`}
</Th>
</Tr>
</Thead>
  <Tbody_9c3af0ff575761dcd3bd6183dc1a4697/>
</Table>
</VStack>
</Box>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Divider sx={{"color": "#FAC934", "borderWidth": "thin"}}/>
  <Text_34ad5dfe8f798cf543bf2ce0818cfaf6/>
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
  {`Rety.pe - A game of words`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
