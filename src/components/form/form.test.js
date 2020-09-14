import React from 'react';
import Form from './form.js';
import TextArea from '../textArea/textarea';
import {create, act} from 'react-test-renderer';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('Testing Form', () => {
    test('Form rendered', () => {
        const FormTest = mount(<Form/>).debug();
        expect(FormTest).toMatchSnapshot();
    });
});





