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
      <img
        src={src}
        className='aspect-[9/16] h-40 w-36 rounded object-cover md:h-96 md:w-60'
        alt={alt}
      />
    </PhotoView>
  );
}
