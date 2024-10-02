import React from 'react';
import { CSGO, GSISocket } from 'csgogsi-socket';
import { Layout } from './HUD/Layout';

// export const {GSI, socket} = GSISocket('http://localhost:4000', "update");

// socket.on('update', (data) => {
//   // console.log(data);

// });

// GSI.on('kill', (data) => {
//   console.log(data);
// });


function App() {
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
