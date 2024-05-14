import { PhotoView } from 'react-photo-view';

export default function PhotoGalleryItem({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <PhotoView src={src}>
      <img src={src} className='md:h-96 md:w-60 h-40 w-36 aspect-[9/16] rounded object-cover' alt={alt} />
    </PhotoView>
  );
}
