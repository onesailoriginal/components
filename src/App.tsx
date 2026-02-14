import './App.css'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'

// import {First, Second, Third} from './components' --> ez akkor működne ha lenne egy index.ts amiben meg lennének az importok
function App() {


  return (
    <>
     <h1 className='text-center text-red-500'>hello world</h1>
     <First title="asd" text="asd"/>
     <Second/>
     <Third/>
      <Fourth/>
    </>
  )
}

export default App
