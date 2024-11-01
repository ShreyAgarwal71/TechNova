/* COntact informatoion, form and map */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MapPic from "/src/Images/TechNovaMap.png";
import { Form, Button, Row, Collapse, Alert } from "react-bootstrap";

const ContactPage: React.FC = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Perform any additional actions (e.g., send data to server)

    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(true);
  };
  return (
    <div>
      <div className="container mt-4">
        <h1 className="text-center text-primary display-3 fw-bold">
          Contact Us
        </h1>

        {/* Contact Form Section */}
        <h2>Contact Form:</h2>
        <>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group className=" m-1">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group className="m-1">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="m-1">
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
        </>

        {/* Visit Us Section */}
        <section className="my-4">
          <h2>Visit Us:</h2>
          <p>
            <strong>TechNova Headquarters:</strong>
            <br />
            123 Innovation Lane
            <br />
            Tech City, TC 12345
            <br />
            United States
          </p>
          <p>
            *For in-person visits, please schedule an appointment in advance.*
          </p>
          <img className="d-block w-100" src={MapPic} alt="Map Pic" />
        </section>

        {/* Call Us Section */}
        <section className="my-4">
          <h2>Call Us:</h2>
          <p>
            <strong>Customer Support:</strong>
            <br />
            Phone: +1 (555) 123-4567
            <br />
            Available Monday to Friday, 9:00 AM - 5:00 PM (EST)
          </p>
          <p>
            <strong>Corporate Office:</strong>
            <br />
            Phone: +1 (555) 987-6543
            <br />
            Available Monday to Friday, 9:00 AM - 6:00 PM (EST)
          </p>
        </section>

        {/* Email Us Section */}
        <section className="my-4">
          <h2>Email Us:</h2>
          <p>
            <strong>General Inquiries:</strong>
            <br />
            Email: info@technova.com
          </p>
          <p>
            <strong>Customer Support:</strong>
            <br />
            Email: support@technova.com
          </p>
          <p>
            <strong>Media and Press Inquiries:</strong>
            <br />
            Email: media@technova.com
          </p>
          <p>
            <strong>Feedback and Suggestions:</strong>
            <br />
            Email: feedback@technova.com
          </p>
        </section>

        {/* Connect on Social Media Section */}
        <section className="my-4">
          <h2>Connect on Social Media:</h2>
          <ul>
            <li>
              <a
                href="https://twitter.com/TechNova"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/TechNova"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/technova"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/technova_official"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </section>

        {/* Career Opportunities Section */}
        <section className="my-4">
          <h2>Career Opportunities:</h2>
          <p>
            Explore career opportunities at TechNova and join our dynamic team.
            Visit our <a href="/Components/Career">Careers Page</a> for current
            job openings and application details.
          </p>
        </section>

        {/* Subscribe Section */}
        <section className="my-4">
          <h2>Stay Connected:</h2>
          <p>
            Subscribe to our newsletter to receive updates on product launches,
            promotions, and more. Join the TechNova community and stay connected
            with the future of technology.
          </p>
          {/* Add your subscribe button or form code here */}
        </section>

        <h4 className="text-center text-muted m-3">
          Innovate. Elevate. Illuminate.
        </h4>
      </div>
    </div>
  );
};

export default ContactPage;

/*
/* COntact informatoion, form and map 
import React from "react";
import { Label } from "./Label";
import { Input } from "./Input";
import { cn } from "/Users/home/TechNova/src/utils/cn.ts";

import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="tw-max-w-md tw-w-full tw-mx-auto tw-rounded-none tw-md:rounded-2xl tw-p-4 tw-md:p-8 tw-shadow-input tw-bg-white tw-dark:bg-black">
      <h2 className="tw-font-bold tw-text-xl tw-text-neutral-800 tw-dark:text-neutral-200">
        Welcome to Aceternity
      </h2>
      <p className="tw-text-neutral-600 tw-text-sm tw-max-w-sm tw-mt-2 tw-dark:text-neutral-300">
        Login to aceternity if you can because we don&apos;t have a login flow
        yet
      </p>

      <form className="tw-my-8" onSubmit={handleSubmit}>
        <div className="tw-flex tw-flex-col tw-md:flex-row tw-space-y-2 tw-md:space-y-0 tw-md:space-x-2 tw-mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="tw-mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="tw-mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="tw-mb-8">
          <Label htmlFor="twitterpassword">Your twitter password</Label>
          <Input
            id="twitterpassword"
            placeholder="••••••••"
            type="twitterpassword"
          />
        </LabelInputContainer>

        <button
          className="tw-bg-gradient-to-br tw-relative tw-group/btn tw-from-black tw-dark:from-zinc-900 tw-dark:to-zinc-900 tw-to-neutral-600 tw-block tw-text-white tw-rounded-md tw-h-10 tw-font-medium tw-shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] tw-dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="tw-bg-gradient-to-r tw-from-transparent tw-via-neutral-300 tw-dark:bg-neutral-700 tw-to-transparent tw-my-8 tw-h-[1px] tw-w-full" />

        <div className="tw-flex tw-flex-col tw-space-y-4">
          <button
            className=" tw-relative tw-group/btn tw-flex tw-space-x-2 tw-items-center tw-justify-start tw-px-4 tw-w-full tw-text-black tw-rounded-md tw-h-10 tw-font-medium tw-shadow-input tw-bg-gray-50 tw-dark:bg-zinc-900 tw-dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="tw-h-4 tw-w-4 tw-text-neutral-800 tw-dark:text-neutral-300" />
            <span className="tw-text-neutral-700 tw-dark:text-neutral-300 tw-text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className=" tw-relative tw-group/btn tw-flex tw-space-x-2 tw-items-center tw-justify-start tw-px-4 tw-w-full tw-text-black tw-rounded-md tw-h-10 tw-font-medium tw-shadow-input tw-bg-gray-50 tw-dark:bg-zinc-900 tw-dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGoogle className="tw-h-4 tw-w-4 tw-text-neutral-800 tw-dark:text-neutral-300" />
            <span className="tw-text-neutral-700 tw-dark:text-neutral-300 tw-text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className=" tw-relative tw-group/btn tw-flex tw-space-x-2 tw-items-center tw-justify-start tw-px-4 tw-w-full tw-text-black tw-rounded-md tw-h-10 tw-font-medium tw-shadow-input tw-bg-gray-50 tw-dark:bg-zinc-900 tw-dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandOnlyfans className="tw-h-4 tw-w-4 tw-text-neutral-800 tw-dark:text-neutral-300" />
            <span className="tw-text-neutral-700 tw-dark:text-neutral-300 tw-text-sm">
              OnlyFans
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="tw-group-hover/btn:opacity-100 tw-block tw-transition tw-duration-500 tw-opacity-0 tw-absolute tw-h-px tw-w-full tw-bottom-px tw-inset-x-0 tw-bg-gradient-to-r tw-from-transparent tw-via-cyan-500 tw-to-transparent" />
      <span className="tw-group-hover/btn:opacity-100 tw-blur-sm tw-block tw-transition tw-duration-500 tw-opacity-0 tw-absolute tw-h-px tw-w-1/2 tw-mx-auto tw-bottom-px tw-inset-x-10 tw-bg-gradient-to-r tw-from-transparent tw-via-indigo-500 tw-to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("tw-flex tw-flex-col tw-space-y-2 tw-w-full", className)}
    >
      {children}
    </div>
  );
};

export default ContactPage;
*/
