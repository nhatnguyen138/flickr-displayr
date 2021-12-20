import { useState } from 'react'
import ImageList from '../../components/ImageList'
import './styles.css'

export default function Gallery() {
  const [tag, setTag] = useState("");
  const [tmp, setTmp] = useState("");

  const handleChange = event => {
    setTmp(event.target.value);
  }

  const handleKeyDown = event => {
    if (event.key==="Enter")
      setTag(tmp);
  }

  const handleClick = event => {
    setTag(tmp);
  }

  return (
    <div className="GalleryContainer">
      <div className="Search">
        <input
          type="text"
          name="search"
          className="SearchBar"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder='search for Flickr pics...'
        />
        <button onClick={handleClick}>
          <img src="/images/search.svg" style={{width: "30px"}} alt="search" />
        </button>
      </div>
      <ImageList
        tag={tag}
      />
    </div>
  )
}
