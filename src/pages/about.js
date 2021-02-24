import React from 'react';
// gatsby has reach router
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>Hello Frontend Masters!</h1>
    <p>This is my personal web site.</p>
    <Link to="/">&larr; back home</Link>
  </Layout>
);
