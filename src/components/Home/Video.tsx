import { FaYoutube, FaFacebook } from 'react-icons/fa6';
export default function VideoSection() {
  return (
    <>
      <h2 className='py-10 text-4xl font-medium'>Video</h2>
      <section className='pb-10'>
        <iframe
          className='rounded aspect-video h-full w-full'
          width='1280'
          height='720'
          src='https://www.youtube.com/embed/HKKLRl38VXk'
          title='Come walk with us, again!'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
        <div className=' flex items-center gap-4 py-4 text-2xl'>
          <p>Follow us on</p>
          <a href="https://www.youtube.com/channel/UC8_GuJg7y0cqghgSZj8xGBA" target="_blank"><FaYoutube/></a>
          <a href="https://www.facebook.com/Vardaan-hospital-and-maternity-centre-105063481385168/"><FaFacebook /></a>
        </div>
      </section>
    </>
  );
}
