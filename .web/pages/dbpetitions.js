/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useRef } from "react"
import { Fragment_8aefff3f0dcc4f1c02398cfd8f962bf7, Heading_90693c0783c06a0d4f30e08f2a1c6b32, Link_bfffecc422062882caa95ea6d74a56ae, Text_34ad5dfe8f798cf543bf2ce0818cfaf6 } from "/utils/stateful_components"
import { Box, Button, Center, Divider, HStack, Image as ChakraImage, Input, Link, option, Select, Spacer, Table, Tbody, Td, Text, Tr, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "@radix-ui/themes/styles.css"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getRefValue, getRefValues, refs, set_val } from "/utils/state"
import { DebounceInput } from "react-debounce-input"
import { Theme as RadixThemesTheme } from "@radix-ui/themes"
import NextHead from "next/head"



export function Input_c20db5e92043a9f1a70dc9f40d66ac57 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_ab314632a81f65305993e131b535f9fc = useCallback((_e0) => addEvents([Event("state.state.set_db_petition_password_entered", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <Input onChange={on_change_ab314632a81f65305993e131b535f9fc} placeholder={`Enter the db password`} type={`password`}/>
  )
}

export function Button_dbef6c1f4da5be717b1908626ac20f15 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_9790b78dd69943bbf2d23e3181fdcc4b = useCallback((_e) => addEvents([Event("state.state.set_db_petition_query", {value:``})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_9790b78dd69943bbf2d23e3181fdcc4b} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}} type={`reset`}>
  {`Reset`}
</Button>
  )
}

export function Box_ab0828e7fd4c738703c38f6bbf24376a () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  
    const handleSubmit_5b2fa017e0582d3eb92170519e2d0eb8 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{"query": getRefValue(refs['ref_query'])}}

        addEvents([Event("state.state.submit_dbpetition_handler", {form:form_data})])

        if (false) {
            $form.reset()
        }
    })
    


  return (
    <Box as={`form`} onSubmit={handleSubmit_5b2fa017e0582d3eb92170519e2d0eb8}>
  <VStack>
  <Debounceinput_11dbc24822baba3834a5e5f8e23fea35/>
  <Select_bdbd524bfe56fd968d5bd89f49cf746f/>
  <Input_c20db5e92043a9f1a70dc9f40d66ac57/>
  <HStack>
  <Button sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}} type={`submit`}>
  {`Submit`}
</Button>
  <Button_dbef6c1f4da5be717b1908626ac20f15/>
</HStack>
</VStack>
</Box>
  )
}

export function Text_923da0f7c96f368de0fed6544985b2e2 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"color": "#0B3C49", "textAlign": "center"}}>
  {state__state.db_petition_warning_message}
</Text>
  )
}

export function Tbody_95a368cbdfb5e6d1ea05a99e47a3d5fe () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Tbody>
  {state__state.db_petition_output.map((row, index_743211e520cb92243cf71a29353ad65f) => (
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

export function Debounceinput_11dbc24822baba3834a5e5f8e23fea35 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__state = useContext(StateContexts.state__state)
  const ref_query = useRef(null); refs['ref_query'] = ref_query;

  const on_change_8257e5e334379f4bcdb19f907005206e = useCallback((_e0) => addEvents([Event("state.state.set_db_petition_query", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={50} element={Input} id={`query`} inputRef={ref_query} onChange={on_change_8257e5e334379f4bcdb19f907005206e} placeholder={`Enter a valid query`} type={`text`} value={state__state.db_petition_query}/>
  )
}

export function Select_bdbd524bfe56fd968d5bd89f49cf746f () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_8257e5e334379f4bcdb19f907005206e = useCallback((_e0) => addEvents([Event("state.state.set_db_petition_query", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <Select onChange={on_change_8257e5e334379f4bcdb19f907005206e} placeholder={`Select a query`}>
  <option value={`SELECT * FROM words`}>
  {`SELECT * FROM words`}
</option>
  <option value={`SELECT * FROM players`}>
  {`SELECT * FROM players`}
</option>
  <option value={`SELECT * FROM words ORDER BY date_creation DESC`}>
  {`SELECT * FROM words ORDER BY date_creation DESC`}
</option>
  <option value={`
                        SELECT p.id, p.name, o.date_creation, o.word, o.no_letters, o.points
                        FROM players AS p
                        INNER JOIN words AS o
                            ON p.id = o.player_id
                        ORDER BY o.date_creation DESC
                    `}>
  {`
                        SELECT p.id, p.name, o.date_creation, o.word, o.no_letters, o.points
                        FROM players AS p
                        INNER JOIN words AS o
                            ON p.id = o.player_id
                        ORDER BY o.date_creation DESC
                    `}
</option>
</Select>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_8aefff3f0dcc4f1c02398cfd8f962bf7/>
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
  <Box sx={{"flexGrow": "1", "alignItems": "center", "margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Center>
  <VStack>
  <Box_ab0828e7fd4c738703c38f6bbf24376a/>
  <Spacer/>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <VStack>
  <Text_923da0f7c96f368de0fed6544985b2e2/>
  <Table sx={{"textAlign": "center"}}>
  <Tbody_95a368cbdfb5e6d1ea05a99e47a3d5fe/>
</Table>
</VStack>
</Box>
</VStack>
</Center>
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
