import React, {PropTypes}   from 'react'
import ObjectTree           from 'component/objectTree/main'

const Payload = ({ payload, type }) =>
(
    <div className="timeLinePayload" >

        <ObjectTree object={ payload || {}  } />

    </div>
)

Payload.PropTypes = {
    type    : PropTypes.string.isRequired,
    payload : PropTypes.object,
}

export default Payload
