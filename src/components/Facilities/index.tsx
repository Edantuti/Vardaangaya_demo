import Filler from '../../assets/Filler.svg';
import { ReactNode } from 'react';

export const SpecialityListContainer = ({
  children,order
}: {
  children: ReactNode;
  order?:string
}) => {
  return (
    <div className={`relative md:h-64 md:w-64 h-40 order-${order}`}>
      <ul className='flex h-full list-disc flex-col justify-center space-y-1 px-6 text-xs uppercase md:space-y-3 break-words'>
        {children}
      </ul>
    </div>
  );
};
export const SpecialityGridContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <div className='grid h-fit w-fit grid-flow-dense md:grid-cols-2 md:grid-rows-2 grid-cols-1 place-content-center gap-2'>
      {children}
    </div>
  );
};
export const SpecialitySectionContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <section className='flex flex-wrap items-center justify-between '>
      {children}
    </section>
  );
};

export const FillerComponent = () => {
  return (
    <div className='relative mx-auto my-auto md:block hidden'>
      <img src={Filler} />
    </div>
  )
}