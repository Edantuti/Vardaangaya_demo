import { ReactNode } from 'react';

export const SpecialityListContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <div className='relative md:h-80 md:w-80'>
      <ul className='flex h-full list-disc flex-col justify-center space-y-1 px-6 text-xs uppercase md:space-y-4 md:text-base break-words'>
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
    <div className='grid h-fit w-fit grid-flow-dense grid-cols-2 grid-rows-2'>
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
