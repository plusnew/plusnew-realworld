import { configure } from 'enzyme';
import enzymeAdapterPlusnew, { mount } from '@plusnew/enzyme-adapter';
import plusnew from '@plusnew/core';
import Providers from '.';
import { BrowserProvider } from '@plusnew/router';

configure({ adapter: new enzymeAdapterPlusnew() });

describe('<Providers />', () => {
  it('should contain <Header /', () => {
    const wrapper = mount(<Providers><div /></Providers>);

    expect(wrapper.find(BrowserProvider).exists()).toBe(true);
    expect(wrapper.find(BrowserProvider).find('div').exists()).toBe(true);

    wrapper.unmount();
  });
});