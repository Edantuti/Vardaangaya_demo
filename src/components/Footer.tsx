import { FaFacebook, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='flex h-20 items-center justify-between rounded-t bg-blue-800 px-10 py-2'>
      <span className='text-sm text-white'>
        {' '}
        &copy; 2023 Vardaan Hospital. All rights reserved.{' '}
      </span>
      <aside className='flex gap-6'>
        <a
          href='https://www.facebook.com/Vardaan-hospital-and-maternity-centre-105063481385168/'
          title='Facebook'
          target='_blank'
        >
          {<FaFacebook className='h-4 w-4 fill-white' />}
        </a>
        <a
          href='https://www.youtube.com/channel/UC8_GuJg7y0cqghgSZj8xGBA'
          title='Youtube'
          target='_blank'
        >
          {<FaYoutube className='h-4  w-4 fill-white' />}
        </a>
      </aside>
    </footer>
  );
}
