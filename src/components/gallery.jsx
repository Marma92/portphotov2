import {Photo} from './photo'
import React from 'react';


export function Gallery(props) {
  const photos = props.photos;
    return (
    <div>
      {photos.map((photo) =>
        <div>
          <Photo photo={photo}/>
          {photo.alt}
        </div>
      )}
    </div>
  );
}