import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const University = ({ university, setRouteStep }) => {
  return (
    <>
      <Button onClick={() => setRouteStep(0)}>Go Back</Button>
      <div className="container">
        <h1>{university["college name"]}</h1>
        <p>Country: {university["country"]}</p>
      </div>
      <Button onClick={() => setRouteStep(0)}>Go Back</Button>
    </>
  );
}

export default University;