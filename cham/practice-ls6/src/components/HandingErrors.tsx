import axios from "axios";
import React, { useEffect, useState } from "react";

interface Photos {
  id: number;
  title: string;
  url: string;
}

const HandingErrors = () => {
  const [photos, setPhotos] = useState<Photos[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get<Photos[]>("https://jsonplaceholder.typicode.com/photosr")
      .then((res) => setPhotos(res.data))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      <h2>HandingErrors</h2>
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

export default HandingErrors;
