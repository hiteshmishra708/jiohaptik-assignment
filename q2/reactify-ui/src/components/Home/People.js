import React, { Component } from 'react';
import { Div, Label, Button } from '../Common/Common';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { action_types } from '../../actions/constants';
import * as actions from '../../actions/action';
import Tweets from './Tweets';

class People extends Component {

    componentDidMount() {
        this.props.callApi(action_types.PEOPLE, {
            id: this.props.match.params.id
        });
    }

    follow = () => {
        // this.setState({ showModal: false, modalMsg: "", showError: false });
    }

    render() {
        return (
            <Div cName="home">
                <Div cName="home-wrapper">
                    {this.props.people && this.props.people.full_name && (
                        <>
                            <Div cName="wrapper-heading d-common-label">{this.props.people.full_name}</Div>
                            <Div cName="row">
                                <Label>{"Joined on " + this.props.people.created}</Label>
                                <Button onClick={() => this.follow()}>Follow</Button>
                            </Div>
                        </>
                    )}
                    {this.props.people && this.props.people.tweets && (
                        <>
                            <Div cName="wrapper-heading d-common-label">Tweets</Div>
                            <Tweets tweets={this.props.people.tweets} />
                        </>
                    )}
                </Div>
            </Div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.store.people, "dfgdf")
    return {
        people: state.store.people,
        loading: state.store.loader,
    };
};
export default connect(mapStateToProps, actions)(withRouter(People));
