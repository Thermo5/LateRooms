import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { spy } from 'sinon';
import App from '../App';
import Title from '../Title';
import Filter from '../Filter';
import HotelList from '../HotelList';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

spy(App.prototype, 'componentDidMount');

describe('<App />', () => {
  it('calls componentDidMount', () => {
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });
  it('renders  <Title /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Title)).to.have.length(1);
  });
  it('renders  <Filter /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Filter)).to.have.length(1);
  });
  it('renders  <HotelList /> components', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.find(HotelList))
    expect(wrapper.find(HotelList)).to.have.length(1);
  });
});





