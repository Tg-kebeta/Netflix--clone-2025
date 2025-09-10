import React from 'react'
import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner'
import Footer from '../../Components/Footer/Footer'

// import RowList from '../../Components/Rows/RowList/RowList'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      {/* <RowList/> */}
      <Footer/>
    </div>
  )
}

export default Home