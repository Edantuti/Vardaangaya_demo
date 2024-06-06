import { MdOutlineLocalPhone, MdOutlineMarkEmailUnread } from 'react-icons/md';
import { ReactElement } from 'react';
export default function Contact(): JSX.Element {
  return (
    <>
      <section className='mx-auto w-fit min-h-screen space-y-6 py-20'>
        <h2 className='lg:text-4xl text-xl font-medium underline underline-offset-8'>
          Contact-us
        </h2>
        <p className='py-4 xl:text-lg text-sm'>
          We are available 24x7 over the phone. For all your needs give us a
          call at{' '}
          <a href='tel:+916203188133' className='hover:underline'>
            (+91) 62031-88-133
          </a>
          . You can also always visit us at our centre.
        </p>
        <div className='flex flex-wrap items-center gap-40'>
          <iframe
            className='aspect-video lg:w-1/2 lg:h-1/2 w-full h-full rounded border-none'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.3563559092077!2d84.9986428!3d24.7832483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32bd204dfb3f9%3A0xb146c96ce50e654b!2sVardaan%20Hospital%20%26%20Maternity%20Centre!5e0!3m2!1sen!2sin!4v1685556938775!5m2!1sen!2sin'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
          <div className='space-y-14'>
            <ContactDetailCard
              Icon={() => (
                <MdOutlineLocalPhone className='col-span-1 row-span-2 h-12 w-12 rounded-full border border-indigo-200 bg-sky-200 p-3' />
              )}
              type='Phone Number'
              link='tel:+916203188133'
              field='+916203188133'
            />
            <ContactDetailCard
              Icon={() => (
                <MdOutlineMarkEmailUnread className='col-span-1 row-span-2 h-12 w-12 rounded-full border border-indigo-200 bg-sky-200 p-3' />
              )}
              type='Email'
              link='mailto:contact@vardaangaya.com'
              field='contact@vardaangaya.com'
            />
            <ContactDetailCard
              Icon={() => (
                <MdOutlineMarkEmailUnread className='col-span-1 row-span-2 h-12 w-12 rounded-full border border-indigo-200 bg-sky-200 p-3' />
              )}
              type='Location'
              link='https://goo.gl/maps/GQ7vDQbR9p3r1ChK6'
              field='Visit the Hospital'
            />
          </div>
        </div>
      </section>
    </>
  );
}

const ContactDetailCard = ({
  Icon,
  type,
  field,
  link,
}: {
  Icon: () => ReactElement;
  type: string;
  link: string;
  field: string;
}) => {
  return (
    <div className='grid grid-cols-[3.5rem_repeat(1,minmax(0,1fr))] grid-rows-2 items-center'>
      <Icon />
      <h5 className='text-md font-medium'>{type}</h5>
      {type === 'Email' && (
        <a href={`mailto:${link}`} title={type} className='text-xs hover:underline'>
          {field}
        </a>
      )}
      {type === 'Phone Number' && (
        <a href={`tel:${link}`} title={type} className='text-xs hover:underline'>
          {field}
        </a>
      )}
      {type === 'Location' && (
        <a href={link} title={type} className='text-xs hover:underline'>
          {field}{' '}
        </a>
      )}
    </div>
  );
};
