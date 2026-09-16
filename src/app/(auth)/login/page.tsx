import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <h1 className={styles.title}>
          Entrar
        </h1>
      </section>
    </main>
  );
}