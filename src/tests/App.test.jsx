import React from 'react';
import { shallow } from 'enzyme';
import { describe, expect, test } from '@jest/globals';
import '@testing-library/jest-dom';
import App from '../App';

describe('Test to the component <App />', () => {
    test('The component <App /> should render propertly', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});
