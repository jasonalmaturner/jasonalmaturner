// I'm breaking this down into a child component, because eventually I
// want to display all Git Events, not nust the commits from a
// push event. I think breaking it down into smaller components will
// make it easier later.

import React, { PropTypes } from 'react';
import styles from './DisplayEvent.css';
import { FormattedRelative } from 'react-intl';

function isPush(event, repo) {
  if (!event.payload.commits) {
    // This is kind of uncecessary, but oh well.
    return <pre><code>{JSON.stringify(event.payload, null, 1)}</code></pre>;
  }

  return event.payload.commits.map(commit => (
    <ul key={commit.sha}>
      <div className={styles.author}>
        {commit.author.name}
      </div>
      <p className={styles.message}>
        <a
          target='_blank'
          href={`https://github.com/${repo}/commit/${commit.sha}`}>
          {commit.message}
        </a>
      </p>
    </ul>
  ));
}

const DisplayEvent = ({ event }) => {
  const createdAt = new Date(event.created_at);
  return (
    <div className={styles.eventContainer}>
      <a className={styles.repo} target='_blank' href={`https://github.com/${event.repo.name}`}>
        <h4>{event.repo.name}</h4>
      </a>
      <div>
        {isPush(event, event.repo.name)}
      </div>
      <div className={styles.relativeDate}>
        <FormattedRelative value={createdAt} />
      </div>
    </div>
  );
};

DisplayEvent.propTypes = {
  event: PropTypes.object.isRequired,
};

export default DisplayEvent;
