import React, {PropTypes, Component} from 'react'

class ClickOutside extends Component {

    constructor(){
        super()

        this.onDocumentClick = this.onDocumentClick.bind( this )
    }

    onDocumentClick( event ){

        let c = event.target
        while ( c != event.currentTarget ){
            if ( c.className == this.props.ignoreClassName || c == this.props.ignoreElement )
                return

            c = c.parentNode
        }

        this.props.onClickOutside && this.props.onClickOutside( event )
    }

    componentDidMount(){
        if ( !document.body )
            return

        document.body.removeEventListener( 'click', this.onDocumentClick )
        document.body.addEventListener( 'click', this.onDocumentClick )
    }

    componentWillUnmount(){
        if ( !document.body )
            return

        document.body.removeEventListener( 'click', this.onDocumentClick )
    }

    render(){
        return this.props.children || null
    }
}

ClickOutside.propTypes = {
    ignoreClassName           : PropTypes.string,
    ignoreElement             : PropTypes.node,
    onClickOutside            : PropTypes.func,
}

export default ClickOutside
