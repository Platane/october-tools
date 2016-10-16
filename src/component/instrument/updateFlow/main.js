import React            from 'react'
import UpdateFlow       from './updateFlow'

const Flow = props =>
    props.action 
        ? <UpdateFlow { ...props } />
        : null


module.exports = Flow
