import { Link } from 'react-router-dom';
import Image8 from '../../assets/gallery/image8.jpg';

export default function Gynae() {
  const gynaeObjectList = [
    {
      id: 1,
      title: 'Normal Delivery',
      description: '',
      url: 'normal delivery',
    },
    {
      id: 2,
      title: 'Emergency and Elective Caesarean Section',
      description: '',
      url: 'emergency and elective caesarean section',
    },
    { id: 3, title: 'Hysteroscopy', description: '', url: 'hysteroscopy' },
    {
      id: 4,
      title: 'Laparoscopic Tubal Ligation',
      description: '',
      url: 'laparoscopic',
    },
    {
      id: 5,
      title: 'Hysterectomy/ Laparotomy',
      description: '',
      url: 'hysterectomy or  laparotomy',
    },
    {
      id: 6,
      title: 'Assisted Reproduction',
      description: '',
      url: 'assisted reproduction',
    },
  ];
  return (
    <>
      <article className='mx-4 grid grid-rows-2 sm:grid-cols-2'>
        <div className='order-2 row-span-2 my-auto px-10 md:order-1'>
          <h2 className='mt-4 font-roboto text-2xl'>Gynaecology</h2>
          <ul className='font-mono my-8 flex flex-col gap-4 text-xl'>
            {gynaeObjectList.map((obj) => (
              <li key={obj.id} className='flex flex-col'>
                <h3>{obj.title}</h3>
                {obj.description && (
                  <p className='line-clamp-1 text-sm'>{obj.description}</p>
                )}
                {obj.url && (
                  <Link
                    to={`/gynae/${obj.url}`}
                    className='text-xs text-blue-600'
                  >
                    Read more
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <img
          src={Image8}
          alt='gynaecology'
          className='order-1 row-span-2 mx-auto my-auto h-auto w-[80%] rounded shadow-md shadow-neutral-400 md:order-2'
        />
      </article>
    </>
  );
}
