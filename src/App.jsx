import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Base from './components/homepage/base/Base'
import Toggle from './components/homepage/productCard/Toggle'
import Navber from './components/navber/Navber'
import Threecard from './components/homepage/threecard/Threecard'
import Footer from './components/footer/Footer'
import Layoutthere from './components/homepage/layouthree/Layoutthere'
import { ToastContainer } from 'react-toastify'


const promise=async()=>{
    const res= await fetch("/data.json")
    const data=await res.json()
    return data;
}

const promiseData=promise();
function App() {

 const [selectedPlayers, setSelectedPlayers] = useState([]);
  return (
    <>
      <Navber selectedPlayers={selectedPlayers}></Navber>
      <Banner></Banner>
      <Base></Base>
      <Suspense fallback={<h2>Data loading...</h2>}>
        <Toggle setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} promiseData={promiseData}></Toggle>
      </Suspense>
      <Layoutthere></Layoutthere>
      <Threecard></Threecard>
      <Footer></Footer>

       <ToastContainer />
    </>
  )
}

export default App
