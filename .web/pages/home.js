/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useRef } from "react"
import { Fragment_8aefff3f0dcc4f1c02398cfd8f962bf7, Heading_90693c0783c06a0d4f30e08f2a1c6b32, Link_bfffecc422062882caa95ea6d74a56ae, Text_34ad5dfe8f798cf543bf2ce0818cfaf6 } from "/utils/stateful_components"
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, ButtonGroup, Center, Divider, Flex, Heading, HStack, Image as ChakraImage, Input, Link, Radio, RadioGroup, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import "@radix-ui/themes/styles.css"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getRefValue, getRefValues, refs, set_val } from "/utils/state"
import { DebounceInput } from "react-debounce-input"
import { Theme as RadixThemesTheme } from "@radix-ui/themes"
import NextHead from "next/head"



export function Button_9b6ffba40fd348e3f43199f01e21519f () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_6d8cf83ade716a951865af642f74cf18 = useCallback((_e) => addEvents([Event("state.state.trophy_alert_dialog_hide", {trophy_number:7})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_6d8cf83ade716a951865af642f74cf18} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {`Close`}
</Button>
  )
}

export function Tbody_8b1cae6d07d9f6a4fa65c68629a60125 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Tbody>
  {state__state.words_log_to_show.map((row, index_743211e520cb92243cf71a29353ad65f) => (
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

export function Button_1db8d2931c8fee00e4c13e0a30dd2b51 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_5c562292e6d92baae0d9fcae5be2ee63 = useCallback((_e) => addEvents([Event("state.state.trophy_alert_dialog_hide", {trophy_number:5})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_5c562292e6d92baae0d9fcae5be2ee63} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {`Close`}
</Button>
  )
}

export function Button_ceb21bf84ede9f5d626593ab89991f10 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_9814d38d97bb7560b6f56a3ce494fcbc = useCallback((_e) => addEvents([Event("state.state.trophy_alert_dialog_hide", {trophy_number:4})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_9814d38d97bb7560b6f56a3ce494fcbc} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {`Close`}
</Button>
  )
}

export function Button_3272738935261f27e3ef1eae78350353 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_61a7a6b16f0e51945a8fbf36715d655f = useCallback((_e) => addEvents([Event("state.state.ranking_more_words_button_handler", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_61a7a6b16f0e51945a8fbf36715d655f} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {`More words`}
</Button>
  )
}

export function Alertdialogbody_818710780aca20b1e9bb11ca3049ee26 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <AlertDialogBody>
  {`Trophy 5 - ${state__state.trophies_description[5]}: ${state__state.data["word"]}.
Congratulations!`}
</AlertDialogBody>
  )
}

export function Td_6e42407b0772ad0421dafe7484a8f53f () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Td>
  {state__state.data["ranking"].at(1).at(1)}
</Td>
  )
}

export function Button_26e6b9f60061d271d5d797fa1536bd33 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_c8ace0c8ab4516e592722cd986c6297a = useCallback((_e) => addEvents([Event("state.state.trophy_alert_dialog_hide", {trophy_number:6})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_c8ace0c8ab4516e592722cd986c6297a} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {`Close`}
</Button>
  )
}

export function Alertdialogbody_57603880501e628a411ff3c9befa0684 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <AlertDialogBody>
  {`Trophy 1 - ${state__state.trophies_description[1]}: ${state__state.data["word"]}.
Congratulations!`}
</AlertDialogBody>
  )
}

export function Alertdialog_b9a5afcae1af11ed228c0f73ae503662 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <AlertDialog isOpen={state__state.alert_dialog_show.at(4)}>
  <AlertDialogOverlay>
  <AlertDialogContent>
  <AlertDialogHeader>
  {`New tropy!`}
</AlertDialogHeader>
  <Alertdialogbody_8064042330373463e7098b2451a6282b/>
  <AlertDialogFooter>
  <Button_ceb21bf84ede9f5d626593ab89991f10/>
</AlertDialogFooter>
</AlertDialogContent>
</AlertDialogOverlay>
</AlertDialog>
  )
}

