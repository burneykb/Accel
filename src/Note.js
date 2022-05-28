const extensionPostfix = ".png"
const notesPath = "./img/Notation_library/Notes/"
const restsPath = "./img/Notation_library/Rests/"
const barlinesPath = "./img/Notation_library/Barlines/"

const quarterNotesPrefix = notesPath.concat("Quarters/Quarter")
const eighthNotesPrefix = notesPath.concat("Eighths/Eighth")
const sixteenthNotesPrefix = notesPath.concat("Sixteenths/Sixteenth")
const halfNotesPrefix = notesPath.concat("Halfs/Half")
const wholeNotesPrefix = notesPath.concat("Whole/Whole")
const groupNotesPrefix = notesPath.concat("Groups/Group")

const NoteLUT = {
    // Whole Notes
    w: wholeNotesPrefix.concat(extensionPostfix),

    // Half Notes
    h: halfNotesPrefix.concat(extensionPostfix),
    hd: halfNotesPrefix.concat("_dotted", extensionPostfix),

    // Quarter Notes
    q: quarterNotesPrefix.concat(extensionPostfix),
    qd: quarterNotesPrefix.concat("_dotted", extensionPostfix),

    // Eighth Notes
    e: eighthNotesPrefix.concat(extensionPostfix),
    ed: eighthNotesPrefix.concat("_dotted", extensionPostfix),
    ee: eighthNotesPrefix.concat("_2_joined", extensionPostfix),
    eee: eighthNotesPrefix.concat("_3_joined", extensionPostfix),
    eeee: eighthNotesPrefix.concat("_4_joined", extensionPostfix),
    
    // Sixteenth Notes
    /* TODO: Make s */
    ss: sixteenthNotesPrefix.concat("_2_joined", extensionPostfix),
    /* TODO: Make sss */
    ssss: sixteenthNotesPrefix.concat("_4_joined", extensionPostfix),
    ssssss: sixteenthNotesPrefix.concat("_6_joined", extensionPostfix),

    // Grouped Notes
    ess: groupNotesPrefix.concat("_3", extensionPostfix),
    sse: groupNotesPrefix.concat("_2", extensionPostfix),
    ses: groupNotesPrefix.concat("_1", extensionPostfix),

    // Rest Notes
    wr: restsPath.concat("Whole_rest", extensionPostfix),
    hr: restsPath.concat("Half_rest", extensionPostfix),
    qr: restsPath.concat("Quarter_rest", extensionPostfix),
    qdr: restsPath.concat("Quarter_dotted_rest", extensionPostfix),
    er: restsPath.concat("Eighth_rest", extensionPostfix),
    sr: restsPath.concat("Sixteenth_rest", extensionPostfix),
    
    // Barlines
    b: barlinesPath.concat("Barline", extensionPostfix),
    bd: barlinesPath.concat("Barline_double", extensionPostfix),
    bf: barlinesPath.concat("Barline_final", extensionPostfix),
    rs: barlinesPath.concat("Repeat_start", extensionPostfix),
    rf: barlinesPath.concat("Repeat_finish", extensionPostfix),
}

export { NoteLUT };