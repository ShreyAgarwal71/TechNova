// Advertising, creating of products using product card template
import React from "react";
import ProductCard from "./ProductCard";
import { Container } from "react-bootstrap";
import TechNovaAI from "/src/Images/TechNovaAI.jpeg";
import TechNovaCloud from "/src/Images/TechNovaCloud.jpeg";
import TechNovaPhone from "/src/Images/TechNovaPhone.jpeg";

const ProductPage: React.FC = () => {
  return (
    <>
      <Container className="my-5">
        <h1 className="text-center text-primary display-3 fw-bold">
          TechNova Products and Services
        </h1>

        <p className="text-center fs-4 fw-bold">
          Welcome to the Future of Technology
        </p>

        <p className="fs-4">
          At TechNova, we're not just selling products; we're offering a gateway
          to a transformative digital experience. Here are compelling reasons
          why choosing TechNova is the smartest decision for tech enthusiasts,
          innovators, and those who crave the cutting edge:
        </p>

        <h1>Why Choose TechNova? Elevate Your Digital Experience!</h1>

        <ul>
          <li>
            <h3>Innovation Beyond Boundaries:</h3>
            <p className="fs-5">
              TechNova products are a testament to our commitment to pushing the
              boundaries of innovation. From smartphones that redefine mobile
              technology to cloud solutions that secure and simplify your
              digital life, every product reflects our passion for staying ahead
              in the tech landscape.
            </p>
          </li>
          <li>
            <h3>Unmatched Performance and Design:</h3>
            <p className="fs-5">
              Elevate your daily experiences with products designed for
              excellence. Whether it's the powerful performance of our flagship
              smartphones, the sleek design that turns heads, or the reliability
              of our cloud storage solutions, TechNova delivers unparalleled
              quality in every detail.
            </p>
          </li>
          <li>
            <h2>User-Centric Philosophy:</h2>
            <p className="fs-5">
              Your satisfaction is our driving force. TechNova products are
              crafted with a user-centric approach, ensuring that they not only
              meet but exceed your expectations. From intuitive interfaces to
              features that enhance your lifestyle, our products are designed to
              resonate with you.
            </p>
          </li>
          <li>
            <h3>Future-Ready Technology:</h3>
            <p className="fs-5">
              Stay at the forefront of technology with TechNova. Our products
              are equipped with the latest advancements, ensuring that you're
              not just keeping up with the times but leading the way into the
              future. Experience the convenience and power of future-ready
              technology with every TechNova purchase.
            </p>
          </li>
          <li>
            <h3>Holistic Digital Ecosystem:</h3>
            <p className="fs-5">
              TechNova offers more than individual products; we provide a
              holistic digital ecosystem. Seamlessly connect your devices,
              access your files from anywhere with our cloud solutions, and let
              our digital assistant simplify your daily tasks. TechNova is your
              one-stop destination for a connected and cohesive digital
              experience.
            </p>
          </li>
          <li>
            <h3>Trusted by Users Worldwide:</h3>
            <p className="fs-5">
              Join a global community of satisfied users who have chosen
              TechNova for its reliability, innovation, and exceptional customer
              experience. Our products have garnered praise for their
              performance, design, and the positive impact they bring to daily
              lives.
            </p>
          </li>
        </ul>

        <p className="fs-3">
          Choose TechNova and embark on a journey where technology meets
          innovation, and your digital experience is elevated to new heights.
        </p>
      </Container>
      <div className="row m-3">
        <ProductCard
          name="TechNova Quantum X - Flagship Smartphone"
          description="TechNova Quantum X is not just a smartphone; it's a technological marvel that redefines mobile experiences. With cutting-edge features, a sleek design, and powerful performance, Quantum X is designed to elevate your connectivity and productivity."
          pricing="Base Model: $899 | Pro Model: $1,199 (128GB storage, enhanced camera features)"
          features={[
            "Quantum Display: A stunning AMOLED display for vivid colors and crisp details.",
            "Quantum Performance: Powered by the latest processor for seamless multitasking and gaming.",
            "Quantum Camera: Capture moments in incredible detail with a versatile and advanced camera system.",
            "Quantum Connectivity: 5G capabilities for ultra-fast internet speeds and low latency.",
          ]}
          benefits={[
            "Exceptional Performance: Experience unparalleled speed and efficiency in every task.",
            "Immersive Display: Enjoy an immersive visual experience with the Quantum Display.",
            "Professional Photography: Unleash your creativity with the Quantum Camera’s pro-grade features.",
            "Future-Ready Connectivity: Stay ahead with 5G capabilities for fast and reliable connectivity.",
          ]}
          testimonial="The Quantum X is a game-changer! The camera quality is unmatched, and the performance is beyond expectations. TechNova has truly raised the bar for smartphones. - Sarah M., TechNova Quantum X User"
          productImage={TechNovaPhone}
        />

        <ProductCard
          name="NovaCloud - Cloud Storage Solution"
          description="NovaCloud by TechNova is your secure and reliable cloud storage solution. Safeguard your files, access them from anywhere, and enjoy peace of mind with advanced security features."
          pricing="Basic Plan: 50GB - Free | Premium Plan: 500GB - $4.99/month | Business Plan: 1TB - $9.99/month (per user)"
          features={[
            "Secure Storage: Military-grade encryption to keep your files safe.",
            "Anytime, Anywhere Access: Access your files from any device with an internet connection.",
            "Collaborative Tools: Share files and collaborate seamlessly with your team.",
            "Automatic Backup: Keep your data safe with automatic, regular backups.",
          ]}
          benefits={[
            "Data Security: Protect your files with advanced encryption and security measures.",
            "Flexible Plans: Choose a plan that fits your needs, whether personal or business.",
            "Collaboration: Collaborate effortlessly with your team, no matter where they are.",
            "Peace of Mind: Automatic backups ensure your data is always protected.",
          ]}
          testimonial="NovaCloud has made my life so much easier. I can access my files from anywhere, and the peace of mind knowing my data is secure is invaluable. - Alex R., NovaCloud User"
          productImage={TechNovaCloud}
        />

        <ProductCard
          name="TechNova Assist - Your Digital Assistant"
          description="TechNova Assist is not just an assistant; it's your digital companion. From scheduling appointments to providing real-time information, Assist simplifies your day and enhances your productivity."
          pricing="Basic Plan: Free | Premium Plan: $4.99/month (advanced features, priority support)"
          features={[
            "Voice Commands: Control your device and access information using simple voice commands.",
            "Smart Scheduling: Schedule appointments, set reminders, and manage your calendar effortlessly.",
            "Real-Time Information: Get weather updates, news, and other information in real-time.",
            "Task Automation: Automate repetitive tasks to save time and increase efficiency.",
          ]}
          benefits={[
            "Time Savings: Automate tasks and access information quickly, saving you time.",
            "Hands-Free Convenience: Control your device and access information without lifting a finger.",
            "Personalized Assistance: Customize Assist to suit your preferences and needs.",
            "Premium Support: Enjoy priority support with the Premium Plan.",
          ]}
          testimonial="TechNova Assist has become an essential part of my day. It's like having a personal assistant at my fingertips. The convenience it offers is unmatched! - Mark D., TechNova Assist Use"
          productImage={TechNovaAI}
        />
      </div>

      <h4 className="text-center text-muted">
        Innovate. Elevate. Illuminate your world with TechNova
      </h4>
    </>
  );
};

export default ProductPage;
