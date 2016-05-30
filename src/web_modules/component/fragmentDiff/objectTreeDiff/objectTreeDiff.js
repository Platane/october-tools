import React        from 'react'
import Leaf         from 'component/objectTree/leaf'


const isLeaf = value =>
    !value || typeof value != 'object'

const ObjectTreeDiff = ({ x , open,   close }) => {

    if ( isLeaf( x ) )
        return <Leaf x={x} />

    if ( isLeaf( x ) )
        return <Leaf x={x} />

    else if ( x.some( x => x.key == 'before' ) && x.some( x => x.key == 'after' ) )
        return (
            <div className="objectTree-diff">
                <div className="objectTree-before">
                    <ObjectTreeDiff x={ x.find( x => x.key == 'before' ).value } { ...{open, close} } />
                </div>
                <div className="objectTree-after">
                    <ObjectTreeDiff x={ x.find( x => x.key == 'after' ).value } { ...{open, close} } />
                </div>
            </div>
        )

    else
        return (
            <div className="objectTree-children">
            {
                x.map( ({path, value, key, opened}) =>

                        <div key={key} className={'objectTree-child' + ( isLeaf( value ) ? ' objectTree-child--leaf' : '' ) } >

                            <div className="objectTree-identity" onClick={ () => opened ? close( path ) : open( path ) } >

                                { !isLeaf( value ) && <div className={'objectTree-tic objectTree-tic--'+( opened ? 'opened' : 'closed' )} >></div> }

                                <div className="objectTree-key">{ ' '+ key }</div>

                                <div className="objectTree-separator"> : </div>

                            </div>

                            { ( isLeaf( value ) || opened ) && <ObjectTreeDiff x={value} { ...{open, close} } /> }

                        </div>

                )
            }
        </div>
    )
}

export default ObjectTreeDiff
