import { useLocation } from 'react-router-dom';
import { PostMap } from '../Data';

export default function BlogPage() {
  const data = useLocation();
  const url = decodeURI(data.pathname);
  const blog_name = url.substring(url.lastIndexOf('/') + 1).toLowerCase();
  const blog_details = PostMap.get(blog_name);
  return (
    <section className='mx-10 min-h-screen py-10 md:mx-16 lg:mx-28 xl:mx-48'>
      <img
        src={blog_details?.image[0] || ''}
        alt={blog_details?.title}
        className='aspect-[7/1] h-40 w-80 rounded bg-slate-200 object-cover object-top md:h-96 md:w-auto'
      />
      <h1 className='py-2 text-3xl'>{blog_details?.title}</h1>
      <i className='italic'>{blog_details?.description}</i>

      {blog_details?.content.map((cnt, index) => (
        <p key={index + blog_details?.title} className='py-1'>
          {cnt}
        </p>
      ))}
    </section>
  );
}
