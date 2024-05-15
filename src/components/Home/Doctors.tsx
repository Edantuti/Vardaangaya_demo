import Megha from '../../assets/DrMegha.jpg';
import Anupam from '../../assets/DrAnupam.jpg';
import DQuotes from '../../assets/Double Quotes.svg';

const Doctors = () => {
  return (
    <>
      <h2 className='mx-auto mt-10 py-2 md:text-4xl text-2xl'>Our Doctors</h2>
      <section className='flex flex-wrap items-center justify-between mx-auto'>
        <div className='lg:w-1/2 space-y-2 '>          
          <DoctorDescription title={"Dr. Kumar Anupam"} description={" is a dynamic surgeon with particular interest in Joint Replacement, Arthroscopic/Open ligament Reconstruction snd trauma surgeries. He has extensively trained at Sports Injury Centre, Safdarjung Hospital, New Delhi for such surgeries following which he was associated with Metro Multispeciality Hospital, Delhi-NCR as Consultant in Orthopaedics. He has experience of more than 2000 Joint surgeries like Total Hip Replacement, Total Knee Replacement and Arthroscopic Knee & Shoulder Stabilization procedures. He has to his credit many complex surgeris like Pelvi-acetabular trauma, Spinal fracture dislocation and peri-articular surgeries of knee, ankle, elbow and wrist."} />
          <DoctorDescription title={"Dr. Megha Sinha"} description={` MS is an alumnus of Safdarjung Hospital, New Delhi. Having trained at Asia’s busiest Obstetric and Gynaecology Unit, she holds plethora of experience in handling high risk obstetrics like Abruption, placenta Previa, placenta accreta and previous lscs. She also holds fellowship in minimal access surgery and assisted reproductive technology. She runs a dedicated 24*7 obstetric unit handling round the clock emergency.`} />
        </div>
        <div className='grid h-fit w-fit grid-cols-2 grid-rows-2'>
          <img
            src={Anupam}
            alt='Dr. Kumar Anupam'
            className=' aspect-square rounded lg:h-48 h-36'
          />
          <DoctorTitle value={'Dr. Kumar Anupam'} />
          <DoctorTitle value={'Dr. Megha Sinha'} />
          <img
            src={Megha}
            className='aspect-square rounded lg:h-48 h-36'
            alt='Dr. Megha Sinha'
          />
        </div>
      </section>
    </>
  );
};

const DoctorDescription = ({title,description}:{title:string, description:string}) => {
  return (
    <p className='rounded border p-6 text-sm 2xl:text-base'>
      <span className='xl:text-2xl text-lg'>{title}</span>,{description}
    </p>
  );
};

const DoctorTitle = ({ value }: { value: string }) => {
  return (
    <div className='relative mx-auto my-auto'>
      <img src={DQuotes} className='absolute -z-10' />
      <p className={`ml-4 mt-2 xl:text-2xl lg:text-lg md:text-sm`}>{value}</p>
    </div>
  );
};

export default Doctors;
