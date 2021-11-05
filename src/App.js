import React, {useState} from 'react';
import './App.scss';
import Addition from './pages/addition/addition';
import Welcome from './pages/welcome/welcome';

function App() {
  const [page,setPage] = useState(1);
  return (
    <div className="App">
      {page===1?<Welcome nextPage={()=>setPage(2)}/>:null}
      {page===2?<Addition nextPage={()=>setPage(3)}/>:null}
    </div>
  );
}

export default App;
