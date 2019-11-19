import React from 'react';
import friends from './friends.js';
import './App.css';

class App extends React.Component {
  setCurrentFriend = (friend) => {
    console.log(friend);
    setState(
      currentFriend: friend
    )
  }
  constructor(props) {
    super(props);

    this.state = {
      currentFriend: null
    };
  }
  render() {
  return (
    <div className="App">
      {friends.map((friend) =>
        <button
          className="friend"
          key={friend.lastName}
          onClick={() => this.setCurrentFriend(friend)}
        >
          <p>{friend.firstName} {friend.lastName}</p>
          <p>{friend.addressLine1}, {friend.city}, {friend.state} {friend.zipCode}</p>
        </button>
      )}
    </div>
  );
};
}

export default App;
