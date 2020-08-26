import React from 'react';

const TextArea = (props) => {
    return (
        <textarea 
            value={props.value} 
            onChange={props.textAreaValue}
            name="text" 
            placeholder="Введіть текст або  "
        />
    )
}

export default TextArea;