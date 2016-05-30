import FragmentDiff     from './fragmentDiff'
import {connect}        from 'component/abstract/connect'

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
