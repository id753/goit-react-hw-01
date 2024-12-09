import userData from "./userData.json";
import Profile from "./components/Profile/Profile";
// 2
import friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList";

import transactions from "./transactions.json";
import TransactionHistory from "./components/Transaction/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
