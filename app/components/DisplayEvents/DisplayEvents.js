import React, { PropTypes } from 'react';
import styles from './DisplayEvents.css';
import DisplayEvent from '../DisplayEvent/DisplayEvent';

// The server currently returns only PushEvents, but isPush is set up
// in case in the future I want to display other Git events other than
// just commits.

const DisplayEvents = ({ theEvents }) => {
  const mappedEvents = theEvents.map((theEvent, i) =>
    <DisplayEvent event={theEvent} key={theEvent.id} />
  );

  return (
    <div className={styles.eventsContainer}>
      {mappedEvents}
    </div>
  );
};

DisplayEvents.propTypes = {
  theEvents: PropTypes.array.isRequired,
};

export default DisplayEvents;
