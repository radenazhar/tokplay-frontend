// src/components/VideoDetail.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Card, Image} from 'react-bootstrap'
import ProductList from './Components/productsData';


const VideoDetail = () => {
   const [thumbnail, setThumbnail] = useState({}); 
   const [products, setProductsData] = useState([]);
   const { id } = useParams();
   
   const productsData = () => {
    axios.get(`http://localhost:3001/products/${id}`)
      .then((response) => {
        setProductsData(response.data.data);
      })
      .catch((error) => {
        console.error("Product list error", error.message);
      });
  };
//    const videoDetail = () => {
//     const videoData = axios.get("http://localhost:3000/Video/:id")
//      .then(response => {
//         const imgUrl = response.data.videoDetail[0].thumbnailUrl;
//         setThumbnail(imgUrl.split("/")[4]);
//      })
//      .catch((error)=> console.error(error.message));
//     };
  
const showProductsData = () => {
  return products.map((product, i) => {
    return (
      <>
        <Card style={{ width: '400px' }}>
          <Card.Body>
           <Image style={{ width: '200px' }} src={product.imageUrl}/>
            <Card.Text>
              {product.title}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  });
};
   useEffect(() => {
        axios.get(` http://localhost:3001/videos/${id} `)
        .then((response) => {
            setThumbnail(response.data.data)
        })
        productsData();
   },[]);
  return (
    <>
    <h1>test</h1>
      <iframe
        width="1000"
        height="600"
        src={thumbnail.youtube_url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
     <div>
        <ProductList id={id} />
     </div>
  
    </>

  );
}

export default VideoDetail;
