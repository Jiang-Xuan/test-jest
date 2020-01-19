import React from 'react'
import { shallow } from 'enzyme'
import Foo from './Foo'

describe('Foo component', () => {
  it('test', () => {
    const fn = jest.fn()
    const wrapper = shallow(
      <Foo />
    )

    console.log(wrapper.debug())

    expect(fn).toHaveBeenCalled()
  })
})