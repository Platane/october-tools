import React    from 'react'

module.exports = Tree => {
    class TreeState extends React.Component {

        constructor(){
            super()
            this.state = {}

            this.methods = {
                open    : this.open.bind( this ),
                close   : this.close.bind( this ),
            }
        }

        open( path ){
            this.setState({ ...this.state, path:true })
        }

        close( path ){
            const state = { ...this.state }
            delete state[ path ]
            this.setState( state )
        }

        render(){
            return <Tree { ...this.props } { ...this.methods } opened={ this.state } />
        }
    }

    return TreeState
}
