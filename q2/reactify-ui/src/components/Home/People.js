import React, { Component } from 'react';
import { Div, Label, Button } from '../Common/Common';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { action_types } from '../../actions/constants';
import * as actions from '../../actions/action';
import Tweets from './Tweets';
import { getFollowStatus } from '../Validator/Validator'

class People extends Component {

    componentDidMount() {
        this.props.callApi(action_types.PEOPLES, {
            id: this.props.match.params.id
        });
    }

    follow = () => {
        const action = !this.props.peoples.action;
        this.props.callApi(action_types.FOLLOW_UNFOLLOW, {
            id: this.props.match.params.id,
            action: action
        });
        this.props.peoples.action = action;
    }

    render() {
        return (
            <Div cName="home">
                <Div cName="home-wrapper">
                    {this.props.peoples && this.props.peoples.full_name && (
                        <>
                            <Div cName="wrapper-heading d-common-label">{this.props.peoples.full_name}</Div>
                            <Div cName="row">
                                <Label>{"Joined on " + this.props.peoples.created}</Label>
                                <Button onClick={() => this.follow()}>{getFollowStatus(this.props.peoples.action)}</Button>
                            </Div>
                        </>
                    )}
                    {this.props.peoples && this.props.peoples.tweets && (
                        <>
                            <Div cName="wrapper-heading d-common-label">Tweets</Div>
                            <Tweets tweets={this.props.peoples.tweets} />
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
        peoples: state.store.peoples,
        loading: state.store.loader,
    };
};
export default connect(mapStateToProps, actions)(withRouter(People));
