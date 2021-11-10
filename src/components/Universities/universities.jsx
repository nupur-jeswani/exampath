import { useState, useEffect } from "react";
import { Col, Row, FormControl } from "react-bootstrap";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";
import University from "./university";
import { Accordion } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import "./universities.css";

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
			const q = query(collection(db, "universities"));
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
		<div className="container-fluid">

			{routeStep === 0 && (
				<>
					<div className="background-gradient container-fluid">
						<Accordion className="w-80 p-3">
							<Accordion.Item eventKey="0">
								<Accordion.Header className="text-primary">Steps to use this page.</Accordion.Header>
								<Accordion.Body>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
									tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
									veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
									commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
									velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
									est laborum.
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>

						<div className="container pb-3">
							<FormControl className="p-4 border border-light rounded bg-light fw-bold"
								placeholder="Enter University Name or Country Name"
								aria-label="University Name"
								aria-describedby="University Name"
								value={search}
								onChange={handleFilter}
							/>

							<div className="container">
							{
								// style={{"backgroundColor":"rgb(212, 234, 241)"}}
								universities.filter(university => (university["college name"].toLowerCase().includes(search.toLowerCase()) || university["country"].toLowerCase().includes(search.toLowerCase()))).map((university, id) => (
									search ?
										<>
											<ul className="collegeNameList">
												<li className="fs-5 fw-bold text-uppercase" key={id} onClick={() => handleUniversity(university)}>{university["college name"]}</li>
											</ul>
										</>
										:
										<>
										</>
								))
							}
							</div>
						</div>
					</div>

					<hr />

					<Row m={4} className="container mx-auto p-5 bg-light">
						<h1 className="p-4 fw-bold" style={{"color":"rgb(16, 1, 26)", "letterSpacing":"10px"}}>LIST OF UNIVERSITIES</h1>
						{
							universities.map(doc => {
								return (
									<>
										<Col xs={12} sm={12} md={4} className="mb-5">
											<Card style={{ width: '22rem', "backgroundColor":"white" }}>
												<Card.Img variant="top" src="holder.js/100px180" />
												<hr />
												<Card.Body>
													<Card.Title className="fw-bolder text-uppercase"> {doc["college name"]}</Card.Title>
													<hr />
													<Card.Text className="cardText">
														<p className="text-uppercase">Location: {doc["country"]}</p>
														<p>{doc["description"]}</p>
													</Card.Text>
													<Button className="detailsButton text-uppercase" onClick={() => handleUniversity(doc)}>See University Details</Button>
												</Card.Body>
											</Card>
										</Col>
									</>
								)
							})
						}
					</Row>
				</>
			)}
			{routeStep === 1 && (
				<University university={currentUniversity} setRouteStep={setRouteStep} />
			)}
		</div>
	);
}

export default Universities;