import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";

interface Photos {
  id: number;
  title: string;
  url: string;
}

const CancellingAFetchRequest = () => {
  const [photos, setPhotos] = useState<Photos[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controler = new AbortController();
    axios
      .get<Photos[]>("https://jsonplaceholder.typicode.com/photos", {
        signal: controler.signal,
      })
      .then((res) => setPhotos(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
  }, []);
  return (
    <>
      <h2>CancellingAFetchRequest</h2>
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

export default CancellingAFetchRequest;
