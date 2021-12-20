import React, { useState, useEffect } from 'react';
import API from '../../utils/api';
import './styles.css';

export default function ImageList(props) {
  const { tag } = props;
  const [loading, setLoading] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [number, setNumber] = useState(12);

  const [source, setSource] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");


  useEffect(() => {
    if (tag!=="") {
      setPictures([]);
      setNumber(12);
      setLoading(true);
      try {
        const getImages = async () => {
          const { data } = await API.getImages(tag,number.toString(),"1");
          setPictures(data.photos.photo);
          setLoading(false);
        }
        getImages();
      } catch (err) {
        console.log(err);
      }
    } 
  }, [tag]);

  useEffect(() => {
    if (tag!=="") {
      setLoading(true);
      try {
        const getImages = async () => {
          const { data } = await API.getImages(tag,number.toString(),"1");
          setPictures(data.photos.photo);
          setLoading(false);
        }
        getImages();
      } catch (err) {
        console.log(err);
      }
    } 
  }, [number]);

  const handleClick = (src, id, title, owner) => {
    setSource(src);
    setId(id);
    setTitle(title);
    setOwner(owner);
  }

  return (
    <>
    {source && source!=="" &&
      <div className="BlackCover">
        <div className="Container">
          <img className="Img" src={source} alt="" />
          <div className="Txt">
            <div className="Caption">
              <p><span style={{fontSize:"1.1rem",fontWeight:"bold"}}>{title}</span> by user-{owner}</p>
              <p style={{fontSize:"0.95rem",marginLeft:"10px"}}>(Image ID: {id})</p>
            </div>
          </div>
        </div>
        <img className="close" src="/images/close.svg" alt="close" onClick={() => handleClick("", "", "", "")} />
      </div>
    }
    {loading ?
      <div className="SearchCaption">Loading...</div>
    :
      (pictures && pictures.length > 0) ? 
        <>
          <div className="SearchCaption">Search results for the keyword '{tag}'</div>
          <div className="ImageList">
            {pictures.map((picture,i) => {
              let src = 'https://farm'+picture.farm+'.staticflickr.com/'+picture.server+'/'+picture.id+'_'+picture.secret+'.jpg';
              return (
                <img src={src} className="Image" alt="" onClick={() => handleClick(src, picture.id, picture.title, picture.owner)} />
              )
            })}
          </div>
          {pictures.length%12===0 && pictures.length*2!==number &&
            <div className="LoadMore" onClick={() => setNumber(number+12)}>Load More</div>
          }
        </>
        : (tag!=="" && <div className="SearchCaption">No photos found with the keyword '{tag}'</div> )
      
    }
      
    </>
    
  );
}