import React, { Children } from 'react'
import Adapter from 'enzyme-adapter-react-16';
// import { mount } from 'enzyme'

import Accordion from './Accordion.jsx'
import { configure, mount } from 'enzyme';
import { OmitProps } from 'antd/lib/transfer/ListBody';
configure({ adapter: new Adapter() });


describe('Accordion', () => {
    it('setOpenIndex sets the open index state properly', () => {
        const wrapper = mount(<Accordion items={[]} />)
        // Handling [False -ve]
        // expect(wrapper.state('openIndex')).toEqual(0);
        expect(wrapper.state('openIndexes')).toEqual([0]);
        wrapper.instance().setOpenIndex(1);
        // Handling [False -ve]
        // expect(wrapper.state('openIndex')).toEqual(2);
        expect(wrapper.state('openIndexes')).toEqual([1]);
    });
    it('renders AccoridanContents with the item contents', () => {
        const hats = { title: 'A', contents: 'contents-A' };
        const footware = { title: 'B', contents: 'contents-B' };
        const wrapper = mount(<Accordion items={[hats, footware]} />);
        console.log(wrapper.find('div#content0').debug());
        // wrapper.instance().setOpenIndex(1);
        expect(wrapper.find('div#content0').props().children).toBe(hats.contents);
    });
});