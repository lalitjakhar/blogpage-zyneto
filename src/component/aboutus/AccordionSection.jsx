import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import RemoveIcon from '@mui/icons-material/Remove';



const accroPost = [
  {
    id: "1",
    title: "How do we assure privacy and confidentiality?",
    description:
      "We take every necessary step to protect your interests through the implementation of Non-Disclosure Agreements (NDAs) and Intellectual Property (IP) agreements. These legal documents outline the terms and conditions regarding the confidentiality of your sensitive information and the ownership of intellectual property rights.",
  },
  {
    id: "2",
    title: "Will I have ownership of my Website?",
    description:
      "Yes, absolutely. Once the project is completed and all payments are settled, you will have full ownership of your website. We believe in transparent and fair business practices, and we ensure that our clients retain complete ownership of their digital assets.",
  },
  {
    id: "3",
    title: "Why Zyneto Global Technologies?",
    description:
      "Zyneto Global Technologies stands out for its commitment to excellence, innovation, and customer satisfaction. With a team of experienced professionals, cutting-edge technology solutions, and a track record of successful projects, we offer unmatched value to our clients. We prioritize collaboration, transparency, and delivering results that exceed expectations.",
  },
  {
    id: "4",
    title: "What are the advantages of outsourcing your project to our team?",
    description:
      "Outsourcing your project to Zyneto Global Technologies offers several advantages, including access to a skilled and experienced team, cost-effectiveness, faster time to market, scalability, and the ability to focus on core business activities. We handle all aspects of project management, development, and support, allowing you to concentrate on growing your business.",
  },
  {
    id: "5",
    title: "Do you provide out staffing services?",
    description:
      "Yes, we offer staffing services to clients who require additional expertise or resources for their projects. Our flexible staffing model allows you to augment your team with highly skilled professionals who work seamlessly alongside your in-house team to achieve project goals.",
  },
  {
    id: "6",
    title: "How long does it take to start my product development?",
    description:
      "The timeline for starting your product development depends on various factors, including project scope, complexity, and resource availability. Once we have a clear understanding of your requirements, we can provide you with an estimated timeline for project kickoff and development milestones.",
  },
  {
    id: "7",
    title: "What does your software development process look like?",
    description:
      "At Zyneto Global Technologies, we follow a comprehensive software development process encompassing requirements gathering, planning, design, development, testing, deployment, and maintenance. Our iterative approach ensures collaboration, flexibility, and continuous improvement throughout the development lifecycle.",
  },
  {
    id: "8",
    title: "How do we ensure the security and risk management of your product?",
    description:
      "Security and risk management are paramount in our development process. We conduct thorough risk assessments, implement industry best practices for secure coding and architecture design, and regularly update security measures to mitigate emerging threats. Additionally, we perform rigorous testing and validation to identify and address vulnerabilities before deployment.",
  },
  {
    id: "9",
    title: "How do you guarantee product quality?",
    description:
      "Product quality is our top priority at Zyneto Global Technologies. We adhere to rigorous quality assurance processes, including code reviews, automated testing, and user acceptance testing, to ensure that our products meet the highest performance, reliability, and usability standards. Additionally, we solicit feedback from clients throughout the development process to ensure that their expectations are met or exceeded.",
  },
];

const AccordionSection = () => {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
     <Box  sx={{ paddingBlock: "30px", bgcolor: "#EFF0FF " }}>
         <Container
        maxWidth="xl"
        sx={{ paddingBlock: "50px", bgcolor: "#EFF0FF " }}
      >
        <Box className="text-center" sx={{ paddingBlock: "30px" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "48px",
              fontWeight: "700",
              fontFamily: "sans-serif",
              lineHeight: "56px",
              marginBottom: "15px",
            }}
          >
            Frequently Asked{" "}
            <span className="HeadingsAboutSectionColor">Questions</span>
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              color: "#424242",
              fontFamily: "sans-serif",
              fontWeight: "500",
              lineHeight: "32px",
            }}
          >
            Here are some basic questions and answers to help you get started.
          </Typography>
        </Box>
        <Box className="flex">
          <Box width={"50%"} sx={{ bgcolor: "transparent" }}>
            {accroPost.map((post, index) => {
              return (
                <Accordion
                  key={index}
                  sx={{
                    boxShadow: "none",
                    lineHeight: "32px",
                    fontWeight: "900",
                    color: "#000000",
                    bgcolor: "transparent",
                  }}
                  onChange={handleChange(post.id)}
                  expanded={expanded === post.id}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Box className="flex items-center pb-4">
                      <Typography
                        sx={{ marginRight: "10px", fontSize: "24px" }}
                        className="icon me-3"
                      >
                        {expanded === post.id ? <RemoveIcon /> : <AddIcon  />}
                      </Typography>
                      <Typography sx={{ fontSize: "24px" }}>
                        {" "}
                        {post.title}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        color: "#5c5c5c",
                        fontWeight: "500",
                        lineHeight: "28px",
                        marginLeft: "36px",
                        borderLeft: "1px solid black",
                        paddingLeft: "10px",
                      }}
                    >
                      {post.description}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
          <Box width={"50%"} className="flex items-center">
            <img
              src="src/assets/accordionsection/faqaboutus.webp"
              alt=""
              width={477}
              height={587}
              style={{ marginInline: "auto" }}
            />
          </Box>
        </Box>
      </Container>
     </Box>
    </>
  );
};

export default AccordionSection;
