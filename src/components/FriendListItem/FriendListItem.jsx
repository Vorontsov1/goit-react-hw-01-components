import css from './FriendListItem.module.css';
import PropTypes from "prop-types";
export const FriendListItem = ({ avatar, name, isOnLine }) => {
    return (
        <li className={css.item}>
            <span className={isOnLine ? css.onLine : css.ofLine}>{isOnLine}</span> 
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
</li>
    )
}

FriendListItem.protoTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnLine: PropTypes.bool.isRequired,
  }),
};