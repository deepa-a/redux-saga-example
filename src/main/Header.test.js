import React from 'react';
import { mount, unmount } from 'enzyme';
import Header from './Header';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Header />);
});

it('Show a text header', () => {
  expect(wrapped.text()).toEqual('Header');
});

afterEach(() => {
  wrapped.unmount();
});
