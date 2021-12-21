import React, { useState, useEffect } from 'react';
import API from '../../utils/api';
import Displayr from '../Displayr';
import './styles.css';

export default function ImageList(props) {
  const { tag } = props;
  const [loading, setLoading] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);

  const [source, setSource] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");

  // Re-render when new search is made
  useEffect(() => {
    if (tag!=="") {
      try {
        const getImages = async () => {
          const { data } = await API.getImages(tag,"12",page.toString());
          setPictures(pictures.concat(data.photos.photo));
          setLoading(false);
        }
        setPictures([]);
        setPage(1);
        setLoading(true);
        getImages();
      } catch (err) {
        console.log(err);
      }
    } 
  }, [tag]);

  // Re-render when more images need to be loaded
  useEffect(() => {
    if (page!==1) {
      try {
        const getImages = async () => {
          const { data } = await API.getImages(tag,"12",page.toString());
          setPictures(pictures.concat(data.photos.photo));
          setLoading(false);
        }
        getImages();
      } catch (err) {
        console.log(err);
      }
    } 
  }, [page]);

  const handleClick = (src, id, title, owner) => {
    setSource(src);
    setId(id);
    setTitle(title);
    setOwner(owner);
  }

  return (
    <>
    {source && source!=="" &&
      <Displayr
        source={source}
        id={id}
        title={title}
        owner={owner}
        handleClick={handleClick}
      />
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
          {pictures.length%12===0 && pictures.length*2!==page*12 &&
            <div className="LoadMore" onClick={() => setPage(page+1)}>Load More</div>
          }
        </>
        : (tag!=="" && <div className="SearchCaption">No photos found with the keyword '{tag}'</div> )
    }   
    </>
  );
}