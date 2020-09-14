
const PriceCounter = (symbolsValue = null, language ='0', fileLoaded = false, fileInfo={}) => {
    let price;
    switch (true) {
        case (symbolsValue === 0):
            price = 0;
            break;
        case (language.includes('0')):
            price = 0;
            break;
        case (symbolsValue > 1000 && language.includes('en')):
            price = symbolsValue * 0.12;
            break;
        case (symbolsValue > 1000 && !language.includes('en')):
                price = symbolsValue * 0.05;
                break;
        case (symbolsValue < 1000 && language.includes('en')):
            price = 120;
            break;
        case (symbolsValue < 1000 && !language.includes('en')):
            price = 50;
            break;

        default:
            price = 0;
            break;
    }

    if (fileLoaded && !(fileInfo.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || fileInfo.type === 'application/msword' || fileInfo.type === 'application/rtf')) {
        price = price * 1.20;
    }
    
    return price.toFixed(2);
}

export default PriceCounter;