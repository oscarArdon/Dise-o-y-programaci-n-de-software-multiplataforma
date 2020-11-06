import React from "react";

import Application from "./Components/Application";
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <Application />
      <div >
        <p></p>
      </div>
    </UserProvider>

  );
}

export default App;
