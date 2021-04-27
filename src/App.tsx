/** Dependencies */
import React from 'react';

/** Pages */
import GinettaChallenge from './pages/GinettaChallenge';

const App: React.FC = () => {
  /**
   * !!!!! ROUTER !!!!!
   * If more pages were needed, I would add the router here
   * instead of directly returning the @GinettaChallenge page
   * */
  return <GinettaChallenge />;
};

export default App;
