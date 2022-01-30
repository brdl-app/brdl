import React, {Component} from 'react';
import { connect } from 'react-redux';
import CommunitSitings from '../components/CommunitySitings.jsx';
import FriendSitings from '../components/FriendSitings.jsx';
import * as actions from '../../redux/actions/actions.js';

const mapDispatchToProps = dispatch => ({
  changeToProfilePageActionCreator: () => dispatch(actions.changeToProfilePageActionCreator()),
})

class CommunityContainer extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <button key='pB' onClick={this.props.changeToProfilePageActionCreator}>Profile</button>
        <h1>Community Sitings</h1>
        <CommunitSitings />
        <h1>Friend Sitings</h1>
        <FriendSitings />
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(CommunityContainer);