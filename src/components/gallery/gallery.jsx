import React, { useState } from "react";
import { Photo } from "../photo/photo";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const Gallery = ({ photos }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div style={styles.gallery}>
      {photos.map((photo, index) => (
        <div key={index} style={styles.container}>
          <div style={styles.photoContainer}>
            <Photo
              photo={photo}
              onClick={() => {
                setOpen(true);
                setIndex(index);
              }}
            />
          </div>
        </div>
      ))}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={photos}
        index={index}
      />
    </div>
  );
};

const styles = {
  gallery: {
    display: "table",
    lineHeight: "50px",
    width: "100%",
  },
  photoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "400px",
  },
  container: {
    display: "inline-block",
    position: "relative",
    width: "33.33%",
    float: "left",
  },
};
