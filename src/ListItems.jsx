import React, { Component } from 'react';


class ListItems extends Component {
    render() {
        return (
            <>
                <li> {this.props.doThis} </li>
            </>
        )
    }
}


export default ListItems;