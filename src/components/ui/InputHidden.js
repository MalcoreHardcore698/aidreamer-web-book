import React from 'react'
import Input from './Input'

export default ({ name, inputRef }) => (
    <Input options={{ name, inputRef }} hidden />
)