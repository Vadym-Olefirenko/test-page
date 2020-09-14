const TimeCounter = (symbolsValue = null, language="0", fileLoaded = false, fileInfo = {}) => {
    let time;
    const HOUR = 60 * 60 * 1000; // ms
    const HALF_HOUR = HOUR / 2; // ms
    switch (true) {
        case (language.includes('0')):
            time = 0;
            break;
        case (symbolsValue >= 333 && language.includes('en')):
            time = HALF_HOUR + (symbolsValue / 333) * 3600 * 1000;
            break;
        case (symbolsValue >= 1000 && !language.includes('en')):
                time = HALF_HOUR + (symbolsValue / 1333) * 3600 * 1000;   
                break;
        case (symbolsValue < 333 && language.includes('en')):
            time = HOUR;
            break;
        case (symbolsValue < 1000 && !language.includes('en')):
            time = HOUR;
            break;

        default:
            time = 0;
            break;
    }

    if (fileLoaded && !(fileInfo.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || fileInfo.type === 'application/msword' || fileInfo.type === 'application/rtf')) {
        time = time * 1.20;
    }
    
    return time;
}

export default TimeCounter;

