import { FriendList } from './FriendList/FriendList';
import friends from '../json/friends.json';
import { Profile } from './Profile/Profile';
import user from '../json/user.json';
import { Statistics } from './Statistics/statistics';
import data from '../json/data.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../json/transactions.json';




export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: 30,
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
