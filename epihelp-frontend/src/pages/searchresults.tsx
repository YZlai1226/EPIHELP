import AppLayout from './../components/Layouts/AppLayout'
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { PostsManager } from './../components/posts/PostsManager';
import { useLocation } from 'react-router-dom';
import { Post } from './../models/post';

const SearchResults: React.FC = () => {
  const location = useLocation() as any;
  const [posts, setPosts] = useState<Post[]>();

  async function search(category: string, query: string) {
    type searchResponse = {
      data: Post[];
    };
    try {
      const res = await axios.get<searchResponse>(`http://localhost:8000/api/search/${category}/${query}`);
      setPosts(res.data.data);
    } catch (e) {
      return e;
    }
  }

  useEffect(() => {
    search(location.state.category, location.state.query)
  }, [location.state.category, location.state.query]);

  return (
    <AppLayout
      header={
        <h2 className="font-semibold text-xl text-white leading-tight">
          Search results
        </h2>
      }>
      <div className="py-12">
        {posts &&
          <PostsManager
            managerName={`You searched for: ${location.state.query}`}
            posts={posts}
          />
        }
      </div>
    </AppLayout>
  )
}

export default SearchResults
