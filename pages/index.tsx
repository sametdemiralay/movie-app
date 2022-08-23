import { NextPage } from "next";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
  return (
    <main className='relative h-screen overscroll-y-scroll'>
      <Header />
      <p>imdb</p>
    </main>
  );
};

export default Home;
