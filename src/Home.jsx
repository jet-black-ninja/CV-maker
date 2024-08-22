import DynamicTitle from "./components/shared/DynamicTitle";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <DynamicTitle title="Simple Resume - Home"/>
      <p className="text-lg mt-4">A simple resume builder for you to create your own resume</p>
    </div>
  );
}

export default Home;
