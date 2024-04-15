import axios from "axios";
import React, { useEffect, useState } from "react";

interface Photos {
  id: number;
  title: string;
  url: string;
}

const UnderstandingHttpRequests = () => {
  const [photos, setPhotos] = useState<Photos[]>([]);
  useEffect(() => {
    axios
      .get<Photos[]>("https://jsonplaceholder.typicode.com/photos")
      .then((res) => setPhotos(res.data));
  }, []);
  return (
    <>
      <h2>UnderstandingHttpRequests</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Url</th>
          </tr>
        </thead>
        <tbody>
          {photos.map((photo) => (
            <tr key={photo.id}>
              <th scope="row">{photo.id}</th>
              <th>{photo.title}</th>
              <th>{photo.url}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UnderstandingHttpRequests;
