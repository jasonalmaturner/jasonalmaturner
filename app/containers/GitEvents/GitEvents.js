import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectUser, fetchEventsIfNeeded, invalidateUser } from '../../actions/actions';

class GitEvents extends Component {
  construct(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, selectedUser } = this.props;
    dispatch(fetchEventsIfNeeded(selectedUser));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps[selectedUser] !== this.props.selectedUser) {
      const { dispatch, selectedUser } = nextProps;
      dispatch(fetchEventsIfNeeded(selectedUser));
    }
  }
}
