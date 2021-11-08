import { Button } from "react-bootstrap";

const University = ({ university, setRouteStep }) => {
  return (
    <div>
      <h1>{university["name"]}</h1>
      <h3>{university["country"]}</h3>
      <Button onClick={() => setRouteStep(0)}>Go Back</Button>
    </div>
  );
}
 
export default University;