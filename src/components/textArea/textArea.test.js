import React from 'react';
import TextArea from '../textArea/textarea';
import {create, act} from 'react-test-renderer';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Testing textarea value', () => {
    test('Value', () => {
        const textFieald = shallow(<TextArea />);
        
        expect(textFieald.debug()).toMatchSnapshot();
      
    });

    test('Value', () => {
        const textFieald = shallow(<TextArea value="aaaaa"/>);
        
        expect(textFieald.debug()).toMatchSnapshot();
       
    });

});

