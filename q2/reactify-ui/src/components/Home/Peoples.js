import React, { Component } from 'react';
import { Div, Table } from '../Common/Common';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { action_types } from '../../actions/constants';
import * as actions from '../../actions/action';

class Peoples extends Component {

    componentDidMount() {
        this.props.callApi(action_types.ALL_PEOPLES, undefined, 'GET');
    }

    follow = () => {
        // this.setState({ showModal: false, modalMsg: "", showError: false });
    }

    render() {
        console.log(this.props.peoples)
        return (
            <Div cName="home">
                <Div cName="home-wrapper">
                <Table data={this.props.peoples? this.props.peoples: []} columns={['full_name']} displayColumns={{'full_name': 'Name'}} noHeader={true} follow={this.follow} />
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
