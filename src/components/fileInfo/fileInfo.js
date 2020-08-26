import React from 'react';

import './fileInfo.scss'

const FileInfo = (props) => {
    const {file} = props;
    return (
        <div className="file__info">
            <h6 className="file__name">
                {file.fileName}
            </h6>
            <div className="file__symbols-value">
                {`Количество символов: ${file.symbols}`}
            </div>

            <button 
                id="removeFile" 
                className="remove__file"
                onClick={props.selfRemove}
            >
                    Інший файл
            </button>
        </div>
    )
}

export default FileInfo;