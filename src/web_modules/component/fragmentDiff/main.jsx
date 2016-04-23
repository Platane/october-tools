import FragmentDiff     from './fragmentDiff.jsx'
import {connect}        from 'component/abstract/connect.jsx'

export default connect(

    root => [ root.actionSelected.diff ]
    ,

    ( diff ) =>
        ({ diff })
    ,

    {}
    ,

    FragmentDiff
)
