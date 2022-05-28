import React, { useContext, useState } from 'react'

const StagedNotesContext = React.createContext()
const StagedNotesUpdateContext = React.createContext()

export function useStagedNotes() {
    return useContext(StagedNotesContext)
}

export function useStagedNotesUpdate() {
    return useContext(StagedNotesUpdateContext)
}

export function StagedNotesProvider({ children }) {
    const [stagedNotes, setStagedNotes] = useState(["./img/Notation_library/Barlines/Barline.png"])

    function updateStagedNotes(newNote) {
        console.log(newNote)
        setStagedNotes([...stagedNotes, newNote])
    }

    return (
        <StagedNotesContext.Provider value={stagedNotes}>
            <StagedNotesUpdateContext.Provider value={updateStagedNotes}>
                {children}
            </StagedNotesUpdateContext.Provider>
        </StagedNotesContext.Provider>
    )
}