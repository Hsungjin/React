import { useEffect, useState } from 'react';

import mockPosts from '../../mock/BlogPosts/data.json';
import { BlogPost } from '../../components/BlogPost';

interface Post {
  readonly id: number;
  readonly userId: number;
  readonly title: string;
  readonly body: string;
}

export const BlogPosts = () => {
  const [posts, setPosts] = useState<ReadonlyArray<Post>>([]);

  useEffect(() => {
    setTimeout(() => {
      setPosts(mockPosts);
    }, 1000);
  }, []);

  return (
    <>
      {posts.map((post) => (
        <BlogPost key={post.id} title={post.title} body={post.body} />
      ))}
    </>
  );
};
