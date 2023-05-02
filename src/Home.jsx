import React from 'react'
import Hero from './components/Hero'
import FeatureProduct from './components/FeatureProduct'
import { useGetproductsQuery } from './redux/apiServices/apiCore'
import { useDispatch } from 'react-redux'
import { setFeaturedProducts, setProductlist } from './redux/features/ProductSlice'

export default function Home() {
  const {data, error, isLoading} = useGetproductsQuery();
 


  const dispatch = useDispatch();
  dispatch(setProductlist(data));
  dispatch(setFeaturedProducts(data));

  // console.log(name)



  const name = "Ease My Shop"
  return (
    <>
    <Hero name={name}/>
    <FeatureProduct/>
    </>
  )
}
