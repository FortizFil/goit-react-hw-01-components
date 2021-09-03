import PropTypes from "prop-types";
import s from "./friendList.module.css"

import FriendListItem from './friendListItem';





 function FriendList({ friends }) {
   return ( <ul className={s.friendList}>
       {friends.map(friend => (
        <FriendListItem
          key = {friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline = {friend.isOnline}
        />
       ))}
  
  </ul>)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
export default FriendList;