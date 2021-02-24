import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/usePosts';
import PostPreview from '../components/PostPreview';
import Hero from '../components/hero';
import Instagram from '../components/Instagram';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h2>Read me blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} item={post} />
        ))}
        <Instagram />
      </Layout>
    </>
  );
};
