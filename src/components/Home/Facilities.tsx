import Infra from '../../assets/Infra.jpg';
import Team from '../../assets/Team.jpg';
import Infra1 from '../../assets/gallery/image1.jpg';
import Room from '../../assets/gallery/image3.jpg';
import { FillerComponent } from '../Facilities';
import { GridContainer, ListContainer, SectionContainer } from '../Facilities';
export default function Facilities() {
  return (
    <>
      <h2 className='d:text-4xl mx-auto w-fit py-5 text-2xl font-medium md:mx-0 md:py-10'>
        Facilities & InfraStructure
      </h2>
      <SectionContainer>
        <GridContainer>
          <img
            src={Infra}
            alt='Infrastructure'
            className=' aspect-square h-44 rounded object-cover md:h-64'
          />
          <ListContainer>
            <li>
              X-Ray Centre (High frequency X-ray with CareStream computerised
              radiography)
            </li>
            <li>Ultrasound (Starting August 2021)</li>
            <li>24x7 In-house Pharmacy</li>
            <li>
              Pathology collection centre (with Global Diagnostics, a channel
              partner of Lal Path Labs, New Delhi)
            </li>
          </ListContainer>

          <img
            src={Room}
            className='aspect-square h-44 rounded object-cover md:h-64'
            alt='Room'
          />
          <ListContainer>
            <li>
              State of art Operation Theatre (OT) with active infection control
              program
            </li>
            <li>Air-conditioned patient waiting room</li>
            <li>Suite rooms and Single ac Rooms</li>
            <li>Queue management system</li>
          </ListContainer>
        </GridContainer>
        <GridContainer hidden={true}>
          <FillerComponent />
          <img
            src={Infra1}
            alt='Infrastructure'
            className=' aspect-square h-48 rounded object-cover md:h-64'
          />
          <img
            src={Team}
            className='aspect-square h-48 rounded object-cover md:h-64'
            alt='Infrastructure'
          />
          <FillerComponent />
        </GridContainer>
      </SectionContainer>
    </>
  );
}
