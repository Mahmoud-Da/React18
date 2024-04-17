import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

interface Photos {
  id: number;
  title: string;
  url: string;
}

const WorkingWithAsyncAndAwait = () => {
  const [photos, setPhotos] = useState<Photos[]>([]);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    try {
      const res = await axios.get<Photos[]>(
        "https://jsonplaceholder.typicode.com/photosr"
      );
      setPhotos(res.data);
    } catch (error) {
      setError((error as AxiosError).message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <h2>WorkingWithAsyncAndAwait</h2>
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
      {error && <p className="text-danger">{error}</p>}
    </>
  );
};

export default WorkingWithAsyncAndAwait;
