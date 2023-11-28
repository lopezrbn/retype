import { createContext, useState } from "react"
import { Event, hydrateClientStorage, useEventLoop } from "/utils/state.js"

export const initialState = {"alert_dialog_show": false, "button_letter": "", "compound_text": "", "cookies_to_data": null, "data": {"day_letters": ["j", "x", "i", "v", "o", "k", "n"], "player_name": "", "player_id": "0", "words_log": [], "points_total": 0, "stats": [[2, 0, 0], [3, 0, 0], [4, 0, 0], [5, 0, 0], [6, 0, 0], [7, 0, 0], [8, 0, 0]], "global_values_today": [0, 0, 0.0], "ranking": [["No player", 0], ["No player", 0], ["No player", 0], ["No player", 0], ["No player", 0]], "word_status": "", "trophies": {"1": {"id": 1, "description": "Discover a word for the first time", "achieved": false, "word": "", "date": ""}, "2": {"id": 2, "description": "Discover the longest word so far", "achieved": false, "word": "", "date": ""}, "3": {"id": 3, "description": "Discover a word using all available letters", "achieved": false, "word": "", "date": ""}}}, "date_today": "29 November 2023", "db_petition_output": [], "form_data": {}, "global_values_today_to_show": ["0", "0", "0.00"], "is_hydrated": false, "player_id_cookie": "", "player_name_cookie": "", "query_db_petition": "", "radio_value": "Day", "response": "", "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}, "select_db_petition": true, "stats_to_show": [[2, 0, 0, "0.00 %"], [3, 0, 0, "0.00 %"], [4, 0, 0, "0.00 %"], [5, 0, 0, "0.00 %"], [6, 0, 0, "0.00 %"], [7, 0, 0, "0.00 %"], [8, 0, 0, "0.00 %"]], "text_player_name_input": "", "text_to_show": "", "trophies_to_show": [[1, "Discover a word for the first time", "No", "-", "-"], [2, "Discover the longest word so far", "No", "-", "-"], [3, "Discover a word using all available letters", "No", "-", "-"]], "trophy_description_to_show": "", "trophy_number_to_show": 0, "words_log_to_show": []}

export const ColorModeContext = createContext(null);
export const StateContext = createContext(null);
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {"state.player_name_cookie": {"name": "player_name_cookie", "path": "/", "maxAge": 34560000.0, "sameSite": "lax"}, "state.player_id_cookie": {"name": "player_id_cookie", "path": "/", "maxAge": 34560000.0, "sameSite": "lax"}}, "local_storage": {}}

export const initialEvents = () => [
    Event('state.hydrate', hydrateClientStorage(clientStorage)),
]

export const isDevMode = true

export function EventLoopProvider({ children }) {
  const [state, addEvents, connectError] = useEventLoop(
    initialState,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectError]}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </EventLoopContext.Provider>
  )
}