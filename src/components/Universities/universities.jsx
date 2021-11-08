import { useState, useEffect } from "react";
import { Col, Container, Row, FormControl } from "react-bootstrap";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";
import University from "./university";

const Universities = () => {
  const [search, setSearch] = useState("");
  const [universities, setUniversities] = useState([]);

  // Custom Client-Side Rendering of University
  const [currentUniversity, setCurrentUniversity] = useState({});
  const [routeStep, setRouteStep] = useState(0);

  const handleFilter = (e) => {
    setSearch(e.target.value);
  }

  const handleUniversity = (university) => {
    setCurrentUniversity(university);
    setRouteStep(1);
  }

  useEffect(() => {
    const getDetails = async () => {
      const q = query(collection(db, "uni"));
      const docSnap = await getDocs(q);

      let universities = [];

      docSnap.forEach((doc) => {
        universities.push(doc.data());
      });

      setUniversities(universities);
    }
    
    getDetails();
  }, []);

  return (
    <Container className="mt-5">
      {routeStep === 0 && (
        <>
          <Row>
            <Col>
              <FormControl
                placeholder="Enter University Name"
                aria-label="University Name"
                aria-describedby="University Name"
                value={search}
                onChange={handleFilter}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            {universities.filter(university => (university["name"].toLowerCase().includes(search.toLowerCase()) || university["country"].toLowerCase().includes(search.toLowerCase()))).map((university, id) => (
              <Col key={id} md={4}>
                <div onClick={() => handleUniversity(university)} className="p-4">
                  {university["name"]}
                </div>
              </Col>
            ))}
          </Row>
        </>
      )}
      {routeStep === 1 && (
        <University university={currentUniversity} setRouteStep={setRouteStep} />
      )}
    </Container>
  );
}
 
export default Universities;