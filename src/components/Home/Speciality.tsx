import OT from '../../assets/World_class_OT.jpg';
import Ortho from '../../assets/Ortho.jpg';
import P1 from '../../assets/OT1.png';
import P2 from '../../assets/Computerised_Alignment.png';

import {
  FillerComponent,
  GridContainer,
  ListContainer,
  SectionContainer,
} from '../Facilities';
export default function Speciality() {
  return (
    <>
      <h2 className='py-10 text-2xl font-medium md:text-4xl'>Speciality</h2>
      <SectionContainer>
        <GridContainer>
          <img
            src={OT}
            alt='Operation Theatre'
            className=' aspect-square h-40 rounded object-cover md:h-64'
          />
          <ListContainer>
            <li>Total Hip and Knee Replacement</li>
            <li>Arthroscopy & Sports Surgery</li>
            <li>Spine and Backache Surgery</li>
            <li>Complex Orthopaedics Trauma</li>
            <li>Rheumatology</li>
          </ListContainer>
          <img
            src={Ortho}
            className='aspect-square h-40 rounded object-cover md:h-64'
            alt='Ortho'
          />
          <ListContainer>
            <li>Normal Delivery</li>
            <li>Emergency and Elective Caesarean Section</li>
            <li>Hysteroscopy</li>
            <li>Laparoscopic Tubal Ligation</li>
            <li>Hysterectomy/Laparotomy</li>
          </ListContainer>
        </GridContainer>
        <GridContainer hidden={true}>
          <img
            src={P1}
            alt='P1'
            className=' aspect-square h-40 rounded object-cover md:h-64'
          />
          <FillerComponent />
          <FillerComponent />
          <img
            src={P2}
            className='aspect-square h-40 rounded object-cover md:h-64'
            alt='Dr. Megha Sinha'
          />
        </GridContainer>
      </SectionContainer>
    </>
  );
}
