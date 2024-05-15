import OT from '../../assets/World_class_OT.jpg';
import Ortho from '../../assets/Ortho.jpg';
import P1 from '../../assets/OT1.png';
import P2 from '../../assets/Computerised_Alignment.png';

import {
  FillerComponent,
  SpecialityGridContainer,
  SpecialityListContainer,
  SpecialitySectionContainer,
} from '../Facilities';
export default function Speciality() {
  return (
    <>
      <h2 className='py-10 md:text-4xl text-2xl font-medium'>Speciality</h2>
      <SpecialitySectionContainer>
        <SpecialityGridContainer>
          <img
            src={OT}
            alt='Operation Theatre'
            className=' aspect-square rounded object-cover md:h-72 h-40'
          />
          <SpecialityListContainer order="1" >
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
            className='aspect-square rounded object-cover md:h-72 h-40'
            alt='Ortho'
          />
        </SpecialityGridContainer>
        <SpecialityGridContainer>
          <img
            src={P1}
            alt='P1'
            className=' aspect-square rounded object-cover md:h-64 h-40'
          />
          <FillerComponent/>
          <FillerComponent/>
          <img
            src={P2}
            className='aspect-square rounded object-cover md:h-64 h-40'
            alt='Dr. Megha Sinha'
          />
        </SpecialityGridContainer>
      </SpecialitySectionContainer>
    </>
  );
}
