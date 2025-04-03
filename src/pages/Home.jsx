import ThreadList from "../components/ThreadList";

const Home = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4 text-center">新着スレッド</h1>
        <ThreadList />
      </div>
    </>
  );
};

export default Home;
