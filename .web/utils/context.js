import { createContext } from "react"
import { Event, hydrateClientStorage } from "/utils/state.js"

export const initialState = {"compound_text": "a", "day_letters": ["a", "b", "c", "d", "e", "f", "g", "h"], "index": 0, "is_hydrated": false, "text_to_show": ""}
export const StateContext = createContext(null);
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}
export const initialEvents = [
    Event('state.hydrate', hydrateClientStorage(clientStorage)),
]