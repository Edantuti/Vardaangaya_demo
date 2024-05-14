import React from 'react';
import { PhotoProvider } from 'react-photo-view';

export default function PhotoGallery({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className='my-8 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10'>
      <PhotoProvider>{children}</PhotoProvider>
    </div>
  );
}