export function Box_1c6081832bd41989cbf16625c4b27fdf () {


  return (
    <Box as={`form`}>
  <VStack>
  <HStack>
  <Button_de3b1e6467d36cab178d4257d6936490/>
  <Button_3272738935261f27e3ef1eae78350353/>
  <Button_12ab2a5570603ef3da34e02b71ccce8f/>
</HStack>
  <HStack>
  <Radiogroup_fcde1d9c0feff9d47a1f08080eba32b1/>
</HStack>
</VStack>
</Box>
  )
}

export function Button_6530c4ec16b5473b25f64152000ff297 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__state = useContext(StateContexts.state__state)

  const on_click_87e53abdf64bb9d120377c7bf58cceb2 = useCallback((_e) => addEvents([Event("state.state.set_button_letter", {value:state__state.data["day_letters"].at(5)})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Button onClick={on_click_87e53abdf64bb9d120377c7bf58cceb2} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {state__state.data["day_letters"].at(5)}
</Button>
  )
}

export function Button_124223245d22e69860379a54e9e2b9f3 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__state = useContext(StateContexts.state__state)

  const on_click_f7e4c777d28932ecc5d6707068fe4626 = useCallback((_e) => addEvents([Event("state.state.set_button_letter", {value:state__state.data["day_letters"].at(2)})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Button onClick={on_click_f7e4c777d28932ecc5d6707068fe4626} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {state__state.data["day_letters"].at(2)}
</Button>
  )
}

export function Alertdialog_f36d841778fa7e9ccd4401f207ff2d8f () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <AlertDialog isOpen={state__state.alert_dialog_show.at(7)}>
  <AlertDialogOverlay>
  <AlertDialogContent>
  <AlertDialogHeader>
  {`New tropy!`}
</AlertDialogHeader>
  <Alertdialogbody_5c113e3a80b639900360e2b7cc9d4cd5/>
  <AlertDialogFooter>
  <Button_9b6ffba40fd348e3f43199f01e21519f/>
</AlertDialogFooter>
</AlertDialogContent>
</AlertDialogOverlay>
</AlertDialog>
  )
}

export function Alertdialogbody_8064042330373463e7098b2451a6282b () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <AlertDialogBody>
  {`Trophy 4 - ${state__state.trophies_description[4]}: ${state__state.data["word"]}.
Congratulations!`}
</AlertDialogBody>
  )
}

export function Button_1410f17b6747b9ac40958790516af6e2 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__state = useContext(StateContexts.state__state)

  const on_click_f9385972f64649bf567401318fe7c474 = useCallback((_e) => addEvents([Event("state.state.set_button_letter", {value:state__state.data["day_letters"].at(1)})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Button onClick={on_click_f9385972f64649bf567401318fe7c474} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {state__state.data["day_letters"].at(1)}
</Button>
  )
}

export function Td_72e64044fdd9d3b9cb1fa6f90477d79c () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Td>
  {state__state.data["ranking"].at(0).at(1)}
</Td>
  )
}

export function Td_722083ef623b887703a1e230400bddc9 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Td>
  {state__state.data["ranking"].at(2).at(1)}
</Td>
  )
}

export function Text_0df8d7b622927d45a78b6ccdfb9d8718 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"color": "#0B3C49", "textAlign": "center"}}>
  <Text_18e6d46f3650cc3d8833bb117d8e5d6e/>
  {state__state.response.at(1).at(1)}
</Text>
  )
}

export function Text_18e6d46f3650cc3d8833bb117d8e5d6e () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text as={`i`}>
  {state__state.response.at(1).at(0)}
</Text>
  )
}

export function Alertdialog_02cfaf5aa58263529ffca506f891becd () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <AlertDialog isOpen={state__state.alert_dialog_show.at(2)}>
  <AlertDialogOverlay>
  <AlertDialogContent>
  <AlertDialogHeader>
  {`New tropy!`}
