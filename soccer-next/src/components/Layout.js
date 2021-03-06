import style from "styles/Layout.module.css";
import Nav from "components/Nav";
export default function Layout({ children }){
  return (
    <>
    <Nav/>
      <div className={style.container}>
        <main className={style.main}>{children}</main>
      </div>
    </>
  );
}