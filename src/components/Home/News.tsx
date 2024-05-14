import { PhotoProvider, PhotoView } from 'react-photo-view';
import News1 from '../../assets/Computer_Navigation_Alignment.jpg';
import News2 from '../../assets/Computer_Navigation_Alignment_2.jpg';
import News3 from '../../assets/Computer_Navigation_Alignment_3.jpg';

export default function News() {
  return (
    <>
      <h2 className='py-10 text-4xl font-medium'>News & Events</h2>
      <section className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        <figure className='space-y-4'>
          <span>
            <img
              src={`https://res.cloudinary.com/cloudinarynew026/image/upload/c_scale,q_auto,e_sharpen/v1684657277/news/details/May2023/n4nfd125e8a-be16-4ce8-87e0-ac8501bf14e2.jpg`}
              className='rounded'
              alt=''
            />
            <span className='text-xs text-neutral-400'>
              Image taken from news4nation
            </span>
          </span>
          <figcaption className='space-y-4'>
            <h3 className='font-medium md:text-2xl '>
              France's computer navigation in knee transplant started for the
              first time in the country from Gaya
            </h3>
            <p className='text-xs md:text-sm'>
              It is great news that knee-replacement surgery in Gaya has started
              using Augmented Reality Computer Navigation. Dr. Kumar Anupam
              (Orthopaedic), Director of Vardan Hospital located at Gewalbigha
              Munni Masjid Gaya said that Augmented Reality Computer Navigation
              in knee replacement is a boon for patients. He said that for the
              first time in the country computer navigation has been started in
              Gaya by the French team in knee transplant. It is worth mentioning
              that about 500 knee transplants have been done by Dr. Kumar
              Anupam.
            </p>
            <a
              href='https://news4nation.com/news/france-s-computer-navigation-in-knee-transplant-started-for-the-first-time-in-the-country-from-gaya-732099'
              className='text-blue-600'
              target='_blank'
            >
              Source
            </a>
          </figcaption>
        </figure>
        <article>
          <h3 className='pb-5 text-xl font-medium'>Featured in NewsPaper</h3>
          <div className='flex flex-wrap gap-5'>
            <PhotoProvider>
              <PhotoView src={News1}>
                <img
                  src={News1}
                  className='aspect-square h-60 rounded border border-neutral-400 object-cover'
                />
              </PhotoView>
              <PhotoView src={News2}>
                <img
                  src={News2}
                  className='aspect-square h-60 rounded border border-neutral-400 object-cover'
                />
              </PhotoView>
              <PhotoView src={News3}>
                <img
                  src={News3}
                  className='aspect-square h-60 rounded border border-neutral-400 object-cover'
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        </article>
      </section>
    </>
  );
}
