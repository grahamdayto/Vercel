import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Graham Ford Skills Assessment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h2 className={`mb-3 text-3xl font-semibold`} style={{ whiteSpace: "pre-line" }}>
        {"Graham Ford <br/> <br/> Skills Assesment".split("<br/>").join("\n")}
        </h2>


        <div className={styles.grid}>
          <a href="/questions/q1" className={styles.card}>
            <h3>Question 1 &rarr;</h3>
          </a>

          <a href="/questions/q2" className={styles.card}>
            <h3>Question 2 &rarr;</h3>
          </a>

          <a href="/questions/q3" className={styles.card}>
            <h3>Question 3 &rarr;</h3>
          </a>
          
          <a href="/questions/q4" className={styles.card}>
            <h3>Question 4 &rarr;</h3>
          </a>

          <a href="/questions/q5" className={styles.card}>
            <h3>Question 5 &rarr;</h3>
          </a>

          <a href="/questions/customerResponse1" className={styles.card}>
            <h3>Customer Response 1&rarr;</h3>
          </a>

          <a href="/questions/customerResponse2" className={styles.card}>
            <h3>Customer Response 2&rarr;</h3>
          </a>

          <a href="/questions/customerResponse3" className={styles.card}>
            <h3>Customer Response 3&rarr;</h3>
          </a>

          <a href="/questions/q9" className={styles.card}>
            <h3>Question 9 &rarr;</h3>
          </a>

          <a href="/questions/q10" className={styles.card}>
            <h3>Question 10 &rarr;</h3>
          </a>

        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
