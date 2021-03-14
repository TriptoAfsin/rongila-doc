import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Vanilla CSS3',
    imageUrl: 'img/vanilla_1_css.svg',
    description: (
      <>
        Rongila is based on vanilla CSS3, it is heavily dependent on modern css features
        like - flexbox, keyframes etc
      </>
    ),
  },
  {
    title: 'Simple Class Based Usage',
    imageUrl: 'img/simple_1.svg',
    description: (
      <>
        Very easy to use class based usage, just use our classes and mix & match styles
      </>
    ),
  },
  {
    title: 'Out of the box animations',
    imageUrl: 'img/animation_1.svg',
    description: (
      <>
        Using animations in rongila will feel like breeze, rongila has numerous hover animations , element animations
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function about() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`About Rongila CSS`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">About Rongila CSS</h1>
          <div className={styles.buttons}>
          </div>
        </div>
      </header>
      <br></br>
      <p align="center">
          Rongila CSS started as a hobby project by <a href="https://github.com/TriptoAfsin">TriptoAfsin</a>, it's main goal was to make 
            small scale and hobby projects style easily.
      </p>
      <p align="center">
          Its built on vanilla css and uses modern css3 features, it requires no javascript dependencies. A simple link reference 
          in the header section is all you need.
      </p>
      <p align="center">
          It comes with plethora of animations, just call an animation class and animate that component
      </p>
      <p align="center">
          It is made responsive by default, so you can stay tension free
      </p>
      <p align="center">
          Rongila CSS mixed with your own javascript logic can be very powerful
      </p>
     
    </Layout>
  );
}

export default about;
