import React from 'react'
import { AutoComplete, Input } from 'antd'

export default function Foo() {
  return (
    <div>
      <AutoComplete>
        <Input.Search placeholder="placeholder" />
      </AutoComplete>
    </div>
  )
}