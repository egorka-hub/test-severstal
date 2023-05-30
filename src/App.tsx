import React              from 'react';
import {
  BrowserRouter,
  Routes,
  Route
}                         from "react-router-dom";

import {RequestProvider}  from "./context/RequestContext";

import Main               from "./containers/Main";
import Post               from "./containers/Post";
import Get                from "./containers/Get";
import Delete             from "./containers/Delete";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <RequestProvider propValue={[]}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="post" element={<Post />} />
              <Route path="get" element={<Get />} />
              <Route path="delete" element={<Delete />} />
            </Routes>
          </RequestProvider>
        </BrowserRouter>
      </div>
  );
}

export default App;
