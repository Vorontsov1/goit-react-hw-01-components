import propTypes from 'prop-types';

import styles from '../Statistics/styles.module.css';

export const Statistics = stats => (
  <section className={styles.statistics}>
    {stats.title && <h2 className={styles.title}>Upload stats</h2>}

    <ul className={styles.statList}>
      {stats.stats.map(stat => (
        <li
          key={stat.id}
          className={styles.statListItem}
          style={{
            backgroundColor: `rgb(${getRandomInt(255)},${getRandomInt(
              255
            )},${getRandomInt(255)})`,
          }}
        >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
    stats: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
        })
    ),
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}