import { Suspense } from 'react'
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Base from './components/homepage/base/Base'
import Toggle from './components/homepage/productCard/Toggle'
import Navber from './components/navber/Navber'
import Threecard from './components/homepage/threecard/Threecard'
import Footer from './components/footer/Footer'
import Layoutthere from './components/homepage/layouthree/Layoutthere'


const promise=async()=>{
    const res= await fetch("/data.json")
    const data=await res.json()
    return data;
}

const promiseData=promise();
function App() {


  return (
    <>
      <Navber></Navber>
      <Banner></Banner>
      <Base></Base>
      <Suspense fallback={<h2>Data loading...</h2>}>
        <Toggle promiseData={promiseData}></Toggle>
      </Suspense>
      <Layoutthere></Layoutthere>
      <Threecard></Threecard>
      <Footer></Footer>
    </>
  )
}

export default App
