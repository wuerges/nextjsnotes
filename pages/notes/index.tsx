import Link from "next/link";
import { Note } from "../../components/note";
import styles from "../../styles/Home.module.css";

const Notes = () => {
  return [1, 2, 3].map((n) => (
    <div key={n} className={styles.card}>
      <Link href={`/notes/${n}`}>
        <a>
          <p>This is a link to the note below</p>
          <Note id={n} />
        </a>
      </Link>
    </div>
  ));
};
export default Notes;
