import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ReadLink from './readLink';

const PostPreview = ({ item }) => {
  return (
    <article
      css={css`
        border-bottom: 1px solid #ddd;
        display: flex;
        margin-top: 0;
        padding-bottom: 1rem;

        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <Link
        to={item.slug}
        css={css`
          margin: 1rem 1rem 0 0;
          width: 100px;
        `}
      >
        <Image
          css={css`
            * {
              margin-top: 0;
            }
          `}
          alt={item.title}
          fluid={item.image.sharp.fluid}
        />
      </Link>
      <div>
        <Link to={item.slug}>
          <h3>{item.title}</h3>
        </Link>
        <p>{item.excerpt}</p>
        <ReadLink to={item.slug}>Read this post &rarr;</ReadLink>
      </div>
    </article>
  );
};

export default PostPreview;
