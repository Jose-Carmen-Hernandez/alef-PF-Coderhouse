import "./loading.css";
const Loading = () => {
  return (
    <>
      <h1 className="loading-title">Cargando información...</h1>
      <div className="container-loading">
        <div className="container-pacman">
          <svg className="pacman">
            <circle cx="50" cy="50" r="25"></circle>
          </svg>
          <svg className="ojo">
            <circle cx="6" cy="6" r="6"></circle>
          </svg>
          <svg className="pildora">
            <polyline points="0,7 240,7"></polyline>
          </svg>
        </div>
      </div>
    </>
  );
};
export default Loading;
