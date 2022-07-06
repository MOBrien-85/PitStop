import { InterstatesList } from "./InterstatesList"
import { InterstateSearch } from "./InterstateSearch"
import { useState } from "react"

export const InterstateContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <InterstateSearch setterFunction={setSearchTerms} />
        <InterstatesList searchTermState={searchTerms} />
    </>
} 