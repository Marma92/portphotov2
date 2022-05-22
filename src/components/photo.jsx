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
		maxWidth: '78%',
    height: 'auto',
    maxHeight: '400px',
		fontSize: 10,
	}
};