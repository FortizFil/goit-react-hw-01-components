

import  FriendList  from './components/friendList/friendList';
import friends from './components/friendList/friends.json';
import user from './components/socialProfile/user.json';
import Profile from './components/socialProfile/profile';
import Statistics from './components/statistics/statistics'
import stats from './components/statistics/stats.json';
import TransactionHistory from './components/transaction/transactionHistory';
import transactions from './components/transaction/transactions.json';

function App() {
  return (
    <>
      <FriendList friends={friends} />
      <Profile
      name = {user.name}
      tag = {user.tag}
      location = {user.location} 
        avatar={user.avatar}
        stats = {user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <Statistics stats={stats} />
      <TransactionHistory  transactions={transactions}/>
    </>)
}

export default App;