import React, {useState} from 'react';
import './App.scss';
import Addition from './pages/addition/addition';
import Category from './pages/addition/category';
import Ongoing from './pages/ongoing/ongoing';
import SplitTime from './pages/splittime/splittime';
import Welcome from './pages/welcome/welcome';

function App() {
  const [page,setPage] = useState(1);
  return (
    <div className="App">
      {page===1?<Welcome nextPage={()=>setPage(2)}/>:null}
      {page===2?<Category nextPage={()=>setPage(3)}/>:null}
      {page===3?<Addition nextPage={()=>setPage(4)}/>:null}
      {page===4?<Ongoing nextPage={()=>setPage(5)}/>:null}
      {page===5?<SplitTime nextPage={()=>setPage(1)}/>:null}
    </div>
  );
}

export default App;
