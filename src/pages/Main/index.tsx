import { useMainPageStyles } from "./styles";

const MainPage = () => {
  const classes = useMainPageStyles();
  return (
    <div>
      <h1>CHESS IS HERE, MOTHERFUCKER!</h1>
      <h2 className={classes.app}>APP is HERE!</h2>
      <h3>Main page is here!</h3>
    </div>
  );
};

export default MainPage;
