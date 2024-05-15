import Infra from '../../assets/Infra.jpg';
import Team from '../../assets/Team.jpg';
import Infra1 from '../../assets/gallery/image1.jpg';
import Room from '../../assets/gallery/image3.jpg';
import { FillerComponent } from '../Facilities';
import {
  SpecialityGridContainer,
  SpecialityListContainer,
  SpecialitySectionContainer,
} from '../Facilities';
export default function Facilities() {
  return (
    <>
      <h2 className='md:mx-0 mx-auto w-fit md:py-10 py-5 d:text-4xl text-2xl font-medium'>
        Facilities & InfraStructure
      </h2>
      <SpecialitySectionContainer>
        <SpecialityGridContainer>
          <SpecialityListContainer order="1">
            <li>
              X-Ray Centre (High frequency X-ray with CareStream computerised
              radiography)
            </li>
            <li>Ultrasound (Starting August 2021)</li>
            <li>24x7 In-house Pharmacy</li>
            <li>
              Pathology collection centre (with Global
              Diagnostics, a channel partner of Lal Path Labs, New Delhi)
            </li>
          </SpecialityListContainer>
          <img
            src={Infra}
            alt='Infrastructure'
            className=' aspect-square rounded object-cover md:h-72 h-44 order-2'
          />
          <img
            src={Room}
            className='aspect-square rounded object-cover md:h-72 h-44'
            alt='Room'
          />
          <SpecialityListContainer order='3'>
            <li>
              State of art Operation Theatre (OT) with active infection control
              program
            </li>
            <li>Air-conditioned patient waiting room</li>
            <li>Suite rooms and Single ac Rooms</li>
            <li>Queue management system</li>
            
          </SpecialityListContainer>
        </SpecialityGridContainer>
        <SpecialityGridContainer>
        <FillerComponent/> 
          <img
            src={Infra1}
            alt='Infrastructure'
            className=' aspect-square rounded object-cover md:h-64 h-48'
          />
          <img
            src={Team}
            className='aspect-square rounded object-cover md:h-64 h-48'
            alt='Infrastructure'
          />
          <FillerComponent/>
        </SpecialityGridContainer>
      </SpecialitySectionContainer>
    </>
  );
}
