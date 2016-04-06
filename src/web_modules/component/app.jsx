import React        from 'react'
import Graph        from './graph/main.jsx'
import ActionList   from './actionList/main.jsx'

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

export default App
