import './App.css';
import data from './data';
import { Routes, Route } from 'react-router-dom'
import { Event, Event1, Event2 } from './pages/event'
import { useState } from 'react'
import Detail from './pages/detail'
import Cart from './pages/cart';
import Tab from './component/Tab';
import Tab2 from './component/Tab2';
import Nav from './component/Navbar';
import List from './component/Lists';
import Input from './component/input'


function App() {
  const [list, setList] = useState(data);

  const moreList = (newValue) => {
    let copy = [...data];
    setList([...copy, ...newValue])
  }

  return (
    <div className="App">
      <Nav />
      <div className='main-bg'></div>
      <Tab />
      <Tab2 />
      <Routes>
        <Route path='/' element={<List data={list} moreList={moreList} />}></Route>
        <Route path='/detail/:id' element={<Detail detail={list} />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/event' element={<Event />}>
          <Route path='/event/one' element={<Event1 />}></Route>
          <Route path='/event/two' element={<Event2 />}></Route>
        </Route>
        <Route path='*' element={<h1>잘못된 주소입니다. </h1>}></Route>
      </Routes>
      <Input />
    </div>
  );
}

export default App;