</AlertDialogHeader>
  <Alertdialogbody_d34a93865d40172f576fa6b36e08f0f4/>
  <AlertDialogFooter>
  <Button_c2e617dd355cd6db7b1d7790c03a2882/>
</AlertDialogFooter>
</AlertDialogContent>
</AlertDialogOverlay>
</AlertDialog>
  )
}

export function Button_c2e617dd355cd6db7b1d7790c03a2882 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_ae2d9c8f60de97fea01ab9ca47360f18 = useCallback((_e) => addEvents([Event("state.state.trophy_alert_dialog_hide", {trophy_number:2})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_ae2d9c8f60de97fea01ab9ca47360f18} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {`Close`}
</Button>
  )
}

export function Alertdialog_21e6aa454f2faf0c2a07ca4f8a95e17d () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <AlertDialog isOpen={state__state.alert_dialog_show.at(1)}>
  <AlertDialogOverlay>
  <AlertDialogContent>
  <AlertDialogHeader>
  {`New tropy!`}
</AlertDialogHeader>
  <Alertdialogbody_57603880501e628a411ff3c9befa0684/>
  <AlertDialogFooter>
  <Button_a2bf148e0782b3d95a6410226d1c4e31/>
</AlertDialogFooter>
</AlertDialogContent>
</AlertDialogOverlay>
</AlertDialog>
  )
}

export function Td_7c334f4e2d2753b2c63a2c9ea50b9e6b () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Td>
  {state__state.data["ranking"].at(4).at(1)}
</Td>
  )
}

export function Radiogroup_fcde1d9c0feff9d47a1f08080eba32b1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__state = useContext(StateContexts.state__state)
  const ref_period = useRef(null); refs['ref_period'] = ref_period;

  const on_change_1af1f2cf4e7c2a82316566e7fed42212 = useCallback((_e0) => addEvents([Event("state.state.set_radio_value", {value:_e0})], (_e0), {}), [addEvents, Event])

  return (
    <RadioGroup id={`period`} onChange={on_change_1af1f2cf4e7c2a82316566e7fed42212} ref={ref_period} sx={{"color": "#0B3C49"}} value={state__state.radio_value}>
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
  )
}

export function Button_da4685725e0d3bb00412a2d33048b7d5 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__state = useContext(StateContexts.state__state)

  const on_click_09b07bdb92403ef8bcc2fbd8be1778dc = useCallback((_e) => addEvents([Event("state.state.set_button_letter", {value:state__state.data["day_letters"].at(0)})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Button onClick={on_click_09b07bdb92403ef8bcc2fbd8be1778dc} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {state__state.data["day_letters"].at(0)}
</Button>
  )
}

export function Td_a308d9740d8da0b185f6f33951336497 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Td>
  {state__state.data["ranking"].at(0).at(0)}
</Td>
  )
}

export function Td_23dfe437d09849d37b5efbc4e58fdd5b () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Td>
  {state__state.data["ranking"].at(3).at(1)}
</Td>
  )
}

export function Td_bef181e4429ae00739d89f5222899270 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Td>
  {state__state.data["ranking"].at(4).at(0)}
</Td>
  )
}

export function Td_2b42f962593a5e9f4d04b4ec07110583 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Td>
  {state__state.data["ranking"].at(1).at(0)}
</Td>
  )
}

export function Debounceinput_ae5af45952eabfed2caca5643fa4aab9 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__state = useContext(StateContexts.state__state)
  const ref_word = useRef(null); refs['ref_word'] = ref_word;

  const on_change_3bf552520863d58da74e9bd2f7691df1 = useCallback((_e0) => addEvents([Event("state.state.set_text_to_show", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={50} element={Input} id={`word`} inputRef={ref_word} onChange={on_change_3bf552520863d58da74e9bd2f7691df1} placeholder={`Enter a word`} type={`text`} value={state__state.compound_text}/>
  )
}

export function Alertdialogbody_5c113e3a80b639900360e2b7cc9d4cd5 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <AlertDialogBody>
  {`Trophy 7 - ${state__state.trophies_description[7]}: ${state__state.data["word"]}.
Congratulations!`}
</AlertDialogBody>
  )
}

