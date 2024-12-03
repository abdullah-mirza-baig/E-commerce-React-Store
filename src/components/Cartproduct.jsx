import {  DeleteOutlined } from '@ant-design/icons';
import { Card } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux';

const Cartproduct = ({data}) => {

    const {price,image,id,title} = data;
    const dispatch = useDispatch();

  return (
    <>

        <Card hoverable>
          <div className='flex gap-2 justify-start items-start'>
            <img className='w-[75px] h-[75px]' src={image} alt="" />
            <p className='text-[0.9em]  pe-[70px] font-semibold'>{title}</p>
          </div>
            <p className='text-lg font-bold'>Price: ${price}</p>
            <span className='text-2xl text-red-500 flex justify-end'>

                    <DeleteOutlined onClick={()=>dispatch({type:"Remove_Cart_Product", payload:{id:id}})} />

            </span>

        


        </Card>
    

    </>
  )
}

export default Cartproduct