import { useEffect, useState } from "react";
import {BsArrowLeftCircleFill,BsArrowRightCircleFill}from 'react-icons/bs'

export default function ImageSlider({ url, limit=5 ,page=1}) {
  const [images, setImages] = useState([]);
  const [currentSlide, SetcurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json(`${getUrl}?page=${page}&limit=${limit}`);
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages();
  }, [url]);
  if(loading){
    return <div>Loading data!please wait</div>
  }
  if(errorMsg!==null){
    return <div>Error occured!{errorMsg}</div>
  }

  return <div className="container">
    <BsArrowLeftCircleFill className="arrow arrow-left"/>
    {
      images&&images.length ?
      images.map(imageItem=>(
        <img
        key={imageItem.id}
        alt={imageItem.download_url}
        className="current-image"
        />
      ))
      :null
    }
    <BsArrowRightCircleFill className="arrow arrow-right"/>
    <span className=""></span>
  </div>;
}
