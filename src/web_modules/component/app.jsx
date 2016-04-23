import React          from 'react'
import Graph          from './graph/main.jsx'
import ActionList     from './actionList/main.jsx'
import FragmentDiff   from './fragmentDiff/main.jsx'
import StateTree      from './stateTree/main.jsx'

const App = () =>
(
    <div className="tools">

        <div className="tools-right">

            <div className="tools-top">
                <div className="tools-stateTree">
                    <StateTree />
                </div>
                <div className="tools-fragmentDiff">
                    <FragmentDiff />
                </div>
            </div>

            <div className="tools-graph">
                <Graph />
            </div>

        </div>

        <div className="tools-actionList">
            <ActionList />
        </div>
    </div>
)

export default App
