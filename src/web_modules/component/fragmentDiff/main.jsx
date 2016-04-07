import FragmentDiff     from './fragmentDiff.jsx'
import connect          from 'component/abstract/connect.jsx'

export default connect(

    root => [ root.fragmentSelected.onCurrentAction, root.fragmentSelected.selected ]
    ,

    ( diff, fragmentId ) =>
        ({ diff, fragmentId })
    ,

    FragmentDiff
)
