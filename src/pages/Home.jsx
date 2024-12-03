import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const Home = () => {
 
  const [search,setSearch] = useState('');
  console.log(search);
  const dispatch = useDispatch();
  const allProductsdata = useSelector((state)=>state?.products);
  // console.log(allProductsdata)
  const newarrivals = allProductsdata?.slice(0,6);
  const topselling = allProductsdata?.slice(6,12);
   
  // console.log(mostselled); 
  
  const fetchData = async () =>{

    try{

      const productsData = await axios.get('https://fakestoreapi.com/products');
      const filterProductdata = productsData?.data;
      dispatch({type:'All_Products',payload: filterProductdata})
      

    }
    catch(error){

      console.log(error);

    }

  }


  useEffect(()=>{

    fetchData();

  },[])






  return (
    <>
    <Header value={setSearch}/>

    <Banner/>
        <div className="heading">
            <h1 className='text-4xl font-extrabold p-5 text-center'>NEW ARRIVALS</h1>
        </div>

      <div className="productCardwrapper flex flex-wrap justify-center center ">


        {

            newarrivals?.filter((item)=>{

              return search.toLocaleLowerCase() === "" ? item : item.title.toLocaleLowerCase().includes(search);

            })?.map((item)=>{

            return(

              <ProductCard key={item.id} data={item}/>

            )

          })

        }


      </div>

        <div className="heading">
            <h1 className='text-4xl font-extrabold p-5 text-center'>TOP SELLING</h1>
        </div>
        
          
      <div className="productCardwrapper flex flex-wrap justify-center center ">


{

      topselling?.filter((item)=>{

      return search.toLocaleLowerCase() === "" ? item : item.title.toLocaleLowerCase().includes(search);

    })?.map((item)=>{

    return(

      <ProductCard key={item.id} data={item}/>

    )

  })

}


</div>

  <Footer/>

    </>
  )
}

export default Home