import React        from 'react'
import Leaf         from './leaf.jsx'


const ObjectTree = ({ x , open, close }) =>
    x === null || typeof x != 'object'
        ? <Leaf x={x} />
        : (

        <div className="objectTree-children">
            {
                x.map( ({path, value, key, opened}) => {

                    const childIsLeaf = typeof value != 'object'

                    return (

                        <div key={key} className={'objectTree-child' + ( childIsLeaf ? ' objectTree-child--leaf' : '' ) } >

                            <div className="objectTree-identity" onClick={ () => opened ? close( path ) : open( path ) } >

                                { !childIsLeaf && <div className={'objectTree-tic objectTree-tic--'+( opened ? 'opened' : 'closed' )} >></div> }

                                <div className="objectTree-key">{ ' '+ key }</div>

                                <div className="objectTree-separator"> : </div>

                            </div>

                            {
                                childIsLeaf
                                    ? <Leaf x={value} />
                                    : opened && <ObjectTree x={value} { ...{open, close} } />
                            }
                        </div>
                    )
                })
            }
        </div>
    )

export default ObjectTree
