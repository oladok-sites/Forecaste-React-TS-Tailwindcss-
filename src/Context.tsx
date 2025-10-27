import { createContext } from "react";
import type { GlobalContextType } from "./types/types";

const Context = createContext<GlobalContextType | null>(null)

export default Context