export function Button_b97e06f0191f8ad716529e3dffdce9a3 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__state = useContext(StateContexts.state__state)

  const on_click_5ed21a4baec77ada04dc9ebd4c44a66e = useCallback((_e) => addEvents([Event("state.state.set_button_letter", {value:state__state.data["day_letters"].at(4)})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Button onClick={on_click_5ed21a4baec77ada04dc9ebd4c44a66e} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {state__state.data["day_letters"].at(4)}
</Button>
  )
}

export function Alertdialogbody_9f5efda994e5f583456add9ff962f68a () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <AlertDialogBody>
  {`Trophy 6 - ${state__state.trophies_description[6]}: ${state__state.data["word"]}.
Congratulations!`}
</AlertDialogBody>
  )
}

export function Button_d68b1b3a9f52ba1998b64e90495d89c6 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__state = useContext(StateContexts.state__state)

  const on_click_40545b2a727bee01dde212391e730c3f = useCallback((_e) => addEvents([Event("state.state.set_button_letter", {value:state__state.data["day_letters"].at(3)})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Button onClick={on_click_40545b2a727bee01dde212391e730c3f} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {state__state.data["day_letters"].at(3)}
</Button>
  )
}

export function Alertdialog_9d39714e3e2d4171d8211c1563bceca6 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <AlertDialog isOpen={state__state.alert_dialog_show.at(6)}>
  <AlertDialogOverlay>
  <AlertDialogContent>
  <AlertDialogHeader>
  {`New tropy!`}
</AlertDialogHeader>
  <Alertdialogbody_9f5efda994e5f583456add9ff962f68a/>
  <AlertDialogFooter>
  <Button_26e6b9f60061d271d5d797fa1536bd33/>
</AlertDialogFooter>
</AlertDialogContent>
</AlertDialogOverlay>
</AlertDialog>
  )
}

export function Alertdialogbody_d34a93865d40172f576fa6b36e08f0f4 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <AlertDialogBody>
  {`Trophy 2 - ${state__state.trophies_description[2]}: ${state__state.data["word"]}.
Congratulations!`}
</AlertDialogBody>
  )
}

export function Button_a2bf148e0782b3d95a6410226d1c4e31 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_eeca0f4f9b7013a64ab9a9eb951c2690 = useCallback((_e) => addEvents([Event("state.state.trophy_alert_dialog_hide", {trophy_number:1})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_eeca0f4f9b7013a64ab9a9eb951c2690} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {`Close`}
</Button>
  )
}

export function Text_c3d88d1bbaf80d895444c15f9a885be3 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"color": "#0B3C49", "textAlign": "center"}}>
  {state__state.data["points_total"]}
</Text>
  )
}

export function Alertdialog_e3745fa3377fcdf6a18213611fae737a () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <AlertDialog isOpen={state__state.alert_dialog_show.at(5)}>
  <AlertDialogOverlay>
  <AlertDialogContent>
  <AlertDialogHeader>
  {`New tropy!`}
</AlertDialogHeader>
  <Alertdialogbody_818710780aca20b1e9bb11ca3049ee26/>
  <AlertDialogFooter>
  <Button_1db8d2931c8fee00e4c13e0a30dd2b51/>
</AlertDialogFooter>
</AlertDialogContent>
</AlertDialogOverlay>
</AlertDialog>
  )
}

