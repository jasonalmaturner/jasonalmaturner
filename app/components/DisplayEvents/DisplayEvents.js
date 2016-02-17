import React, { PropTypes } from 'react';
import styles from './DisplayEvents.css';

function isPush(event) {
  if (!event.payload.commits) {
    return JSON.stringify(event.payload);
  }

  return event.payload.commits.map(commit => (
    <div>
      <a href={`mailto:${commit.email}`}>{commit.name}</a>
      <a href={commit.url}>{commit.message}</a>
    </div>
  ));
}

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
        {isPush(theEvent)}
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
