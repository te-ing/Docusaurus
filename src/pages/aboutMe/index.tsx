import Layout from '@theme/Layout';
import styles from './index.module.css';
import Intro from './Intro';
import Work from './Work';
import Education from './Education';
import Project from './Project';

export default function AboutMe(): JSX.Element {
  return (
    <Layout
      title={`김태중 블로그`}
      description="Description will go into a meta tag in <head />"
    >
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h1>김태중</h1>
            <h3>프론트엔드 개발자</h3>
          </div>
          <Intro />
          <Work />
          <Education />
          <Project />
        </div>
      </main>
    </Layout>
  );
}
