import { Box, Container, Typography } from "@mui/material";

const SecondBlogSection = () => {
  return (
    <>
      <Container maxWidth="xl" className="flex " sx={{ paddingBlock: "100px" }}>
        <Box className="flex flex-col gap-9" sx={{ width: "70%" }}>
          <Box className="flex gap-5">
            <Box sx={{ maxWidth: "331px", maxHeight: "241px" }}>
              <img
                src="src/assets/secondblogsection/cross-platform.webp"
                alt=""
                style={{ height: "250px" }}
              />
            </Box>
            <Box className="flex flex-col gap-4" sx={{ maxWidth: "473px" }}>
              <Typography>10 Sep 2024</Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "#202020",
                  fontWeight:"800",
                  fontFamily:"sans-serif",
                  "&:hover": { color: "#e99f12" },
                }}
              >
                Advantages of Cross-Platform Development: What You Need to Know
              </Typography>
              <Typography>
                Explore cross-platform development benefits, including lower
                costs, faster launches, and top tools like React Native and
                Flutter for efficient multi-platform app deployment.
              </Typography>
              <Box className="flex justify-between items-center">
                <Typography
                  sx={{
                    border: "1px solid #e99f12",
                    padding: "6px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    fontWeight:"500",
                    fontFamily:"sans-serif",
                    color:"#000000"
                  }}
                >
                  {" "}
                  <a href="#">Mobile App Development</a>
                </Typography>
                <Box className="flex gap-3 items-center">
                  <Typography>
                    <img
                      src="src/assets/secondblogsection/bookreadbloglist.svg"
                      height={22}
                      width={22}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                    3 min read
                  </Typography>
                </Box>
                <Box className="flex gap-3 items-center">
                  <Typography>
                    <img
                      src="src/assets/secondblogsection/authorbloglist.svg"
                      height={22}
                      width={22}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Clara
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          

          <Box className="flex gap-5">
            <Box sx={{ maxWidth: "331px", maxHeight: "241px" }}>
              <img
                src="src/assets/secondblogsection/python-devops.webp"
                alt=""
                style={{ height: "250px" }}
              />
            </Box>
            <Box className="flex flex-col gap-4" sx={{ maxWidth: "473px" }}>
              <Typography>27 Aug 2024</Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "#202020",
                  fontWeight:"800",
                  fontFamily:"sans-serif",
                  "&:hover": { color: "#e99f12" },
                }}
              >
                Why Python is Ideal for DevOps: <br /> Exploring the Benefits of Using Python
              </Typography>
              <Typography>
              Learn why Python is ideal for DevOps with its simplicity, speed, and robust libraries, enhancing productivity and streamlining software development.
              </Typography>
              <Box className="flex justify-between items-center">
                <Typography
                   sx={{
                    border: "1px solid #e99f12",
                    padding: "6px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    fontWeight:"500",
                    fontFamily:"sans-serif",
                    color:"#000000"
                  }}
                >
                  {" "}
                  <a href="#">DevOps</a>
                </Typography>
                <Box className="flex gap-3 items-center">
                  <Typography>
                    <img
                      src="src/assets/secondblogsection/bookreadbloglist.svg"
                      height={22}
                      width={22}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                   5 min read
                  </Typography>
                </Box>
                <Box className="flex gap-3 items-center">
                  <Typography>
                    <img
                      src="src/assets/secondblogsection/authorbloglist.svg"
                      height={22}
                      width={22}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Noah
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="flex gap-5">
            <Box sx={{ maxWidth: "331px", maxHeight: "241px" }}>
              <img
                src="src/assets/secondblogsection/devops-3155972_1280.webp"
                alt=""
                style={{ height: "215px" }}
              />
            </Box>
            <Box className="flex flex-col gap-4" sx={{ maxWidth: "473px" }}>
              <Typography>10 Aug 2024</Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "#202020",
                  fontWeight:"800",
                  fontFamily:"sans-serif",
                  "&:hover": { color: "#e99f12" },
                }}
              >
                Top DevOps Best Practices for 2024
              </Typography>
              <Typography>
              Explore top DevOps best practices for 2024 to boost productivity and collaboration. Learn about continuous integration, customer-centric actions, and more.
              </Typography>
              <Box className="flex justify-between items-center">
                <Typography
                   sx={{
                    border: "1px solid #e99f12",
                    padding: "6px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    fontWeight:"500",
                    fontFamily:"sans-serif",
                    color:"#000000"
                  }}
                >
                  {" "}
                  <a href="#">devOps</a>
                </Typography>
                <Box className="flex gap-3 items-center">
                  <Typography>
                    <img
                      src="src/assets/secondblogsection/bookreadbloglist.svg"
                      height={22}
                      width={22}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                    10 min read
                  </Typography>
                </Box>
                <Box className="flex gap-3 items-center">
                  <Typography>
                    <img
                      src="src/assets/secondblogsection/authorbloglist.svg"
                      height={22}
                      width={22}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Noah
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="flex gap-5">
            <Box sx={{ maxWidth: "331px", maxHeight: "241px" }}>
              <img
                src="src/assets/secondblogsection/web-scraping.webp"
                alt=""
                style={{ height: "250px" }}
              />
            </Box>
            <Box className="flex flex-col gap-4" sx={{ maxWidth: "473px" }}>
              <Typography>31 Jul 2024</Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "#202020",
                  fontWeight:"800",
                  fontFamily:"sans-serif",
                  "&:hover": { color: "#e99f12" },
                }}
              >
                Best Methods to Scrape Page  <br />Information and Add it to Excel
              </Typography>
              <Typography>
              Discover efficient ways to extract data from web pages to Excel. Learn about web scraping tools, Excel VBA, and more techniques to simplify data mining.
              </Typography>
              <Box className="flex justify-between items-center">
                <Typography
                    sx={{
                        border: "1px solid #e99f12",
                        padding: "6px",
                        borderRadius: "10px",
                        fontSize: "12px",
                        fontWeight:"500",
                        fontFamily:"sans-serif",
                        color:"#000000"
                      }}
                >
                  {" "}
                  <a href="#">Web scraping</a>
                </Typography>
                <Box className="flex gap-3 items-center">
                  <Typography>
                    <img
                      src="src/assets/secondblogsection/bookreadbloglist.svg"
                      height={22}
                      width={22}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                    6 min read
                  </Typography>
                </Box>
                <Box className="flex gap-3 items-center">
                  <Typography>
                    <img
                      src="src/assets/secondblogsection/authorbloglist.svg"
                      height={22}
                      width={22}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Louis
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>


          <Box className="flex gap-5">
            <Box sx={{ maxWidth: "331px", maxHeight: "241px" }}>
              <img
                src="src/assets/secondblogsection/ApplicationsofDeepLearninginVariousIndustries.webp"
                alt=""
                style={{ height: "272px" }}
              />
            </Box>
            <Box className="flex flex-col gap-4" sx={{ maxWidth: "473px" }}>
              <Typography>12 Jul 2024</Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "#202020",
                  fontWeight:"800",
                  fontFamily:"sans-serif",
                  "&:hover": { color: "#e99f12" },
                }}
              >
                10 Applications of Deep Learning in <br /> Various Industries
              </Typography>
              <Typography>
              Discover the transformative impact of Deep Learning across industries. Explore how AI applications like AI-driven speech recognition, facial recognition, personalized recommendations, health diagnostics, and fake news....
              </Typography>
              <Box className="flex justify-between items-center">
                <Typography
                  sx={{
                    border: "1px solid #e99f12",
                    padding: "6px",
                    borderRadius: "10px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  <a href="#">Artificial Intelligence</a>
                </Typography>
                <Box className="flex gap-3 items-center">
                  <Typography>
                    <img
                      src="src/assets/secondblogsection/bookreadbloglist.svg"
                      height={22}
                      width={22}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                    5 min read
                  </Typography>
                </Box>
                <Box className="flex gap-3 items-center">
                  <Typography>
                    <img
                      src="src/assets/secondblogsection/authorbloglist.svg"
                      height={22}
                      width={22}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Brendan
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>



          <Box className="flex gap-5">
            <Box sx={{ maxWidth: "331px", maxHeight: "241px" }}>
              <img
                src="src/assets/secondblogsection/artificial-intelligence_o1Wu1x6.webp"
                alt=""
                style={{ height: "238px" }}
              />
            </Box>
            <Box className="flex flex-col gap-4" sx={{ maxWidth: "473px" }}>
              <Typography>07 Jul 2024</Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "#202020",
                  fontFamily:"sans-serif",
                  fontWeight:"800",
                  "&:hover": { color: "#e99f12" },
                }}
              >
                Future Trends in AI and Data Science
              </Typography>
              <Typography sx={{fontFamily:"sans-serif"}}>
              Explore the future trends in AI and data science, including AI integration, specialized analytics ICs, robotics, blockchain security, cloud analytics, and real-time analytics, shaping business innovation and decision-making.
              </Typography>
              <Box className="flex justify-between items-center">
                <Typography
                  sx={{
                    border: "1px solid #e99f12",
                    padding: "6px",
                    borderRadius: "10px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  <a href="#">Artificial Intellenigence</a>
                </Typography>
                <Box className="flex gap-3 items-center">
                  <Typography>
                    <img
                      src="src/assets/secondblogsection/bookreadbloglist.svg"
                      height={22}
                      width={22}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                    5 min read
                  </Typography>
                </Box>
                <Box className="flex gap-3 items-center">
                  <Typography>
                    <img
                      src="src/assets/secondblogsection/authorbloglist.svg"
                      height={22}
                      width={22}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Brendan
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>



          <Box className="flex gap-5">
            <Box sx={{ maxWidth: "331px", maxHeight: "241px" }}>
              <img
                src="src/assets/secondblogsection/brand_identity.webp"
                alt=""
                style={{ height: "272px" }}
              />
            </Box>
            <Box className="flex flex-col gap-4" sx={{ maxWidth: "473px" }}>
              <Typography>27 Jun 2024</Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "#202020",
                  fontFamily:"sans-serif",
                  fontWeight:"800",
                  "&:hover": { color: "#e99f12" },
                }}
              >
                Creating a Brand Identity: How a Logo Fits into a Brand Identity
              </Typography>
              <Typography>
              Discover how a well-designed logo fits into your brand identity. Learn the fundamentals of logo design, the psychology of color and typography, and the steps to create a memorable logo that enhances customer trust and loyalty.
              </Typography>
              <Box className="flex justify-between items-center">
                <Typography
                  sx={{
                    border: "1px solid #e99f12",
                    padding: "6px",
                    borderRadius: "10px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  <a href="#">Designing</a>
                </Typography>
                <Box className="flex gap-3 items-center">
                  <Typography>
                    <img
                      src="src/assets/secondblogsection/bookreadbloglist.svg"
                      height={22}
                      width={22}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                    4 min read
                  </Typography>
                </Box>
                <Box className="flex gap-3 items-center">
                  <Typography>
                    <img
                      src="src/assets/secondblogsection/authorbloglist.svg"
                      height={22}
                      width={22}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Benson
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>




          <Box className="flex gap-5">
            <Box sx={{ maxWidth: "331px", maxHeight: "241px" }}>
              <img
                src="src/assets/secondblogsection/page_load.webp"
                alt=""
                style={{ height: "275px" }}
              />
            </Box>
            <Box className="flex flex-col gap-4" sx={{ maxWidth: "473px" }}>
              <Typography>26 Jun 2024</Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "#202020",
                  fontFamily:"sans-serif",
                  fontWeight:"800",
                  "&:hover": { color: "#e99f12" },
                }}
              >
                Improving Page Load Times - 16 Best Practices for Optimizing Web...
              </Typography>
              <Typography>
              Discover essential strategies to make your web pages load faster, enhance user experience, and boost SEO. Learn what is a good page load time and tackle issues like internet slow loading web pages. Optimize your sites speed and efficiency...
              </Typography>
              <Box className="flex justify-between items-center">
                <Typography
                  sx={{
                    border: "1px solid #e99f12",
                    padding: "6px",
                    borderRadius: "10px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  <a href="#">Web Development</a>
                </Typography>
                <Box className="flex gap-3 items-center">
                  <Typography>
                    <img
                      src="src/assets/secondblogsection/bookreadbloglist.svg"
                      height={22}
                      width={22}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                    17 min read
                  </Typography>
                </Box>
                <Box className="flex gap-3 items-center">
                  <Typography>
                    <img
                      src="src/assets/secondblogsection/authorbloglist.svg"
                      height={22}
                      width={22}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Helen
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>



          <Box className="flex gap-5">
            <Box sx={{ maxWidth: "331px", maxHeight: "241px" }}>
              <img
                src="src/assets/secondblogsection/ui_ux.webp"
                alt=""
                style={{ height: "250px" }}
              />
            </Box>
            <Box className="flex flex-col gap-4" sx={{ maxWidth: "473px" }}>
              <Typography>25 jun 2024</Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "#202020",
                  fontFamily:"sans-serif",
                  fontWeight:"800",
                  "&:hover": { color: "#e99f12" },
                }}
              >
                What is the Difference Between UI and UX Design? Get the Facts Right
              </Typography>
              <Typography>
              Discover the differences between UX, UI, and product design. Understand their roles, objectives, and how they work together in product development. Get expert insights from Zyneto s professional designers.
              </Typography>
              <Box className="flex justify-between items-center">
                <Typography
                  sx={{
                    border: "1px solid #e99f12",
                    padding: "6px",
                    borderRadius: "10px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  <a href="#">Designing</a>
                </Typography>
                <Box className="flex gap-3 items-center">
                  <Typography>
                    <img
                      src="src/assets/secondblogsection/bookreadbloglist.svg"
                      height={22}
                      width={22}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                    4 min read
                  </Typography>
                </Box>
                <Box className="flex gap-3 items-center">
                  <Typography>
                    <img
                      src="src/assets/secondblogsection/authorbloglist.svg"
                      height={22}
                      width={22}
                      alt=""
                    />
                  </Typography>
                  <Typography
                    sx={{
                      color: "#202020",
                      fontWeight: "600",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Benson
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>


        </Box>

        <Box sx={{width:'30%'}}>
        <Box
          sx={{
            border: "1px solid #e99f12",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              color: "#000000 ",
              fontFamily: "sans-serif",
              marginBottom:"20px",
              fontWeight:"800"
            }}
          >
            Relevant Keywords
          </Typography>
          <Box className="flex flex-wrap gap-3">
            <Typography
              sx={{
                border: "1px solid #e99f12",
                padding: "6px",
                borderRadius: "10px",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {" "}
              <a href="#">Artificial intelligence</a>
            </Typography>
            <Typography
              sx={{
                border: "1px solid #e99f12",
                padding: "6px",
                borderRadius: "10px",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {" "}
              <a href="#">DevOps</a>
            </Typography>
            <Typography
              sx={{
                border: "1px solid #e99f12",
                padding: "6px",
                borderRadius: "10px",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {" "}
              <a href="#">Designsing</a>
            </Typography>
            <Typography
              sx={{
                border: "1px solid #e99f12",
                padding: "6px",
                borderRadius: "10px",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {" "}
              <a href="#">Web Scraping </a>
            </Typography>
            <Typography
              sx={{
                border: "1px solid #e99f12",
                padding: "6px",
                borderRadius: "10px",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {" "}
              <a href="#">Mobile App Development</a>
            </Typography>
            <Typography
              sx={{
                border: "1px solid #e99f12",
                padding: "6px",
                borderRadius: "10px",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              {" "}
              <a href="#">Web Development</a>
            </Typography>
          </Box>
        </Box>


        <Box>
            <Typography sx={{fontSize:"24px", fontFamily:'sans-serif', color:"#000000",fontWeight:"800"}}>Popular Blogs</Typography>
        </Box>

        </Box>
      </Container>
    </>
  );
};
export default SecondBlogSection;