export function Button_12ab2a5570603ef3da34e02b71ccce8f () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_ae9ee883208b37489171d206764f4590 = useCallback((_e) => addEvents([Event("state.state.ranking_longest_word_button_handler", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_ae9ee883208b37489171d206764f4590} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {`Longest word`}
</Button>
  )
}

export function Button_de3b1e6467d36cab178d4257d6936490 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_c48cc16452b8e74fdba179efd24c935a = useCallback((_e) => addEvents([Event("state.state.ranking_top_points_button_handler", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_c48cc16452b8e74fdba179efd24c935a} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {`Top points`}
</Button>
  )
}

export function Button_a8b74ea8217c481d9084b2ec37ca909b () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  const state__state = useContext(StateContexts.state__state)

  const on_click_085c59b18ce82bf588c8207b1f2bf4df = useCallback((_e) => addEvents([Event("state.state.set_button_letter", {value:state__state.data["day_letters"].at(6)})], (_e), {}), [addEvents, Event, state__state])

  return (
    <Button onClick={on_click_085c59b18ce82bf588c8207b1f2bf4df} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {state__state.data["day_letters"].at(6)}
</Button>
  )
}

export function Button_9b722f5902dfd84e27de74d355f68889 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_7b30f0b81789ea0e9e3202ba83653399 = useCallback((_e) => addEvents([Event("state.state.set_text_to_show", {value:``})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_7b30f0b81789ea0e9e3202ba83653399} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}} type={`reset`}>
  {`Reset`}
</Button>
  )
}

export function Td_d98559d83721232a23009881f2584970 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Td>
  {state__state.data["ranking"].at(3).at(0)}
</Td>
  )
}

export function Button_9c205fc76a1fa193f7db846bffeb3cfb () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_a45d39d6c12c03764bf1c63ba3fac987 = useCallback((_e) => addEvents([Event("state.state.trophy_alert_dialog_hide", {trophy_number:3})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_a45d39d6c12c03764bf1c63ba3fac987} sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}}>
  {`Close`}
</Button>
  )
}

export function Box_5a3ce2d3df88d6b8e41afa90a4210a54 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  
    const handleSubmit_21f580a637556567ea31f1741516089c = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{"word": getRefValue(refs['ref_word'])}}

        addEvents([Event("state.state.submit_word_handler", {form_data:form_data})])

        if (false) {
            $form.reset()
        }
    })
    


  return (
    <Box as={`form`} onSubmit={handleSubmit_21f580a637556567ea31f1741516089c}>
  <VStack>
  <Debounceinput_ae5af45952eabfed2caca5643fa4aab9/>
  <HStack>
  <Button sx={{"display": "block", "padding": "0.5em", "borderRadius": "0.8em", "bg": "#FAC934", "color": "#0B3C49"}} type={`submit`}>
  {`Submit`}
</Button>
  <Button_9b722f5902dfd84e27de74d355f68889/>
</HStack>
</VStack>
</Box>
  )
}

export function Text_3382c290a5dfe765570d5f7373b8f92c () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"color": "#0B3C49", "textAlign": "center"}}>
  {state__state.response.at(0)}
</Text>
  )
}

export function Alertdialogbody_9bcfd4344d3ce3c15dd3dccdf74f72f2 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <AlertDialogBody>
  {`Trophy 3 - ${state__state.trophies_description[3]}: ${state__state.data["word"]}.
Congratulations!`}
</AlertDialogBody>
  )
}

export function Alertdialog_45174d677b49db370ad5188b84e8b0b4 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <AlertDialog isOpen={state__state.alert_dialog_show.at(3)}>
  <AlertDialogOverlay>
  <AlertDialogContent>
  <AlertDialogHeader>
  {`New tropy!`}
</AlertDialogHeader>
  <Alertdialogbody_9bcfd4344d3ce3c15dd3dccdf74f72f2/>
  <AlertDialogFooter>
  <Button_9c205fc76a1fa193f7db846bffeb3cfb/>
</AlertDialogFooter>
</AlertDialogContent>
</AlertDialogOverlay>
</AlertDialog>
  )
}

export function Td_d798ff2a43bf3121db8ac8d0b840dd82 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Td>
  {state__state.data["ranking"].at(2).at(0)}
