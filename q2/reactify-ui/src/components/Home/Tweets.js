import React, { Component } from 'react';
import { Div } from '../Common/Common';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/action';

class Tweets extends Component {
    render() {
        return (
            this.props.tweets && this.props.tweets.map((val, idx) => {
                return (
                    <Div key={idx} cName="tweets-container">
                        <Div cName="row">
                            <Div cName="col-12">{val.tweet}</Div>
                        </Div>
                        <Div cName="tweets-details">{"By " + val.full_name + " on " + val.created}
                        </Div>
                    </Div>
                )
            })
        )
    }
}

const mapStateToProps = state => {
    return {};
};
export default connect(mapStateToProps, actions)(withRouter(Tweets));
