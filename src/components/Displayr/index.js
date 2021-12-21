import './styles.css';

export default function Displayr(props) {
  const { source, title, owner, id } = props;

  const handleClick = (src,id,title,owner) => {
    props.handleClick(src,id,title,owner);
  }

  return (
    <div className="BlackCover">
      <div className="Container">
        <img className="Img" src={source} alt="" />
        <div className="Txt">
          <div className="Caption">
            {/*(id && owner) ?*/
              <>
                <p><span style={{fontSize:"1.1rem",fontWeight:"bold"}}>{title}</span> by user-{owner}</p>
                <p style={{fontSize:"0.95rem",marginLeft:"10px"}}>(Image ID: {id})</p>
              </>
              /*:
              <p>Photo not found</p>*/
            }
            
          </div>
        </div>
      </div>
      <img className="close" src="/images/close.svg" alt="close" onClick={() => handleClick("", "", "", "")} />
    </div>
  )
}
