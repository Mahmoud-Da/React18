import area from "../assets/image/area.png";
const Area = () => {
  return (
    <>
      {" "}
      <div className="top-warpper-Areas">
        <div className="container-Areas">
          <h1>Hana shop</h1>
          <h2>
            〒220-0012 Shinogawaken Yokohamashi Nishiku 2036-1
            <p></p>
            <p>Business hours: 8:00-17:00</p>
            <p>Day off: Monday & 1/1</p>
          </h2>
        </div>
        <div className="fixed-img">
          <img src={area} alt="" className="map-size" />
        </div>
      </div>
    </>
  );
};

export default Area;
