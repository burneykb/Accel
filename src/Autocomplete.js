import { useState } from "react";
import { NoteLUT } from './Note'
import { useStagedNotesUpdate } from './StagedNotesContext'


const suggestions = Object.keys(NoteLUT)

const AutoComplete = () => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");
    const [previewSrc, setPreviewSrc] = useState("")

    const updateStagedNotes = useStagedNotesUpdate()


    const SuggestionsListComponent = () => {
        return filteredSuggestions.length ? (
            <ul className="suggestions">
                {filteredSuggestions.map((suggestion, index) => {
                    let className;
                    // Flag the active suggestion with a class
                    if (index === activeSuggestionIndex) {
                        className = "suggestion-active";
                    }
                    return (
                        <li className={className} key={suggestion} onClick={onClick}>
                            {suggestion}
                        </li>
                    );
                })}
            </ul>
        ) : (
                <div className="no-suggestions">
                    <em>This is not a valid option</em>
                </div>
            );
    };

    const onChange = (e) => {
        const userInput = e.target.value;

        // Filter our suggestions that don't contain the user's input
        const unLinked = suggestions.filter(
            (suggestion) =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) === 0
        );

        setInput(userInput);
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
        setPreviewSrc(NoteLUT[userInput])
    };

    const onClick = (e) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
        setPreviewSrc(NoteLUT[e.target.innerText])
    };

    const onKeyDown = (e) => {
        // User pressed the enter key
        if (e.keyCode === 13) {
            const currSuggestion = filteredSuggestions[activeSuggestionIndex]
            setInput(currSuggestion);
            // setActiveSuggestionIndex(0);
            setShowSuggestions(false);
            console.log(currSuggestion)
            if (NoteLUT[currSuggestion]) {
                updateStagedNotes(NoteLUT[currSuggestion])
            }
            setInput("")
            e.preventDefault()
            setPreviewSrc("")
            document.getElementById("input-text").focus()
        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
            if (activeSuggestionIndex === 0) {
                return;
            }

            const newIndex = activeSuggestionIndex - 1

            setActiveSuggestionIndex(newIndex);
            setPreviewSrc(NoteLUT[filteredSuggestions[newIndex]])
        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
            if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
                return;
            }

            const newIndex = activeSuggestionIndex + 1

            setActiveSuggestionIndex(newIndex);
            setPreviewSrc(NoteLUT[filteredSuggestions[newIndex]])
        }
    };

    return (
        <>
        {/* <div className="searchDiv"> */}

            <form>
                <input
                    type="text"
                    id="input-text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={input}
                />
            </form>
            {showSuggestions && input && <SuggestionsListComponent />}
           
        {/* </div> */}
        <img className="images" src={previewSrc} alt="" />
        </>
    );
};
export default AutoComplete;