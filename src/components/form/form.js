/* eslint-disable no-unused-expressions */
import React,{useState, useEffect} from 'react';
import {Row, Col} from 'reactstrap';
import PriceCounter from '../services/priceCounter';
import TimeCounter from '../services/timeCounter';
import CountdownTime from '../services/countDownTime';
import moment from 'moment';

import './form.scss'

import TextArea from '../textArea/textarea';
import FileLoad from '../fileLoad/fileLoad';
import FileInfo from '../fileInfo/fileInfo';

export default function Form (){
    
      const [email, setEmail] = useState("");
      const [name, setName] = useState("");
      const [text, setText] = useState("");
      const [language, setLanguage] = useState('0');
      const [comment, setComment] = useState("");
      const [fileLoaded, setFileLoaded] = useState(false);
      const [fileInfo, setFileInfo] = useState({});
      const [file, setFile] = useState();
      const [symbolsValue, setSymbolsValue] = useState();
      const [price, setPrice] = useState('0.00');
      const [endDate, setEndDate] = useState('1');

    const textAreaValue = (e) => {
        setText(e.target.value);
        setSymbolsValue(e.target.value.length);
    }

    const langValue = (e) => {
        setLanguage(e.target.value);
    }

    const removeFile = () => {
        setFileLoaded(false);
        setSymbolsValue();
        setFileInfo({});
    }

    const readFile = (e) => {
        const fileIn = e.target.files[0];
        const reader = new FileReader();

       reader.onload = function(event) {

            const res = event.target.result.length;
            setFileLoaded(true);
            setFileInfo({
                fileName: fileIn.name,
                symbols: res,
                type: fileIn.type
            })
            setSymbolsValue(res);
            setFile(fileIn);
      }

      reader.readAsText(fileIn);

      }

    useEffect(() => {
        setPrice(PriceCounter(symbolsValue, language, fileLoaded, fileInfo));
    }, [language, symbolsValue]);

    useEffect(() => {
        let startDatePre = new Date (); 
        let startDate = moment(startDatePre, 'DD/MM/YYYY HH:mm dddd').valueOf();
        let res =  CountdownTime(startDate, TimeCounter(symbolsValue, language, fileLoaded, fileInfo));
        let finishDate = moment(res).format('DD.MM.YYYY об HH:mm');
        setEndDate(finishDate);
    }, [fileInfo.type, fileLoaded, language, symbolsValue]);


      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`
        Email: ${email}
        Name: ${name}
        Text: ${text}
        Lang: ${language}
        Comment: ${comment}
        Price: ${price}
        File: ${file}

        `);
      }
          return (
            <form className="form" onSubmit={handleSubmit}>
                <Row>
                    <Col lg="9">
                        <div className="form__left">
                            <h3>ЗАМОВИТИ РЕДАГУВАННЯ</h3>
                            <p className="form__desk">
                            Виправимо всі помилки, приберемо всі дурниці, перефразуємо невдалі місця, але сильно текст<br/> не переписуватимемо. Зайвих виправлень не буде. Детальніше про редагування
                            </p>

                            <div className="input__row required">
                                <input 
                                    type="text"
                                    name="email" 
                                    value={email} 
                                    onChange={e => setEmail(e.target.value)} 
                                    placeholder="Ваша эл.почта"
                                />
                            </div>

                            <div className="input__row">
                                <input 
                                    type="text" 
                                    name="name"
                                    value={name} 
                                    onChange={e => setName(e.target.value)} 
                                    placeholder="Ваше имя"
                                />
                            </div>

                            <div className="input__row area__row">

                                {!fileLoaded ? <TextArea value={text} textAreaValue={textAreaValue}/> : <FileInfo file={fileInfo} selfRemove={removeFile}/>}     
                                
                                {text.length === 0 && !fileLoaded ? <FileLoad file={readFile}/>: null}
                                
                                <div className="symbols__value" id="symbols__value">{symbolsValue}</div>
                            </div>
                           
                           
                            <div className="lang__row">
                                <h3>МОВА</h3>
                                <div className="radioBtn__item">
                                    <input 
                                        type="radio" 
                                        id="ua"
                                        name="language"
                                        value="ua" 
                                        onClick={langValue} 
                                    />
                                    <label htmlFor="ua">Українська</label>
                                </div>
                                <div className="radioBtn__item">
                                    <input 
                                        type="radio" 
                                        id="ru"
                                        name="language"
                                        value="ru" 
                                        onClick={langValue} 
                                    />
                                    <label htmlFor="ru">Русский</label>
                                </div>
                                <div className="radioBtn__item">
                                    <input 
                                        type="radio" 
                                        id="en"
                                        name="language"
                                        value="en" 
                                        onClick={langValue}
                                    />
                                    <label htmlFor="en">English</label>
                                </div>
                            </div>

                            <div className="input__row">
                                <input 
                                    type="text" 
                                    name="comment"
                                    value={comment} 
                                    onChange={e => setComment(e.target.value)} 
                                    placeholder="Стислий коментар"
                                />
                            </div>

                            
                        </div>
                    </Col>
                    <Col lg="3">
                        <div className="form__right">
                            <div className="price__content">
                            <div className="price">{price === '0.00' ? price + ' грн' : `${price} грн`}</div>
                            <div className="time">{language === '0' || symbolsValue === 0 ? null : `Термін виконання: ${endDate}`}</div>

                                <button type="submit" className="order__btn">Замовити</button>
                            </div>
                        </div>
                    </Col>
                </Row>
                
            </form>
          )
}


