import styled from "styled-components";
import React from 'react'
import { useGetsingleproductQuery } from "./redux/apiServices/apiCore";
import { useParams } from "react-router-dom";
import PageNavigation from "./components/PageNavigation";
import Loading from "./components/Loading";
import { useState } from "react";
import MyImage from "./components/MyImage";
import { Container } from "./components/Container";
import Stars from "./components/Stars";
import FormatPrice from "./Helper/FormatPrice"
import {TbTruckDelivery} from "react-icons/tb"
import AddToCart from "./components/AddToCart";

function SingleProduct() {
  const {id} = useParams();
  const {data, error, isLoading} = useGetsingleproductQuery(id);
  const [productData, setProductData] = useState("");

  const{ id: alias, name, company, price, description, category, stock, stars, reviews, image} = data || {};
  
  return (
    
     <Wrapper>
      
      <PageNavigation title={name}/>
      {isLoading && <Loading/>}

      {/* the page content */}
      <Container classname="container">
        <div className="grid grid-two-column">
          {/* image part */}
          <div className="product-images">
           <MyImage imgs={image}/>
          </div>
          {/* Product-data section */}
          <div className="product-data">
            <h2>{name}</h2>
            <Stars star={stars} reviews={reviews}/> 
            
            <div className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price+2500}/>
              </del>

            </div>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price}/>
              
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon"/>
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon"/>
                <p>Free Delivery</p>
              </div> <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon"/>
                <p>Free Delivery</p>
              </div> <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon"/>
                <p>Free Delivery</p>
              </div>
            </div>
            
            <div className="product-data-info">
            <p>Avalibility: {stock > 0 ?<span>In stock</span>: <span>not in stock</span>}</p>
            </div>
            <hr/>
            {stock > 0 && <AddToCart data={data}/>}

          </div>

        </div>
      </Container>
     </Wrapper>
  )
}





const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
      font-size: 1rem;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
      font-size: 1.2rem;
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
