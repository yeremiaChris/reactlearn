import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider value='Yeremia'>
        <ComponentC/>
      </UserProvider>

      {/* <Counter render={(count, incrementCount) => <ClickCounter2 count={count} incrementCount={incrementCount} /> }/>
      <Counter render={(count, incrementCount) => <HoverCounter2 count={count} incrementCount={incrementCount} />} /> */}

      {/* children */}
      {/* <Counter >
        {(count, incrementCount) => <ClickCounter2 count={count} incrementCount={incrementCount} />}
      </Counter>
      <Counter >
        {(count, incrementCount) => <HoverCounter2 count={count} incrementCount={incrementCount} />}
      </Counter> */}


      {/* <ClickCounter2 />
      <HoverCounter2 />
      <User render={(isLoggedInd) => isLoggedInd ? 'Yeremia' : 'guest' }/> */}
    </div>
  );
}

export default App;
