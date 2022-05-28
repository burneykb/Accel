import React from "react";
import { v4 } from "uuid"
import { useStagedNotes } from './StagedNotesContext'



const Staging = () => {
    const stagedNotes = useStagedNotes()

    return (
        <div className="stagedNotes">
            {stagedNotes && stagedNotes.map(note =>
                <div className="stagedNote" key={v4()}>
                    <img src={note} alt="" ></img>
                </div>
            )}
        </div>
    );
};
export default Staging;