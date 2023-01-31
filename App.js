import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Main from './Screens/Main';
import {Provider} from 'react-redux';
import {mystore} from './reduxtoolkit/MyStore';

const App = () => {
  return (
    <Provider store={mystore}>
      <Main />
    </Provider>
  );
};

export default App;
