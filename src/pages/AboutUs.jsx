import DynamicTitle from '../components/shared/DynamicTitle';

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <DynamicTitle title="Simple Resume - About Us"/>
      <p className="text-lg mt-4">About Us!</p>
    </div>
  )
}

export default AboutUs;