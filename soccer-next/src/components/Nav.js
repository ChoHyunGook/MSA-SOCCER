import Link from "next/link";
import styles from "styles/Nav.module.css";

export default function Nav(){
    return (
        <nav className={styles.nav}>
        <ul>
        <li className={styles.li}> <Link href='/'>Home</Link> </li>
        <li className={styles.li}> <Link href='/basic/login'>Login</Link> </li>
        <li className={styles.li}> <Link href='/basic/counter'>Counter</Link> </li>
        <li className={styles.li}> <Link href='/basic/calc'>Calc</Link> </li>
        <li className={styles.li}> <Link href='/basic/bmi'>Bmi</Link> </li>
        <li className={styles.li}> <Link href='/basic/grade'>Grade</Link> </li>
        </ul>
        </nav>
    );
}