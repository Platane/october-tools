import React    from 'react'

module.exports = Tree => {
    class TreeState extends React.Component {

        constructor(){
            super()
            this.state = { opened: {} }

            this.methods = {
                open    : this.open.bind( this ),
                close   : this.close.bind( this ),
            }
        }

        open( path ){
            this.setState({ opened:{ ...this.state.opened, [ path ]:true } })
        }

        close( path ){
            const opened = { ...this.state.opened }
            delete opened[ path ]
            this.setState({ opened })
        }

        render(){
            return <Tree { ...this.props } { ...this.methods } opened={ this.state.opened } />
        }
    }

    return TreeState
}
