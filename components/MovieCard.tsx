import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

function MovieCard({ item }: { item: Movie }) {
  return (
    <Card className="rounded-xl">
      <CardContent className="p-0 relative bg-gray-900 rounded-lg overflow-hidden w-full h-[350px]">
        <Image
          src={"https://image.tmdb.org/t/p/original" + item.poster_path}
          width={300}
          height={600}
          alt="Picture of the author"
          className="rounded-xl absolute object-cover w-full h-full opacity-50"
        />
        <div className="relative p-6 text-white">
          <h2 className="text-2xl font-bold">{item.title}</h2>
        </div>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
