import Autocomplete from "./Autocomplete";
import Staging from "./Staging"
import "./styles.css";
import { StagedNotesProvider } from './StagedNotesContext'
import { useEffect, createRef } from "react"
import { useScreenshot } from 'use-react-screenshot'
import { copyImageToClipboard } from 'copy-image-clipboard'
import Mousetrap from 'mousetrap'

function App() {
    const ref = createRef(null)
    const [image, takeScreenshot] = useScreenshot()
    const getImage = () => takeScreenshot(ref.current)

    useEffect(() => {
        if (image) {
            copyImageToClipboard(image)
                .then(() => {
                    console.log('Image Copied')
                })
                .catch((e) => {
                    console.log('Error: ', e.message)
                })
        }
    }, [image])

    Mousetrap.bind('ctrl+c', function(e) {
        getImage()
            document.getElementById("input-text").focus()
        return false
    })

    return (
        <>
            <StagedNotesProvider>
                <div ref={ref}>
                    <Staging />
                </div>
                <Autocomplete />
            </StagedNotesProvider>
        </>
    )
}

export default App;
