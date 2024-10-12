import { useQuery } from "@tanstack/react-query";
import { PostType } from "../types/post";
import { getPosts } from "../api/post";

const Posts = () => {
  const {
    data: posts,
    isPending,
    isError,
    error,
  } = useQuery<PostType[]>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div className="mt-20">
      <div
        className="flex flex-col gap-4
      "
      >
        {posts.map((post: PostType) => {
          return (
            <div key={post.id}>
              <div className="font-bold">{post.title}</div>
              <div>{post.body}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
