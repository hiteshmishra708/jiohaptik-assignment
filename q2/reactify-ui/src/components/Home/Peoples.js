import React, { Component } from 'react';
import { Div, Table } from '../Common/Common';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { action_types } from '../../actions/constants';
import * as actions from '../../actions/action';

class Peoples extends Component {

    componentDidMount() {
        this.props.callApi(action_types.PEOPLES, undefined, 'GET');
    }

    follow = (people) => {
        const action = !people.action;
        this.props.callApi(action_types.FOLLOW_UNFOLLOW, {
            id: people.id,
            action: action
        });
        people.action = action;
    }

    render() {
        console.log(this.props.peoples)
        return (
            <Div cName="home">
                <Div cName="home-wrapper">
                <Table data={this.props.peoples && this.props.peoples.length? this.props.peoples: []} columns={['full_name']} displayColumns={{'full_name': 'Name'}} noHeader={true} follow={this.follow} />
                </Div>
            </Div>
        )
    }
}

const mapStateToProps = state => {
    return {
        peoples: state.store.peoples,
        loading: state.store.loader,
    };
};
export default connect(mapStateToProps, actions)(withRouter(Peoples));
