import { ReactNode, useEffect } from 'react';
import Intro from "../../assets/Intro.jpg"
import Infra from "../../assets/Infrastructure.jpg"
import OT from "../../assets/World_class_OT.jpg"
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const Introduction = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop:true},[Autoplay({delay:5000})]);
  useEffect(() => {
    if (emblaApi) console.log(emblaApi.slideNodes());
  }, [emblaApi]);
  return (
    <div
      className='my-10 xl:h-[50vh] lg:h-[40vh] overflow-hidden rounded border'
      ref={emblaRef}
    >
      <div className='flex xl:h-[50vh] lg:h-[40vh]'>
      <CarouselContainer>
          <img src={Intro} alt="Introduction" className="w-full aspect-video object-cover object-top" />
          <h2 className='absolute top-1/2 mx-10 md:my-10 w-10 -translate-y-1/2 text-xl text-white md:text-4xl'>
            Healthcare you've always deserved.
          </h2>
          </CarouselContainer>
        <CarouselContainer>
          <img src={Infra} alt="Infrastructure" className="w-full aspect-video object-cover object-center" />
          <h2 className='absolute top-1/2 mx-10 my-10 -translate-y-1/2 text-xl text-white md:text-4xl'>
            Best In Class ICUs
          </h2>
          </CarouselContainer>
          <CarouselContainer>
          <img src={OT} alt="Operation Theatre" className="w-full aspect-video object-cover object-center" />
          <h2 className='absolute top-1/2 right-1/2 mx-8 my-5 -translate-y-1/2 text-xl text-white md:text-4xl'>
            World Class Operation Theatre
          </h2>
          </CarouselContainer>
      </div>
    </div>
  );
};
export default Introduction;


const CarouselContainer = ({children}:{children:ReactNode})=>{
  return(
    <div className='relative xl:h-[50vh] lg:h-[40vh] min-w-0 shrink-0 grow-0 basis-full'>
      {children}
    </div>
  )
}