import React          from 'react'
import Graph          from './graph/main.jsx'
import ActionList     from './actionList/main.jsx'
// import FragmentDiff   from './fragmentDiff/main.jsx'

const App = () =>
(
    <div className="tools">
        <div className="tools-graph">
            <Graph />
        </div>
        <div className="tools-actionList">
            <ActionList />
        </div>
    </div>
)
// <div className="tools-fragmentDiff">
//     <FragmentDiff />
// </div>

export default App
