import React          from 'react'
import Graph          from './graph/main'
import TimeLine       from './timeLine'
import FragmentDiff   from './fragmentDiff/main'
import StateTree      from './stateTree/main'

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
            <TimeLine />
        </div>
    </div>
)

export default App
