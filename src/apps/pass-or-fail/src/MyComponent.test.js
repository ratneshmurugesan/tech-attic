import React from 'react';
import { 
    shallow, 
    mount } from 'enzyme';
// import fn from 'jest';

import "./setupTests";

import { MyComponent} from './MyComponent';

const clickFn = jest.fn();
// const mockTryGetValue = jest.fn(() => false);
// const mockTrySetValue = jest.fn(); 
 
// jest.mock('save-to-storage', () => ({   
//   SaveToStorage: jest.fn().mockImplementation(() => ({
//     tryGetValue: mockTryGetValue,
//     trySetValue: mockTrySetValue,
//   })), 
// }));
describe('MyComponent', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<MyComponent debug />);
        expect(component).toMatchSnapshot();
    });
    it('should render correctly', () => {
        const component = shallow(<MyComponent />);
        expect(component).toMatchSnapshot();
    });
    it('should render with child "button" to trigger EVENTS', () => {
        const list = { one: '1', 'two': '2' };
        const component = mount(<MyComponent list={list} />);
        component.find('button#button-one').simulate('keydown', { keyCode: 32 }); // Interacting with child using mount
        expect(component).toMatchSnapshot();
        component.unmount();
    });
    it('should simulate click event using MOCK functions', () => {
        // console.log('clickFn', clickFn);
        const component = shallow(<MyComponent onClick={clickFn} />);
        component.find('button#button-one').simulate('click');

        expect(clickFn).toHaveBeenCalled();
        component.unmount();
    });
    // it('should set storage on save button click', () => {
    //     mockTryGetValue.mockReturnValueOnce(true);
    //     const component = mount(<MyComponent />); 
    //     component.find('button#my-button-three').simulate('click');
    //     expect(mockTryGetValue).toHaveBeenCalled();
    //     console.log(component.debug())
    //     expect(component).toMatchSnapshot();
    //     component.unmount();   
    //   }); 
});
