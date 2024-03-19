import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // This only needs to be imported once in your app

export default function LightboxElement(open, index, slides, setOpen) {
  return (
    <>
      <Lightbox
        index={index}
        slides={slides}
        open={open}
        close={() => setOpen(false)}
      />
    </>
  );
}
