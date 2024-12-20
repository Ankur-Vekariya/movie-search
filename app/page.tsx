"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Header from "@/components/Header";
import MovieCard from "@/components/MovieCard";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [trendingList, setTrendingList] = useState<Movie[]>([]);

  const fetchMovies = () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWM2ZDY0YjJmNjVjMjM0NjM0OTY1Yzg4NDhjNDYwMCIsIm5iZiI6MTczMTQ3OTE2MC45MTUsInN1YiI6IjY3MzQ0Njc4M2U4MmJhNzlmY2NmMWZlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w7vHyKaGeCvD7DTwX_13S3xyeoK39Wfue2m_X3HlDhU",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setMovieList(json.results);
      })
      .catch((err) => console.error(err));
  };

  const fetchTrending = () => {
    const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWM2ZDY0YjJmNjVjMjM0NjM0OTY1Yzg4NDhjNDYwMCIsIm5iZiI6MTczMTQ3OTE2MC45MTUsInN1YiI6IjY3MzQ0Njc4M2U4MmJhNzlmY2NmMWZlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w7vHyKaGeCvD7DTwX_13S3xyeoK39Wfue2m_X3HlDhU",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => setTrendingList(json.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMovies();
    fetchTrending();
  }, [search]);

  return (
    <div className="gap-14">
      <Header search={search} setSearch={setSearch} />
      <div className=" pr-20 pl-20 pt-[100px]">
        <Carousel>
          <CarouselContent>
            {trendingList.length > 0 &&
              trendingList.map((item, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="flex flex-col items-center justify-center align-middle "
                  >
                    <div className="relative bg-gray-900 rounded-lg overflow-hidden sm:w-[400px] sm:h-[200px] md:w-[600] md:h-[300px] lg:w-[800] lg:h-[400px]">
                      <Image
                        src={
                          "https://image.tmdb.org/t/p/original" +
                          item.backdrop_path
                        }
                        width={600}
                        height={300}
                        alt="Picture of the author"
                        className="rounded-xl absolute inset-0 w-full h-full object-cover opacity-50"
                      />
                      <div className="relative p-6 text-white">
                        <h2 className="text-3xl font-bold">{item.title}</h2>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {movieList.length > 0 ? (
          movieList.map((item, index) => {
            return <MovieCard item={item} key={index} />;
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}
