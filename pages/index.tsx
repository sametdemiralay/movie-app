import React from "react";
import { NextPage } from "next";
// Fetch Hook
import { useFetchMovies } from "../api/fetchHooks";
// components
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Grid from "../components/Grid/Grid";
import Card from "../components/Card/Card";
import Spinner from "../components/Spinner/Spinner";

const Home: NextPage = () => {
  const [query, setQuery] = React.useState("");

  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);

  console.log(data);

  return (
    <main className='relative h-screen overscroll-y-scroll'>
      <Header />
      <Hero />
      <Grid />
      <Card />
      <Spinner />
    </main>
  );
};

export default Home;
