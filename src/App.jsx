/** @jsxImportSource @emotion/react */
import "./App.css";
import { css } from '@emotion/react';
import ListMovie from "./components/list-movies";


function App() {
  
  return (
    <div className="App">
      <h1 css={css`text-align: center; font-size: 40px; margin:50px; font-family: Kanit;`}>Movie List Section</h1>
        <ListMovie />
    </div>
  );
}

export default App;
