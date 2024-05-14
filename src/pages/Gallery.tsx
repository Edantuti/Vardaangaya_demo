import PhotoGallery from '../components/Gallery/PhotoGallery';
import PhotoGalleryItem from '../components/Gallery/PhotoGalleryItem';

import Image1 from '../assets/gallery/image1.jpg';
import Image2 from '../assets/gallery/image2.jpg';
import Image3 from '../assets/gallery/image3.jpg';
import Image4 from '../assets/gallery/image4.jpg';
import Image5 from '../assets/gallery/image5.jpg';
import Image6 from '../assets/gallery/image6.jpg';
import Image7 from '../assets/gallery/image7.jpg';
import Image8 from '../assets/gallery/image8.jpg';
import Image9 from '../assets/gallery/image9.jpg';
import Image10 from '../assets/gallery/image10.jpg';
import Image11 from '../assets/gallery/image11.jpg';
import Image12 from '../assets/OT1.png';

export default function Gallery() {
  return (
    <>
      <section className=' min-h-screen px-1 py-10'>
        <h2 className='text-3xl font-medium underline underline-offset-4'>
          Photo Gallery
        </h2>
        <PhotoGallery>
          <PhotoGalleryItem src={Image1} alt={''} />
          <PhotoGalleryItem src={Image2} alt={''} />
          <PhotoGalleryItem src={Image3} alt={''} />
          <PhotoGalleryItem src={Image4} alt={''} />
          <PhotoGalleryItem src={Image5} alt={''} />
          <PhotoGalleryItem src={Image6} alt={''} />
          <PhotoGalleryItem src={Image7} alt={''} />
          <PhotoGalleryItem src={Image8} alt={''} />
          <PhotoGalleryItem src={Image9} alt={''} />
          <PhotoGalleryItem src={Image10} alt={''} />
          <PhotoGalleryItem src={Image11} alt={''} />
          <PhotoGalleryItem src={Image12} alt={''} />
        </PhotoGallery>
      </section>
    </>
  );
}
