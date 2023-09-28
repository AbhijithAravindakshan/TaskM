import { Routes,Route } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';
import img from './IMG/200w.webp'

function App() {

  const Str = lazy(()=> import('./Components/Add'))
  const Db = lazy(()=> import('./Components/view'))
  const Upddet = lazy(()=> import('./Components/Upddet'))

  return (
    <div className="App">

<Suspense fallback= {<div>
        <img src={img} alt="" />
      </div>}>



      <Routes>


        <Route path='/' element={<Str/>}/>
        <Route path='view' element={<Db/>}/>
        <Route path='Upddet/id'element={<Upddet/>}/>


      </Routes>

      </Suspense>





    </div>
  );
}

export default App;
