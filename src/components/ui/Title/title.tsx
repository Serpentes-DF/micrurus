import styles from "./title.module.css";

export default function Title({ title }: { title: string }) {
  return (
    <>
      <h1 className={styles.Title}>{title}</h1>
    </>
  );
}
