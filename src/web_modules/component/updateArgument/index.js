import UpdateArgument   from './updateArgument'
import {connect}        from 'component/abstract/connect'

export default connect(

    ({ updateArgument}) => [ updateArgument.dependencies, updateArgument.result, updateArgument.action ]
    ,

    ( dependencies, result, action ) =>
        ({ dependencies, result, action })
    ,

    {}
    ,

    UpdateArgument
)
