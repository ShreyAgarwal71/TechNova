// Job Application: Basic Questions
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Collapse,
  Alert,
} from "react-bootstrap";

const ApplicationForm: React.FC = () => {
  interface FormData {
    name: any;
    address: any;
    email: any;
    phoneNumber: any;
    positionAppliedFor: any;
    educationalBackground: any;
    employmentHistory: any;
    skills: any;
    certifications: any;
    references: any;
    coverLetter: any;
    resume: any;
    additionalQuestions: any;
    felonyConviction: any;
    explanation: any;
    legalEligibility: any;
    voluntaryInformation: any;
    signature: any;

    [key: string]: any; // index signature
  }

  const [formData, setFormData] = useState<FormData>({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    positionAppliedFor: "",

    educationalBackground: "",
    employmentHistory: "",
    skills: "",
    certifications: "",
    references: "",
    coverLetter: "",
    resume: "",
    additionalQuestions: "",
    felonyConviction: false,
    explanation: "",
    legalEligibility: "",
    voluntaryInformation: "",
    signature: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: "",
    // Add more fields as needed
  });

  const handleChange = (
    e: React.ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
      | HTMLInputElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? !prevData[name] : value,
    }));
  };

  const validateEmail = (email: string) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform form validation
    const errors: any = {};

    if (!validateEmail(formData.email)) {
      errors.email = "Invalid email address";
    }

    setFormErrors(errors);

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Add your form submission logic here
      console.log("Form submitted:", formData);
    }

    setSubmitted(true);
  };

  return (
    <Container className="m-3">
      <h2 className="my-4">Job Application Form</h2>
      {/*
     {Object.keys(formErrors).length > 0 && (
        <Alert variant="danger">
          <ul>
            {Object.values(formErrors).map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </Alert>
      )}
      */}
      <Form onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <h3>Personal Information</h3>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={formData.name}
                placeholder="Enter your full name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {formErrors.email && (
                <Form.Text className="text-danger">
                  {formErrors.email}
                </Form.Text>
              )}
            </Form.Group>
          </Col>
        </Row>

        {/* Position Information Section */}
        <h3>Position Applied For</h3>
        <Row>
          <Form.Group className="mb-3">
            <Form.Label>Availible Positions</Form.Label>
            <Form.Control
              as="select"
              name="positionAppliedFor"
              value={formData.positionAppliedFor}
              onChange={handleChange}
              required
            >
              <option value="">Select Position</option>
              <option value="softwareEngineer">Software Engineer</option>
              <option value="digitalMarketing">
                Digital Marketing Specialist
              </option>
              <option value="uxUiDesigner">UX/UI Designer</option>
              <option value="dataScientist">Data Scientist</option>
              <option value="customerSupport">
                Customer Support Specialist
              </option>
              <option value="sustainabilityAnalyst">
                Sustainability Analyst
              </option>
              {/* Add more options as needed */}
            </Form.Control>
          </Form.Group>
        </Row>

        {/* Educational Background Section */}
        <h3>Educational Background</h3>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your educational background"
            name="educationalBackground"
            value={formData.educationalBackground}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Employment History Section */}
        <h3>Employment History</h3>
        {[...Array(3)].map((_, index) => (
          <div key={index}>
            <h4>Job #{index + 1}</h4>
            <Form.Group className="mb-3">
              <Form.Label>Company Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company name"
                name={`companyName${index}`}
                value={formData[`companyName${index}`]}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter job title"
                    name={`jobTitle${index}`}
                    value={formData[`jobTitle${index}`]}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Start to End Date</Form.Label>
                  <Form.Control
                    type="month"
                    name={`startDate${index}`}
                    value={formData[`startDate${index}`]}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Job Responsibilities and Achievements</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter job responsibilities and achievements"
                name={`jobResponsibilities${index}`}
                value={formData[`jobResponsibilities${index}`]}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </div>
        ))}

        {/* Skills Section */}
        <h3>Skills</h3>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter your skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Certifications Section */}
        <h3>Certifications</h3>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter your certifications"
            name="certifications"
            value={formData.certifications}
            onChange={handleChange}
          />
        </Form.Group>

        {/* References Section */}
        <h3>References</h3>
        <Form.Group className="mb-3">
          <Form.Label>
            Include Full Name and Preferred Method of Contact
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter your references"
            name="references"
            value={formData.references}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Cover Letter Section */}
        <h3>Cover Letter</h3>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Write your cover letter here"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Resume Section */}
        <h3>Resume</h3>
        <Form.Group className="mb-3">
          <Form.Label>Upload Resume</Form.Label>
          <Form.Control
            type="file"
            id="resumeFile"
            onChange={(e) =>
              setFormData({ ...formData, resume: e.target.value })
            }
          />
        </Form.Group>

        {/* Additional Questions Section */}
        <h3>Additional Questions</h3>
        <Form.Group className="mb-3">
          <Form.Label>
            Any questions about the job or the proccess you may have for us. We
            will try to get back to you soon.
          </Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Ask additional questions here"
            name="additionalQuestions"
            value={formData.additionalQuestions}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Legal and Voluntary Disclosures Section */}
        <h3>Legal and Voluntary Disclosures</h3>
        <Form.Group className="mb-3">
          <Form.Label>Do you have a felony conviction?</Form.Label>
          <Form.Check
            type="radio"
            label="Yes"
            name="felonyConviction"
            id="felonyYes"
            onChange={() =>
              setFormData({ ...formData, felonyConviction: true })
            }
          />
          <Form.Check
            type="radio"
            label="No"
            name="felonyConviction"
            id="felonyNo"
            onChange={() =>
              setFormData({
                ...formData,
                felonyConviction: false,
                explanation: "",
              })
            }
          />
          {formData.felonyConviction && (
            <Form.Group className="mb-3">
              <Form.Label>Explanation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Explain felony conviction"
                name="explanation"
                value={formData.explanation}
                onChange={handleChange}
              />
            </Form.Group>
          )}
        </Form.Group>

        {/* Voluntary Information Section */}
        <h3>Voluntary Information</h3>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your age"
            name="legalEligibility"
            value={formData.legalEligibility}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Governmental Status</Form.Label>
          <Form.Control
            type="text"
            placeholder="Citizenship, Greencard, Visa and etc."
            name="voluntaryInformation"
            value={formData.voluntaryInformation}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Signature Section */}
        <h3>Signature</h3>
        <Form.Group className="mb-3">
          <Form.Label>This digital signature is legally binding</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type your full name as a signature"
            name="signature"
            value={formData.signature}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {submitted ? (
        <Collapse in={submitted}>
          <Alert variant="success" className="mt-3">
            Message submitted. Please expect a response back shortly.
          </Alert>
        </Collapse>
      ) : (
        <h1></h1>
      )}
    </Container>
  );
};

export default ApplicationForm;
