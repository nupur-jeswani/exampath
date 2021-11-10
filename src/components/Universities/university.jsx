import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./university.css";

const University = ({ university, setRouteStep }) => {
  return (
    <>
      <Button onClick={() => setRouteStep(0)}>Go Back</Button>
      <div className="container-fluid">
        <div className="container">
          <div className="backdrop">
            <img src={university["college image"]} alt="" />
            <div className="container-fluid image-content">
              <h1 className="fw-bolder text-uppercase">{university["college name"]}</h1>
              <h4>Country: {university["country"]}</h4>
            </div>
          </div>

        </div>
        <h3>ABOUT THIS COLLEGE</h3>
        <p>{university["about"]}</p>

        <img src={university["placementImage"]} alt="" />
      </div>
      <Button onClick={() => setRouteStep(0)}>Go Back</Button>
    </>
  );
}

export default University;