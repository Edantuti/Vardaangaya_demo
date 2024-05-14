import OT from '../../assets/World_class_OT.jpg';
import Ortho from '../../assets/Ortho.jpg';
import P1 from '../../assets/OT1.png';
import P2 from '../../assets/Computerised_Alignment.png';
import Filler from '../../assets/Filler.svg';
import {
  SpecialityGridContainer,
  SpecialityListContainer,
  SpecialitySectionContainer,
} from '../Facilities';
export default function Speciality() {
  return (
    <>
      <h2 className='py-10 text-4xl font-medium'>Speciality</h2>
      <SpecialitySectionContainer>
        <SpecialityGridContainer>
          <img
            src={OT}
            alt='Operation Theatre'
            className=' aspect-square rounded object-cover md:h-72 h-44'
          />
          <SpecialityListContainer>
            <li>Total Hip and Knee Replacement</li>
            <li>Arthroscopy & Sports Surgery</li>
            <li>Spine and Backache Surgery</li>
            <li>Complex Orthopaedics Trauma</li>
            <li>Rheumatology</li>
          </SpecialityListContainer>
          <SpecialityListContainer>
            <li>Normal Delivery</li>
            <li>Emergency and Elective Caesarean Section</li>
            <li>Hysteroscopy</li>
            <li>Laparoscopic Tubal Ligation</li>
            <li>Hysterectomy/Laparotomy</li>
          </SpecialityListContainer>
          <img
            src={Ortho}
            className='aspect-square rounded object-cover md:h-72 h-44'
            alt='Ortho'
          />
        </SpecialityGridContainer>
        <SpecialityGridContainer>
          <img
            src={P1}
            alt='P1'
            className=' aspect-square rounded object-cover md:h-64 h-48'
          />
          <div className='relative mx-auto my-auto'>
            <img src={Filler} />
          </div>
          <div className='relative mx-auto my-auto'>
            <img src={Filler} />
          </div>
          <img
            src={P2}
            className='aspect-square rounded object-cover md:h-64 h-48'
            alt='Dr. Megha Sinha'
          />
        </SpecialityGridContainer>
      </SpecialitySectionContainer>
    </>
  );
}
