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
    <div className="mt-20">
      {posts.map((post: PostType) => {
        return (
          <div key={post.id}>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
