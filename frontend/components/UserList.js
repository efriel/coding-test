import React from 'react';

const UserList = ({ users }) => {
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            <strong>{user.name}</strong> - {user.role}
          </li>
        ))}
      </ul>
    );
  };
  
  export default UserList;
  