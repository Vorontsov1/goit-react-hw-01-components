import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import friends from '../json/friends.json';
import user from '../json/user.json';
import statistics from '../json/statistics.json';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};


