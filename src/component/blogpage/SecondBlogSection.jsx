import { Box, Container } from "@mui/material";
import KeyWordsSection from "./KeyWordsSection";
import PopularBlogsSection from "./PopularBlogsSection";
import BlogsDetailsSections from "./BlogsDetailsSections";

const SecondBlogSection = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        className="flex secondblogcontent "
        sx={{ paddingBlock: "100px" }}
      >
        <Box
          className="flex flex-col gap-9 secondblogcontent1"
          sx={{ width: "70%" }}
        >
          <BlogsDetailsSections />
          
        </Box>
        <Box className="secondblogcontent1" sx={{ width: "30%" }}>
          <Box
            sx={{
              border: "1px solid #e99f12",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <KeyWordsSection />
          </Box>

          <Box
            className="flex flex-col gap-4 mt-8"
            sx={{
              border: "1px solid #e99f12",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <PopularBlogsSection />
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default SecondBlogSection;
