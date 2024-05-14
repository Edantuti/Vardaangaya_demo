import { Link } from 'react-router-dom';
import OT from '../../assets/World_class_OT.jpg';

export default function Infra() {
  const infraObjectList = [
    {
      id: 1,
      title:
        'State of the art Operation Theatre (OT) with active infection control program',
      description: '',
      url: 'operating theatre',
    },
    {
      id: 2,
      title: 'Intensive care and life support',
      description: '',
      url: 'intensive care and life support',
    },
    {
      id: 3,
      title:
        'Central Sterilisation Services through State of the Art Autoclaves',
      description: '',
      url: 'central sterilisation services',
    },
    {
      id: 4,
      title: 'Air-conditioned Patient Waiting Room',
      description: '',
      url: 'air-conditioned waiting room',
    },
    {
      id: 5,
      title: 'Suite Rooms and Single AC Rooms',
      description: '',
      url: 'suite rooms and single ac rooms',
    },
    {
      id: 6,
      title: 'Queue management software for optimising wait time in OPDs',
      description: '',
      url: 'queue management software',
    },
  ];
  return (
    <>
      <article className='mx-4 grid grid-rows-2 sm:grid-cols-2'>
        <div className='order-2 row-span-2 my-auto px-10 md:order-1'>
          <h2 className='mt-4 font-roboto text-2xl'>
            Infrastructure @ Vardaan
          </h2>
          <ul className='font-mono row-span-2 my-6 flex flex-col gap-4 text-xl'>
            {infraObjectList.map((obj) => (
              <li key={obj.id} className='flex flex-col'>
                <h3>{obj.title}</h3>
                {obj.description && (
                  <p className='line-clamp-1 text-sm'>{obj.description}</p>
                )}
                {obj.url && (
                  <Link
                    to={`/infra/${obj.url}`}
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
          src={OT}
          alt='gynaecology'
          className='order-1 row-span-2 mx-auto my-auto h-auto w-full rounded shadow-md shadow-neutral-400 md:order-2'
        />
      </article>
    </>
  );
}
