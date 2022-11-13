import css from './FriendList.modul.css';
import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    isOnline={isOnline}
                    name={name}
                />
            )
            )}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
};