import {Photo} from '../photo/photo'
import React from 'react';
import Lightbox from 'react-image-lightbox';
import LightboxElement from '../lightbox/lightbox';


export class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render(){
    const photos = this.props.photos;

    return (
      <div style={styles.gallery}>
        {photos.map((photo) =>
          <div style={styles.container}>
            <div style={styles.photoContainer}>
              <Photo photo={photo}/>
              <LightboxElement photos={photos} photo={photo}/>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const styles = {
	gallery : {
    display: 'table',
    lineHeight: '50px',
    width: '100%',
  },
  photoContainer:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '400px',
  },
  container:{
    display: 'inline-block',
    position: 'relative',
    width: '33.33%',
    float: 'left',
  }
};