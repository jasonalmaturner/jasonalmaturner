import React, { PropTypes } from 'react';
import styles from './DisplayEvents.css';

const DisplayEvents = ({ theEvents }) => {
  if (!theEvents[0]) {
    return <div>Loading</div>;
  }

  const mappedEvents = theEvents.map((theEvent, i) =>
    <ul key={i}>
      {JSON.stringify(theEvent)}
    </ul>
  );
  return (
    <div>
      {mappedEvents}
    </div>
  );
};

DisplayEvents.propTypes = {
  theEvents: PropTypes.array.isRequired,
};

export default DisplayEvents;
