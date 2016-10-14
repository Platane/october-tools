import React    from 'react'

module.exports = Tree => {
    class TreeState extends React.Component {

        constructor(){
            super()
            this.state = { opened: {} }

            this.methods = {
                openLeaf    : this.open.bind( this ),
                closeLeaf   : this.close.bind( this ),
            }
        }

        open( path ){
            this.setState({ opened:{ [ path ]:true } })
        }

        close( path ){
            this.setState({ opened:{} })
        }

        render(){
            return <Tree { ...this.props } { ...this.methods } leafOpened={ this.state.opened } />
        }
    }

    return TreeState
}
