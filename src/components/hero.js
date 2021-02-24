import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const HeroImage = styled(BackgroundImage)`
  background-image: url('/images/01.png');
  background-position: top 20% center;
  background-size: cover;
  height: 30vh;

  + * {
    margin-top: 0;
  }
`;

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #27694e 1rem, #ddbbff00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 5px #eeddff66;
    font-size: 2.25rem;
  }

  p {
    color: #222;
    margin-top: 0;
  }

  a {
    color: #222;
    margin-top: 0.5rem;
  }
`;

const Hero = () => {
  // sharp : childImageSharp -> rename childImageSharp to sharp
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "01.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <HeroImage Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h1>Home</h1>
        <p>Hello Frontend Masters!</p>
        <Link to="/about/">Learn about me &rarr;</Link>
      </TextBox>
    </HeroImage>
  );
};

export default Hero;
