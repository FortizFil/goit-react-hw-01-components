import PropTypes from 'prop-types';
import s from './friendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      {isOnline === true ? (
        <span className={s.isOnline}></span>
      ) : (
        <span className={s.isOffline}></span>
      )}
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
