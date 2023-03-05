import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Kamil',
      image:
        'https://samochody-specjalne.pl/wp-content/uploads/2021/02/xp-tgx-eot-individual-lion-s-2_a-678x381.jpg.pagespeed.ic.jQ4OtdHFpg.jpg',
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
