import FragmentDiff     from './fragmentDiff.jsx'
import {connect}        from 'component/abstract/connect.jsx'

export default connect(

    root => [ root.nodeSelected.onCurrentAction, root.nodeSelected.selected ]
    ,

    ( diff, nodeName ) =>
        ({ diff, nodeName })
    ,

    {}
    ,

    FragmentDiff
)
