// I'm breaking this down into a child component, because eventually I
// want to display all Git Events, not nust the commits from a
// push event. I think breaking it down into smaller components will
// make it easier later.

import React, { PropTypes } from 'react';
import styles from './DisplayEvent.css';

function isPush(event, repo) {
  if (!event.payload.commits) {
    // This is kind of uncecessary, but oh well.
    return <pre><code>{JSON.stringify(event.payload, null, 1)}</code></pre>;
  }

  return event.payload.commits.map(commit => (
    <ul key={commit.sha}>
      {commit.author.name}
      <p>
        <a
          target='_blank'
          href={`https://github.com/${repo}/commit/${commit.sha}`}>
          {commit.message}
        </a>
      </p>
    </ul>
  ));
}

const DisplayEvent = ({ event }) => (
  <div className={styles.eventContainer}>
    <a target='_blank' href={`https://github.com/${event.repo.name}`}>
      {event.repo.name}
    </a>
    <div>
      {isPush(event, event.repo.name)}
    </div>
  </div>
);

DisplayEvent.propTypes = {
  event: PropTypes.object.isRequired,
};

export default DisplayEvent;
