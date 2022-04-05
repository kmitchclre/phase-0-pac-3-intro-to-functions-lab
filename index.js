// function shout(string) {
//     return string.toUpperCase();
// }

// function whisper(string) {
//     return string.toLowerCase();
// }

// function logShout(string) {
//     const spy = string.toUpperCase();
//     return;
// }
// console.log(logShout('HELLO'));

function shout(aWord) {
    return aWord.toUpperCase();
}

function whisper(aWord) {
    return aWord.toLowerCase();
}

function logShout(aWord) {
    console.log(aWord.toUpperCase());
}

function logWhisper(aWord) {
    console.log(aWord.toLowerCase());
}

function sayHiToHeadphonedRoommate(aWord) {
    const cantAnswer = 'I can\'t hear you!'
    const yesAnswer = "YES INDEED!";
    const makePlan = "I would love to!";
    if (aWord.toLowerCase(aWord) === aWord) {
        return cantAnswer;
    }
    else if (aWord.toUpperCase(aWord) === aWord) {
        return yesAnswer;
    }
    else if ("Let's have dinner together!" === aWord) {
        return makePlan;
    }
}