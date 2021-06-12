import styles from './Quote.module.css';

const Quote = ({ quote, name, title }) => {
  return (
    <blockquote className={styles.quote}>
      <p>{quote}</p>
      <cite className={styles.author}>
        - {name}, <em>{title}</em>.
      </cite>
    </blockquote>
  );
};

export default Quote;
