import React, { PropTypes } from 'react';
import styles from './DisplayEvents.css';

// The server currently returns only PushEvents, but isPush is set up
// in case in the future I want to display other Git events other than
// just commits.
function isPush(event, repo) {
  if (!event.payload.commits) {
    return JSON.stringify(event.payload);
  }

  return event.payload.commits.map(commit => (
    <ul key={commit.sha}>
      <a href={`mailto:${commit.author.email}`}>{commit.author.name}</a>
      <a target='_blank' href={`https://github.com/${repo}/commit/${commit.sha}`}>{commit.message}</a>
    </ul>
  ));
}

const DisplayEvents = ({ theEvents }) => {
  if (!theEvents[0]) {
    return <div>Loading</div>;
  }

  const mappedEvents = theEvents.map((theEvent, i) =>
    <ul key={theEvent.id}>
      <a target='_blank' href={`https://github.com/${theEvent.repo.name}`}>
        {theEvent.repo.name}
      </a>
      <div>
        {isPush(theEvent, theEvent.repo.name)}
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
