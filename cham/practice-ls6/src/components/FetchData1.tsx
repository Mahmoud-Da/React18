import React, { useEffect, useState } from "react";
import axios from "axios";

interface Photos {
  id: number;
  title: string;
  url: string;
}

const FetchData1 = () => {
  const [photos, setPhotos] = useState<Photos[]>([]);
  useEffect(() => {
    axios
      .get<Photos[]>("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setPhotos(res.data));
  }, []);
  return (
    <>
      <h2>FetchData1</h2>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            {photo.title}
            <br />
            {photo.url}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchData1;
