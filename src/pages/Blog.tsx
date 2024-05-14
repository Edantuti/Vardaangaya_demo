import Knee_replacement from '../assets/After-Knee_replacement1.png';
import Arthroscopy from '../assets/gallery/image4.jpg';
import Spine from '../assets/Spine Surgery.png';
import Card from '../components/Blog/BlogCard';
export default function Blog() {
  return (
    <section className=' min-h-screen space-y-6 p-2 py-20'>
      <h2 className='text-2xl font-medium underline underline-offset-4'>
        Blog
      </h2>
      <section className='flex flex-wrap gap-2'>
        <Card
          title='Total Hip and Knee Replacement'
          description='Vardaan offers best hip and knee replacement in Gaya. We arrange best products from India, and we also ensure a quick recovery (called rehabilitation). Our patients start walking on their feet within 2 days of the surgery. Today, let us help you in understanding the hip and knee replacement.'
          photo={Knee_replacement}
          link={'/blog/Total Hip and Knee Replacement'}
        />
        <Card
          title='Arthroscopy & Sports Surgery'
          description='Vardaan provides timely and accurate diagnosis of all sports related injuries. It also provides best arthroscopy in Gaya. Sports are very important for overall well-being of a person, especially in the young age. Sons and daughters of Gaya have represented the state and country in various sports. However, the sports also sometimes causes sprains and other injuries. Vardaan Gaya addresses to these sports injuries on priority to ensure you are up and running (literally) in no time!'
          photo={Arthroscopy}
          link={'/blog/Arthroscopy & Sports Surgery'}
        />
        <Card
          title='Spine and backache Surgery'
          description='Vardaan Hospital in Gaya offers Spine surgery which is offered by very few hospitals. In the following paragraphs, we will try to summarise few of the common issues related to back and spines. In the coming months, Vardaan Hospital will also try to upload some videos on taking care of the back. Sitting and standing straight, for example, helps a lot and is easily achievable with some discipline.'
          photo={Spine}
          link={'/blog/Spine and backache Surgery'}
        />
      </section>
    </section>
  );
}
