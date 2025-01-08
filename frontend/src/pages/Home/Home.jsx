import React, { useState } from 'react'; 
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {
  // The state category (initial value "ALL") and its setter setCategory 
  // are passed as props to the ExploreMenu component.
  // Props Allow you to pass data (category) and functions (setCategory) 
  // from parent to child components.
  const [category, setCategory] = useState('ALL');
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home