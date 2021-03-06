import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectUser, fetchEventsIfNeeded, invalidateUser } from '../../actions/actions';
import ChangeUser from '../../components/ChangeUser/ChangeUser';
import DisplayEvents from '../../components/DisplayEvents/DisplayEvents';
import styles from './GitEvents.css';

class GitEvents extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedUser } = this.props;
    dispatch(fetchEventsIfNeeded(selectedUser));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedUser !== this.props.selectedUser) {
      const { dispatch, selectedUser } = nextProps;
      dispatch(fetchEventsIfNeeded(selectedUser));
    }
  }

  handleChange(nextUser) {
    this.props.dispatch(selectUser(nextUser));
  }

  handleRefreshClick(e) {
    e.preventDefault();

    const { dispatch, selectedUser } = this.props;
    dispatch(invalidateUser(selectedUser));
    dispatch(fetchEventsIfNeeded(selectedUser));
  }

  render() {
    const { selectedUser, events, isFetching, lastUpdated, error } = this.props;
    return (
      <div className={styles.mainContainer}>
        <div className={styles.headContainer}>
          <div className={styles.title}>
            <h2>Recent GitHub Push Events</h2>
          </div>
          <div className={styles.changeUser}>
            <ChangeUser searchUser={this.handleChange} handleClick={this.handleRefreshClick} />
          </div>
        </div>
        <div className={styles.contentContainer}>
          {events.length > 0 && !isFetching && <DisplayEvents theEvents={events} />}
          {isFetching && <img src='images/ripple.gif'/>}
          {error && <div className={styles.error}>{error.message}</div>}
          {events.length < 1 && !isFetching && !error &&
            <div className={styles.error}>
              No recent push events found
            </div>}
        </div>
      </div>
    );
  }
}

GitEvents.propTypes = {
  selectedUser: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { selectedUser, eventsByUser } = state;
  const {
    isFetching,
    lastUpdated,
    events,
    error,
  } = eventsByUser[selectedUser] || {
    isFetching: true,
    events: [],
    error: false,
  };

  return {
    selectedUser,
    events,
    error,
    isFetching,
    lastUpdated,
  };
}

export default connect(mapStateToProps)(GitEvents);
