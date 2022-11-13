import propTypes from 'prop-types';

import styles from './styles.module.css';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} friend={friend} />
    ))}
  </ul>
);

FriendListItem.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    })
  ),
};
