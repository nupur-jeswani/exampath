import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./university.css";
import { doc, getDoc, getDocs, query, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";

const University = ({ university, setRouteStep }) => {

  const [subDoc, setSubDoc] = useState({});
  const [subDoc2, setSubDoc2] = useState({});
  const [subDoc3, setSubDoc3] = useState([]);
  const [subDoc4, setSubDoc4] = useState({});

  const id = university["id"];

  useEffect(() => {
    const getDetails = async () => {
      const q = doc(db, "universities", id, "Admission Information", "Information Listing");
      const docSnap = await getDoc(q);

      if (docSnap.exists()) {
        let data = docSnap.data();
        setSubDoc(data);
      } else {
        console.log("No such Document found!");
      }
    }

    getDetails();
  }, []);

  useEffect(() => {
    const getDetails = async () => {
      const ca = doc(db, "universities", id, "Campus Accomodation", "Details");
      const caSnap = await getDoc(ca);

      if (caSnap.exists()) {
        let data = caSnap.data();
        setSubDoc2(data);
      } else {
        console.log("No such Document found!");
      }
    }

    getDetails();
  }, []);

  useEffect(() => {
    const getDetails = async () => {
      const ci = query(collection(db, "universities", id, "Course Information"));
      const ciSnap = await getDocs(ci);

      let courses = [];

      ciSnap.forEach((doc) => {
        courses.push(doc.data());
      });

      setSubDoc3(courses);
    }

    getDetails();
  }, []);

  useEffect(() => {
    const getDetails = async () => {
      const s = doc(db, "universities", id, "Scholarships", "Scholarship Details");
      const sSnap = await getDoc(s);

      if (sSnap.exists()) {
        let data = sSnap.data();
        setSubDoc4(data);
      } else {
        console.log("No such Document found!");
      }
    }

    getDetails();
  }, []);

  return (
    <>
      <Button onClick={() => setRouteStep(0)} style={{"backgroundColor":"rgb(121, 198, 201)", "color":"black"}} className="fw-bolder pt-2 ps-4 pe-4 position-fixed bottom-0 end-0">GO BACK TO UNIVERSITES PAGE</Button>
      <div className="container-fluid bg-light">
        <div className="container">
          <div className="about-college">
            <div className="backdrop">
              <img src={university["college image"]} alt="" />
              <div className="container-fluid image-content">
                <h1 className="fw-bolder text-uppercase">{university["college name"]}</h1>
                <h4>Country: {university["country"]}</h4>
              </div>
            </div>
            <h3 className="heading">ABOUT THIS COLLEGE</h3>
            <p>{university["about"]}</p>
            {
              university["highlightPoints"] ?
                <>
                  <h3 className="heading">Important details of {university["college name"]}</h3>
                  <ul>
                    {university["highlightPoints"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              university["ranking"] ?
                <>
                  <h3 className="heading">Ranking of {university["college name"]}</h3>
                  <ul>
                    {university["ranking"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }

            {
              subDoc !== {} ?
                <>
                  <h3 className="heading">ADMISSION DETAILS</h3>
                </>
                :
                <></>
            }

            {
              subDoc["about"] ?
                <>
                  <h4 className="heading">About the admission procedure </h4>
                  <p>{subDoc["about"]}</p>
                </>
                :
                <> </>
            }
            {
              subDoc["Admission Fee"] ?
                <>
                  <h4 className="heading">Admission Fee details </h4>
                  <p>{subDoc["Admission Fee"]}</p>
                </>
                :
                <> </>
            }
            {
              subDoc["Admission Portal"] ?
                <>
                  <h4 className="heading">Admission Portal </h4>
                  <p>{subDoc["Admission Portal"]}</p>
                </>
                :
                <> </>
            }
            {
              subDoc["importantDetails"] ?
                <>
                  <h4 className="heading">Important Details for the admission process</h4>
                  <ul>
                    {subDoc["importantDetails"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              subDoc["Admission Process"] ?
                <>
                  <h4 className="heading">Admission Procedure </h4>
                  <ul>
                    {subDoc["Admission Process"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              subDoc["admissionRequirements"] ?
                <>
                  <h4 className="heading">Admission Requirements </h4>
                  <ul>
                    {subDoc["admissionRequirements"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              subDoc["Academic Requirements For International Students"] ?
                <>
                  <h4 className="heading">Academic Requirements For International Students </h4>
                  <ul>
                    {subDoc["Academic Requirements For International Students"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              subDoc["Cost Of Attendance"] ?
                <>
                  <h4 className="heading">Cost of Attendance </h4>
                  <p>{subDoc["Cost Of Attendance"]}</p>
                </>
                :
                <> </>
            }
            {
              subDoc["highlightPoints"] ?
                <>
                  <h4 className="heading">Points to Remember</h4>
                  <ul>
                    {subDoc["highlightPoints"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              subDoc["English Proficiency Requirements"] ?
                <>
                  <h4 className="heading">English Proficiency Requirements</h4>
                  <ul>
                    {subDoc["English Proficiency Requirements"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              subDoc["German Language Proficiency For International Students"] ?
                <>
                  <h4 className="heading">German Language Proficiency For International Students</h4>
                  <ul>
                    {subDoc["German Language Proficiency For International Students"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              subDoc["French Language Proficiency Requirements"] ?
                <>
                  <h4 className="heading">French Language Proficiency Requirements</h4>
                  <ul>
                    {subDoc["French Language Proficiency Requirements"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              subDoc["Language Proficiency Test Score"] ?
                <>
                  <h4 className="heading">Language Proficiency Test Score </h4>
                  <p>{subDoc["Language Proficiency Test Score"]}</p>
                </>
                :
                <> </>
            }
            {
              subDoc["Language Proficiency For International Students"] ?
                <>
                  <h4 className="heading">Language Proficiency For International Students </h4>
                  <p>{subDoc["Language Proficiency For International Students"]}</p>
                </>
                :
                <> </>
            }
            {
              subDoc["M.Tech Eligibility"] ?
                <>
                  <h4 className="heading">M.Tech Eligibility </h4>
                  <p>{subDoc["M.Tech Eligibility"]}</p>
                </>
                :
                <> </>
            }
            {
              subDoc["M.Tech Selection Criteria"] ?
                <>
                  <h4 className="heading">M.Tech Selection Criteria</h4>
                  <ul>
                    {subDoc["M.Tech Selection Criteria"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              subDoc["MBA Admission Process"] ?
                <>
                  <h4 className="heading">MBA Admission Process</h4>
                  <ul>
                    {subDoc["MBA Admission Process"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              subDoc["MBA Eligibility"] ?
                <>
                  <h4 className="heading">MBA Eligibility</h4>
                  <p>{subDoc["MBA Eligibility"]}</p>
                </>
                :
                <> </>
            }
            {
              subDoc["MBA Selection Criteria"] ?
                <>
                  <h4 className="heading">MBA Selection Criteria</h4>
                  <ul>
                    {subDoc["MBA Selection Criteria"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              subDoc["visaDetails"] ?
                <>
                  <h4 className="heading">Visa Details</h4>
                  <ul>
                    {subDoc["visaDetails"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }

            {
              subDoc3 !== [] ?
                <>
                  <h3 className="heading">Some of the courses offered by {university["college name"]}</h3>

                  <Row m={4} className="container mx-auto p-5" style={{ "backgroundColor": "white" }}>
                    {
                      subDoc3.map(doc => {
                        return (
                          <>
                            <Col xs={12} sm={12} md={4} className="mb-5">
                              <Card style={{ width: '22rem', "backgroundColor": "white", "borderRadius":"40px" }}>
                                <Card.Body>
                                  <Card.Title className="text-white p-3 text-start" style={{"backgroundColor":"rgb(147 128 184)", "lineHeight":"28px", "borderRadius":"30px"}}> {doc["Course Name"]}</Card.Title>
                                  <hr />
                                  <Card.Text className="p-3">
                                    {
                                      doc["cutoff"] ?
                                        <>
                                          <p className="fw-bold text-black">Cutoff -</p>
                                          <p>{doc["cutoff"]}</p>
                                        </>
                                        :
                                        <>
                                        </>
                                    }
                                    {
                                      doc["ranking"] ?
                                        <>
                                          <p className="fw-bold text-black">Ranking -</p>
                                          <p>{doc["ranking"]}</p>
                                        </>
                                        :
                                        <>
                                        </>
                                    }
                                    {
                                      doc["fees"] ?
                                        <>
                                          <p className="fw-bold text-black">Course Fees -</p>
                                          <p>{doc["fees"]}</p>
                                        </>
                                        :
                                        <>
                                        </>
                                    }
                                    {
                                      doc["examAccepted"] ?
                                        <>
                                          <p className="fw-bold text-black">Exams Accepted to get in the course -</p>
                                          <p>{doc["examAccepted"]}</p>
                                        </>
                                        :
                                        <>
                                        </>
                                    }
                                    {
                                      doc["examScores"] ?
                                        <>
                                          <p className="fw-bold text-black">Exam Scores - </p>
                                          <ul>
                                            {doc["examScores"].map((item, id) => (
                                              <li key={id}>{item}</li>
                                            ))}
                                          </ul>
                                        </>
                                        :
                                        <>
                                        </>
                                    }
                                  </Card.Text>

                                </Card.Body>
                              </Card>
                            </Col>
                          </>
                        )
                      })
                    }
                  </Row>
                </>
                :
                <>
                </>
            }

            {
              subDoc2 !== {} ?
                <>
                  <h3 className="heading">CAMPUS ACCOMODATION</h3>
                </>
                :
                <></>
            }
            {
              subDoc2["about"] ?
                <>
                  <h4 className="heading">About Campus Accomodations</h4>
                  <p>{subDoc2["about"]}</p>
                </>
                :
                <> </>
            }
            {
              subDoc2["Accomodations"] ?
                <>
                  <h4 className="heading">Accomodations</h4>
                  <ul>
                    {subDoc2["Accomodations"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              subDoc2["Off Campus Accomodations"] ?
                <>
                  <h4 className="heading">Off Campus Accomodations</h4>
                  <p>{subDoc2["Off Campus Accomodations"]}</p>
                </>
                :
                <> </>
            }
            {
              subDoc2["On Campus Accomodations"] ?
                <>
                  <h4 className="heading">On Campus Accomodations</h4>
                  <p>{subDoc2["On Campus Accomodations"]}</p>
                </>
                :
                <> </>
            }
            {
              subDoc2["Hostel Facilities"] ?
                <>
                  <h4 className="heading">Hostel Facilities</h4>
                  <ul>
                    {subDoc2["Hostel Facilities"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              subDoc2["Hostel Fee Details"] ?
                <>
                  <h4 className="heading">Hostel Fee Details</h4>
                  <ul>
                    {subDoc2["Hostel Fee Details"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              subDoc2["Eligibility"] ?
                <>
                  <h4 className="heading">Eligibility criteria</h4>
                  <p>{subDoc2["Eligibility"]}</p>
                </>
                :
                <> </>
            }

            {
              subDoc4 !== {} ?
                <>
                  <h3 className="heading">SCHOLARSHIPS</h3>
                </>
                :
                <></>
            }
            {
              subDoc4["about"] ?
                <>
                  <h4 className="heading">About Scholarships of {university["name"]}</h4>
                  <p>{subDoc4["about"]}</p>
                </>
                :
                <> </>
            }
            {
              subDoc4["scholarshipDetails"] ?
                <>
                  <h4 className="heading">Scholarships details</h4>
                  <ul>
                    {subDoc4["scholarshipDetails"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              subDoc4["importantDetails"] ?
                <>
                  <h4 className="heading">Important Details about Scholarships</h4>
                  <ul>
                    {subDoc4["importantDetails"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              subDoc4["External Scholarships Accepted"] ?
                <>
                  <h4 className="heading">External Scholarships Accepted</h4>
                  <ul>
                    {subDoc4["External Scholarships Accepted"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              subDoc4["Scholarships For Research Programs"] ?
                <>
                  <h4 className="heading">Scholarships For Research Programs</h4>
                  <ul>
                    {subDoc4["Scholarships For Research Programs"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              subDoc4["Sports Scholarships"] ?
                <>
                  <h4 className="heading">Sports Scholarships</h4>
                  <ul>
                    {subDoc4["Sports Scholarships"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
            {
              university["placementDetails"] ?
                <>
                  <h4 className="heading">Placements details of {university["name"]}</h4>
                  <p>{university["placementDetails"]}</p>
                </>
                :
                <> </>
            }
            {
              university["placementImage"] ?
                <>
                  <img src={university["placementImage"]} alt="" className="images" />
                </>
                :
                <> </>
            }
            {
              university["alumni"] ?
                <>
                  <h4 className="heading">Alumni of {university["college name"]}</h4>
                  <ul>
                    {university["alumni"].map((item, id) => (
                      <li key={id}>{item}</li>
                    ))}
                  </ul>
                </>
                :
                <> </>
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default University;