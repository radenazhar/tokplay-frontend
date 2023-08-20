// src/components/Homepage.js
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoThumbnail from './VideoThumbnail';

const Homepage = () => {
  const [videos, setVideos] = useState([]);
  // const [products, setProductsData] = useState([]);
  
  
  // const productsData = () => {
  //   axios.get(`http://localhost:8000/products`)
  //     .then((response) => {
  //       setProductsData(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.error("Product list error", error.message);
  //     });
  // };

  useEffect(() => {
    axios.get(' http://localhost:3001/videos') // Replace with your API endpoint
      .then(response => {
        setVideos(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching videos:', error);
      });

      // productsData();
  }, []);

console.log(videos);

  return (
   <>
    <div className="video-list">
    {videos.map((video, i) => {
                console.log(video);
                return(   
                 <Link to={`/videos/${video._id}`} key={video._id}>
                    <img src={video.thumbnailImage} style={{ width: "300px" }} />
                 </Link>
                )
            })}
      </div>
   </>
  );
};

export default Homepage;
