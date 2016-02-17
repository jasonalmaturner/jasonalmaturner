import React, { PropTypes } from 'react';
import styles from './DisplayEvents.css';

const DisplayEvents = ({ theEvents }) => {
  if (!theEvents[0]) {
    return <div>Loading</div>;
  }

  const mappedEvents = theEvents.map((theEvent, i) =>
    <ul key={theEvent.id}>
      <div>
        {theEvent.type}
      </div>
      <a href={theEvent.repo.url}>
        {theEvent.repo.name}
      </a>
      <div>
        {JSON.stringify(theEvent.payload)}
      </div>
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
