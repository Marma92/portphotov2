import React from 'react';

export function Photo(props) {
  return (
        <img className="Photo" style={styles.photo}
          src={props.photo.src}
          alt={props.photo.alt}
        />
  );
}


const styles = {
	photo: {
		maxWidth: '70%',
    height: 'auto',
    maxHeight: '350px',
		fontSize: 10,
    border: '1px solid #dbe4ed',
	}
};