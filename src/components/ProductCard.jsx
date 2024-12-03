import React from "react";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Card,Alert } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from 'react-toastify';
const { Meta } = Card;

const ProductCard = ({data}) => {


const dispatch = useDispatch();
const addtocart = useSelector((state)=> state)
// console.log(addtocart);

  const {description,image,title,price,category} = data;



    const handleAddtoCart=()=>{
          console.log(data);
          dispatch({type: "Cart_Product" , payload: data})


          toast.success('Product added to cart!')
    }


  return (
    <>
      <div className="container ps-4  w-[350px] mb-10">
        <Card
        hoverable
          style={{
            width: 300,
          }}
          cover={
            <img className="product-image"
              alt="Product Img"
              src={image}
            />
          }
          actions={[
            // <SettingOutlined key="setting" />,
            // <EditOutlined key="edit" />,
            // <EllipsisOutlined key="ellipsis" />,
            
            <span className="text-3xl">
              
              <ShoppingCartOutlined onClick={handleAddtoCart} key="shoppingcart" />

            </span>
            
          ]}
        >
          <Meta
          className="metaprop"
            title={title}
            description= {description.slice(0,60)}
            description1= {price}
           
          />
          <div className="content text-xl">
            <p>{price}</p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ProductCard;