</Td>
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
  <Flex align={`stretch`} justify={`center`} wrap={`wrap`}>
  <Flex align={`stretch`} direction={`row-reverse`} grow={`1`} justify={`center`} wrap={`wrap`}>
  <Box sx={{"flexGrow": "1", "alignItems": "center", "width": ["350px", "600px", "400px", "250px"], "margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Center sx={{"height": "50vh"}}>
  <VStack>
  <Center>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Heading sx={{"fontSize": "2em", "color": "#0B3C49", "textAlign": "center"}}>
  {`Today's letters are:`}
</Heading>
  <Spacer/>
  <ButtonGroup>
  <Button_da4685725e0d3bb00412a2d33048b7d5/>
  <Button_1410f17b6747b9ac40958790516af6e2/>
  <Button_124223245d22e69860379a54e9e2b9f3/>
  <Button_d68b1b3a9f52ba1998b64e90495d89c6/>
  <Button_b97e06f0191f8ad716529e3dffdce9a3/>
  <Button_6530c4ec16b5473b25f64152000ff297/>
  <Button_a8b74ea8217c481d9084b2ec37ca909b/>
</ButtonGroup>
</Box>
</Center>
  <Spacer/>
  <Box_5a3ce2d3df88d6b8e41afa90a4210a54/>
  <Spacer/>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <VStack>
  <Text_3382c290a5dfe765570d5f7373b8f92c/>
  <Spacer/>
  <Text_0df8d7b622927d45a78b6ccdfb9d8718/>
</VStack>
</Box>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Alertdialog_f36d841778fa7e9ccd4401f207ff2d8f/>
</Box>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Alertdialog_9d39714e3e2d4171d8211c1563bceca6/>
</Box>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Alertdialog_e3745fa3377fcdf6a18213611fae737a/>
</Box>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Alertdialog_b9a5afcae1af11ed228c0f73ae503662/>
</Box>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Alertdialog_45174d677b49db370ad5188b84e8b0b4/>
</Box>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Alertdialog_02cfaf5aa58263529ffca506f891becd/>
</Box>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Alertdialog_21e6aa454f2faf0c2a07ca4f8a95e17d/>
</Box>
</VStack>
</Center>
</Box>
  <Box sx={{"borderWidth": "medium", "width": ["350px", "350px", "350px", "250px"], "margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <VStack>
  <Heading sx={{"color": "#0B3C49", "textAlign": "center", "fontSize": "1.5em"}}>
  {`Your points`}
</Heading>
  <Text_c3d88d1bbaf80d895444c15f9a885be3/>
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
  <Tbody_8b1cae6d07d9f6a4fa65c68629a60125/>
</Table>
</TableContainer>
</Box>
</Box>
</Flex>
  <Box sx={{"borderWidth": "medium", "width": "350px", "margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Heading sx={{"color": "#0B3C49", "textAlign": "center", "fontSize": "1.5em"}}>
  {`Ranking top players`}
</Heading>
</Box>
  <Box sx={{"margin": "0.5em", "borderRadius": "lg", "borderColor": "#FAC934"}}>
  <Box_1c6081832bd41989cbf16625c4b27fdf/>
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
  <Td_a308d9740d8da0b185f6f33951336497/>
  <Td_72e64044fdd9d3b9cb1fa6f90477d79c/>
</Tr>
  <Tr>
  <Td>
  {`2`}
</Td>
  <Td_2b42f962593a5e9f4d04b4ec07110583/>
  <Td_6e42407b0772ad0421dafe7484a8f53f/>
</Tr>
  <Tr>
  <Td>
  {`3`}
</Td>
  <Td_d798ff2a43bf3121db8ac8d0b840dd82/>
  <Td_722083ef623b887703a1e230400bddc9/>
</Tr>
  <Tr>
  <Td>
  {`4`}
</Td>
  <Td_d98559d83721232a23009881f2584970/>
  <Td_23dfe437d09849d37b5efbc4e58fdd5b/>
</Tr>
  <Tr>
  <Td>
  {`5`}
</Td>
  <Td_bef181e4429ae00739d89f5222899270/>
  <Td_7c334f4e2d2753b2c63a2c9ea50b9e6b/>
</Tr>
</Tbody>
</Table>
</TableContainer>
</Box>
</Box>
</Flex>
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
