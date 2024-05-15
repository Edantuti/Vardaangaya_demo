import Filler from '../../assets/Filler.svg';
import { ReactNode } from 'react';

export const ListContainer = ({
  children,
  order,
}: {
  children: ReactNode;
  order?: string;
}) => {
  return (
    <div className={`relative h-40 md:h-64 md:w-64 order-${order}`}>
      <ul className='flex h-full list-disc flex-col justify-center space-y-1 break-words px-6 text-xs uppercase md:space-y-3'>
        {children}
      </ul>
    </div>
  );
};
export const GridContainer = ({
  children,
  hidden,
}: {
  children: ReactNode;
  hidden?: true;
}) => {
  return (
    <div
      className={`h-fit w-fit grid-flow-dense grid-cols-1 place-content-center gap-2 sm:grid-cols-2 sm:grid-rows-2 ${hidden ? 'hidden md:grid' : 'grid'}`}
    >
      {children}
    </div>
  );
};
export const SectionContainer = ({ children }: { children: ReactNode }) => {
  return (
    <section className='flex flex-wrap items-center justify-between '>
      {children}
    </section>
  );
};

export const FillerComponent = () => {
  return (
    <div className='relative mx-auto my-auto hidden md:block'>
      <img src={Filler} />
    </div>
  );
};
