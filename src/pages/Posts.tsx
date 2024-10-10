import { useQuery } from "@tanstack/react-query";
import { PostType } from "../types/post";
import { getPosts } from "../api/post";

const Posts = () => {
  const {
    data: posts,
    isPending,
    isError,
  } = useQuery<PostType[]>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error!!!</div>;

  return (
    <div>
      {posts.map((post: PostType) => {
        return <div key={post.id}>{post.id}</div>;
      })}
    </div>
  );
};

export default Posts;
