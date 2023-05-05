import { useParams, useSearchParams } from "react-router-dom";

export const SingleBlog = () => {
  const params = useParams();
  console.log(params);

  return <div>SingleBlog</div>;
};
