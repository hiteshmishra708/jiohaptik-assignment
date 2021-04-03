import React, { Component } from 'react';
import { Div } from '../Common/Common';

export default class Layout extends Component {
    render() {
        return (
            <>
                <Div cName="main-container">
                    <Div cName="main-content">{this.props.children}</Div>
                </Div>
            </>
        );
    }
}