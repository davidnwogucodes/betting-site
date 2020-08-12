import style from "../styles/index.module.scss";

export default function index() {
  return (
    <div className={style.background}>
      <div className={style.something}></div>
      <div className={style.something2}></div>
      <div className={style.indexhead}>
        <span className={style.betsite}>Betsite</span>
        <span className={style.support}>Support</span>
        <span className={style.contacts}>Contacts</span>
        <span className={style.about}>About</span>
        <span className={style.usage}>Usage</span>
      </div>
    </div>
  );
}
