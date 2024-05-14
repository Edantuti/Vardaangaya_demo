import { useEffect } from 'react';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Introduction = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop:true},[Autoplay({delay:5000})]);
  useEffect(() => {
    if (emblaApi) console.log(emblaApi.slideNodes());
  }, [emblaApi]);
  return (
    <div
      className='my-10 min-h-[50vh] overflow-hidden rounded border'
      ref={emblaRef}
    >
      <div className='flex min-h-[50vh]'>
        <div className='relative min-h-[50vh] min-w-0 shrink-0 grow-0 basis-full bg-[url(src/assets/Intro.jpg)] bg-cover bg-top bg-no-repeat'>
          <h2 className='absolute top-1/2 mx-10 my-10 w-10 -translate-y-1/2 text-2xl text-white md:text-4xl'>
            Healthcare you've always deserved.
          </h2>
        </div>
        <div className='relative min-h-[50vh] min-w-0 shrink-0 grow-0 basis-full bg-[url(src/assets/Infrastructure.jpg)] bg-cover bg-center bg-no-repeat'>
          <h2 className='absolute top-1/2 mx-10 my-10 -translate-y-1/2 text-2xl text-white md:text-4xl'>
            Best In Class ICUs
          </h2>
        </div>
        <div className='relative min-h-[50vh] min-w-0 shrink-0 grow-0 basis-full bg-[url(src/assets/World_class_OT.jpg)] bg-cover bg-center bg-no-repeat'>
          <h2 className='absolute top-1/2 right-1/2 mx-8 my-5 -translate-y-1/2 text-2xl text-white md:text-4xl'>
            World Class Operation Theatre
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Introduction;
