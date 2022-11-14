import propTypes from 'prop-types';
import styles from '../FriendListItem/styles.module.css';

export const FriendListItem = ({ friend }) => {
  const statusClass = friend.isOnLine ? styles.online : styles.offline;
  return (
    <li className={styles.item}>
      <span className={statusClass}></span>
      <img
        className="avatar"
        src={friend.avatar}
        alt="User avatar"
      width = "48"/>
      <p className={styles.name}>{friend.name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: propTypes.shape({
    name: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    isOnLine: propTypes.bool.isRequired,
  }).isRequired
};
