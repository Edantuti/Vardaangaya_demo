import { FC } from 'react';
import { FiExternalLink } from 'react-icons/fi';

type PostType = {
  title: string;
  description: string;
  image_url: string;
  image_alt: string;
  sources: string;
};

interface IUpdatesPost {
  post: PostType;
}

const UpdatesPost: FC<IUpdatesPost> = ({ post }): JSX.Element => {
  return (
    <>
      <div className='mx-5 mt-5 grid h-[30%] gap-8 overflow-hidden rounded shadow shadow-neutral-400 sm:h-[20%] lg:grid-cols-2'>
        <img
          className='bg-slate-10 row-span-2 h-full w-full  rounded-l'
          src={post.image_url}
          alt={post.image_alt}
        />
        <div className='mx-5 mt-10 flex flex-col gap-5'>
          <h2 className='row-span-1 my-auto rounded font-roboto text-2xl '>
            {post.title}
          </h2>
          <p className='font-mono line-clamp-5 rounded text-sm'>
            {post.description}
          </p>
          <span className='flex  items-center text-blue-600'>
            <a href={post.sources}>Source</a> <FiExternalLink />
          </span>
        </div>
      </div>
    </>
  );
};

export default UpdatesPost;
