import React from 'react';
import { shallow } from 'enzyme';
import ArtistDisplay from './ArtistDisplay';

describe('ArtistDisplay component', () => {
  const handleClick = jest.fn();
  const wrapper = shallow(<ArtistDisplay />);
  it('renders ArtistDisplay', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it.skip('should submit', () => {
    wrapper.findWhere(button => button.name() === 'prev').simulate('click');
    expect(handleClick).toHaveBeenCalled();
  });
});
