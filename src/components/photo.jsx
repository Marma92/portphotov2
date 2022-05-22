import React from 'react';

export function Photo(props) {
  return (
        <img className="Photo"
          src={props.photo.src}
          alt={props.photo.alt}
        />
  );
}