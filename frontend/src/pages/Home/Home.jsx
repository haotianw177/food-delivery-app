import React, { useState } from 'react'; 
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'

const Home = () => {
  // The state category (initial value "ALL") and its setter setCategory 
  // are passed as props to the ExploreMenu component.
  const [category, setCategory] = useState('ALL');
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home