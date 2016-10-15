import React        from 'react'
import Arc          from './arc'
import style        from './style.mcss'

const Graph = props =>
    ( !props.edges || !props.vertices )
        ? null
        : (
            <svg className={ style.container } >

                <g className={ style.edges }>
                    {
                        props.edges
                            .map( x => <Arc key={ x.a+'-'+x.b } path={ x.points } color="#ccc" /> )
                    }
                </g>

                <g className={ style.nodes }>
                    {
                        Object.keys( props.vertices )
                            .map( name =>
                                <g key={name} transform={`translate(${ props.vertices[name].x },${ props.vertices[name].y })`}>
                                    <circle cx="0" cy="0" r="4.5" fill="#aaa" />
                                    <text x="5" y="2">{ name }</text>
                                </g>
                            )
                    }
                </g>

            </svg>
        )


module.exports = Graph
