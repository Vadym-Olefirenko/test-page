import React from 'react';

const FileLoad = (props) => {

    return(
        <label className="file__loader" htmlFor="file">
            завантажте файл
            <input 
                    id="file"
                    type="file" 
                    name="file"
                    onChange={props.file}
                    placeholder="Ваше имя"
                    accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel,application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, .rtf, .txt, .pdf, .zip"
                />
        </label>
    )
}

export default FileLoad;