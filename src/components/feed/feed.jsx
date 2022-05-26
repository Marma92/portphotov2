import {Gallery} from '../gallery'
import './feed.css'

export function Feed(props) {
  const galleries = props.galleries;
    return (
    <div>
      {galleries.map((gallery) =>
      <div>
        <h2 className='galleryTitle'>{gallery.title}</h2>
        <Gallery photos={gallery.photos} />
      </div>
      )}
    </div>
  );
}



