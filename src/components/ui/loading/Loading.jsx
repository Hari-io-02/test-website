import style from "./Loading.module.css";
const Loading = () => {
  return (
    <div className="bg-black h-screen w-screen">
      <div className={style.loading}>
        <div className={style.spinnerWrapper}>
          <span className={style.spinnerText}>Loading</span>
          <span className={style.spinner}></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
