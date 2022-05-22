import {Photo} from './photo'
import React from 'react';


export function Gallery(props) {
  const photos = props.photos;
    return (
    <div style={styles.gallery}>
      {photos.map((photo) =>
        <div style={styles.container}>
          <div style={styles.photoContainer}>
            <Photo photo={photo}/>
          </div>
        </div>
      )}
    </div>
  );
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
    height: '500px',
  },
  container:{
    display: 'inline-block',
    position: 'relative',
    width: '33.33%',
    float: 'left',
  }
};