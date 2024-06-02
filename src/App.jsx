import React from 'react';
import Profile from './components/Card';
import users from data.json



const App = () => {
  console.log('users')
  return (
    <Profile
      name={users.username}
      tag={users.tag}
      location={users.location}
      image={users.avatar}
      stats={users.stats}
    />
  );
};

export default App;
