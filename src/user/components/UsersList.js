import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';
import './UsersList.css';

const UserList = (props) => {
  if (props.items.length === 0) {
    // if theres no users in database
    return (
      <div className='center'>
        <Card>
          <h2>No users found. Yet!</h2>
        </Card>
      </div>
    );
  }
  // else return list of users
  return (
    <ul className='users-list'>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UserList;
