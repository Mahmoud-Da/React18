import { useParams } from "react-router-dom";

const UserDetail = () => {
  // const params = useParams();
  // console.log(params);

  // const [searchParam, setSearchParam] = useSearchParams();
  // console.log("searchParam: ", searchParam.get("name"));

  // const location = useLocation();
  // console.log(location);
  const { id } = useParams();

  return <p>User {id}</p>;
};

export default UserDetail;
