import Doctors from '../components/Home/Doctors';
import Introduction from '../components/Home/Introduction';
import News from '../components/Home/News';
import Speciality from '../components/Home/Speciality';
import VideoSection from '../components/Home/Video';
import Facilities from '../components/Home/Facilities';

export default function Home() {
  return (
    <>
      <Introduction />
      <Doctors />
      <Speciality />
      <Facilities />
      <News />
      <VideoSection />
    </>
  );
}
