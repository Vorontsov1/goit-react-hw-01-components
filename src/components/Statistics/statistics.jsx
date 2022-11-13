import css from './statistical.modul.css';
import PropTypes from 'prop-types';
import randomColor from './RandomColor';

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.list}>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <li
                            className={css.item}
                            key={id}
                            style={{ backgroundColor: randomColor() }}
                        >
                            <span className={css.label}>{label}</span>
                            <span className={css.percentage}>{percentage}%</span>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};