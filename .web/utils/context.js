import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.state": {"alert_dialog_show": [false, false, false, false, false, false, false, false], "button_letter": "", "compound_text": "", "cookies_to_data": null, "data": {"day_letters": ["u", "n", "a", "o", "v", "b", "w"], "definition": "", "global_values_today": [0, 0, 0.0], "player_name": "", "player_id": "0", "points_total": 0, "ranking": [["No player", 0], ["No player", 0], ["No player", 0], ["No player", 0], ["No player", 0]], "stats": [[2, 0, 0], [3, 0, 0], [4, 0, 0], [5, 0, 0], [6, 0, 0], [7, 0, 0], [8, 0, 0]], "trophies_earned": [], "word": "", "words_log": [], "word_status": ""}, "date_today": "10 January 2024", "db_petition_output": [], "db_petition_password": "tartadequeso", "db_petition_password_entered": "", "db_petition_query": "", "db_petition_warning_message": "", "form_data": {}, "global_values_today_to_show": ["0", "0", "0.00"], "player_id_cookie": "", "player_name_cookie": "", "query_db_petition": "", "radio_value": "Day", "response": ["", ""], "select_db_petition": true, "stats_to_show": [[2, 0, 0, "0.00 %"], [3, 0, 0, "0.00 %"], [4, 0, 0, "0.00 %"], [5, 0, 0, "0.00 %"], [6, 0, 0, "0.00 %"], [7, 0, 0, "0.00 %"], [8, 0, 0, "0.00 %"]], "text_player_name_input": "", "text_to_show": "", "trophies_description": {"1": "Discover a word for the first time today", "2": "Discover a word for the first time ever", "3": "Discover the longest word of a day", "4": "Discover the longest word so far ever", "5": "Discover a word using all available letters", "6": "Discover a word using all the vowels", "7": "Discover the word retype", "8": "Discover 10 2-letters words", "9": "Discover 25 2-letters words", "10": "Discover 50 2-letters words", "11": "Discover 100 2-letters words", "12": "Discover 10 3-letters words", "13": "Discover 25 3-letters words", "14": "Discover 50 3-letters words", "15": "Discover 100 3-letters words", "16": "Discover 10 4-letters words", "17": "Discover 25 4-letters words", "18": "Discover 50 4-letters words", "19": "Discover 100 4-letters words", "20": "Discover 10 5-letters words", "21": "Discover 25 5-letters words", "22": "Discover 50 5-letters words", "23": "Discover 100 5-letters words", "24": "Discover 10 6-letters words", "25": "Discover 25 6-letters words", "26": "Discover 50 6-letters words", "27": "Discover 100 6-letters words", "28": "Discover 10 7-letters words", "29": "Discover 25 7-letters words", "30": "Discover 50 7-letters words", "31": "Discover 100 7-letters words", "32": "Discover 10 8-letters words", "33": "Discover 25 8-letters words", "34": "Discover 50 8-letters words", "35": "Discover 100 8-letters words", "36": "Discover a word for the first time today", "37": "Discover a word for the first time ever", "38": "Discover the longest word of a day", "39": "Discover the longest word so far ever", "40": "Discover a word using all available letters", "41": "Discover a word using all the vowels", "42": "Discover the word retype", "43": "Discover 10 2-letters words", "44": "Discover 25 2-letters words", "45": "Discover 50 2-letters words", "46": "Discover 100 2-letters words", "47": "Discover 10 3-letters words", "48": "Discover 25 3-letters words", "49": "Discover 50 3-letters words", "50": "Discover 100 3-letters words", "51": "Discover 10 4-letters words", "52": "Discover 25 4-letters words", "53": "Discover 50 4-letters words", "54": "Discover 100 4-letters words", "55": "Discover 10 5-letters words", "56": "Discover 25 5-letters words", "57": "Discover 50 5-letters words", "58": "Discover 100 5-letters words", "59": "Discover 10 6-letters words", "60": "Discover 25 6-letters words", "61": "Discover 50 6-letters words", "62": "Discover 100 6-letters words", "63": "Discover 10 7-letters words", "64": "Discover 25 7-letters words", "65": "Discover 50 7-letters words", "66": "Discover 100 7-letters words", "67": "Discover 10 8-letters words", "68": "Discover 25 8-letters words", "69": "Discover 50 8-letters words", "70": "Discover 100 8-letters words"}, "trophies_to_show": [], "trophy_description_to_show": "", "trophy_number_to_show": 0, "words_log_to_show": []}}

export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {"state.state.player_name_cookie": {"name": "player_name_cookie", "path": "/", "maxAge": 34560000.0, "sameSite": "lax"}, "state.state.player_id_cookie": {"name": "player_id_cookie", "path": "/", "maxAge": 34560000.0, "sameSite": "lax"}}, "local_storage": {}}

export const onLoadInternalEvent = () => [Event('state.on_load_internal')]

export const initialEvents = () => [
    Event('state.hydrate', hydrateClientStorage(clientStorage)),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectError] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectError]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [state, dispatch_state] = useReducer(applyDelta, initialState["state"])
  const [state__state, dispatch_state__state] = useReducer(applyDelta, initialState["state.state"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.state": dispatch_state__state,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__state.Provider value={ state__state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__state.Provider>
    </StateContexts.state.Provider>
  )
}