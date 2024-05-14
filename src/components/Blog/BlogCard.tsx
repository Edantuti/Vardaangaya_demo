import { Link } from 'react-router-dom';

export default function Card({
  title,
  description,
  photo,
  link,
}: {
  title: string;
  description: string;
  photo: string;
  link: string;
}) {
  return (
    <article className='group h-[21rem] w-80 overflow-hidden rounded border p-2 shadow-sm'>
      <img
        src={photo}
        className='h-40 w-full rounded object-cover object-top transition-all group-hover:h-44'
        alt={title}
      />
      <h3 className=' py-2 text-lg'>{title}</h3>
      <p className='line-clamp-4 text-xs'>{description}</p>
      <aside>
        <Link to={link} className='text-sm text-blue-700'>
          {' '}
          Read More{' '}
        </Link>
      </aside>
    </article>
  );
}
