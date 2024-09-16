import {
  Box,
  Container,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FirstBlogPage = () => {
  return (
    <>
      <Box
        sx={{ bgcolor: "#202020", paddingBlock: "100px", position: "relative" }}
      >
        <Box sx={{ position: "absolute", right: "0" }}>
          {" "}
          <img
            src="src/assets/firstblogpage/gradientblue (1).svg"
            alt=""
            width={392}
          />
        </Box>
        <Container maxWidth="xl" className="flex firstblogcontent">
          <Box
            className="flex flex-col gap-9 firstblogcontent1"
            sx={{ width: "50%" }}
          >
            <Box>
              <Typography
                className=""
                variant="h2"
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "20px",
                    md: "36px",
                    lg: "36px",
                    xl: "36px",
                  },
                  lineHeight: "44px",
                  fontWeight: "800",
                  color: "#ffffff",
                  fontFamily: "sans-serif",
                }}
              >
                Your go-to destination for
              </Typography>
              <Typography
                variant="h2"
                className="zyneto-global"
                sx={{
                  fontSize: {
                    xs: "20px",
                    sm: "20px",
                    md: "36px",
                    lg: "36px",
                    xl: "36px",
                  },
                  lineHeight: "44px",
                  fontWeight: "800",
                  color: "#ffffff",
                  fontFamily: "sans-serif",
                }}
              >
                Insightful Blogs!
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "10px",
                  md: "20px",
                  xl: "20px",
                  lg: "20px",
                },
                lineHeight: "30px",
                fontWeight: "500",
                color: "#bababa",
                width: "516px",
              }}
              className="firstblogcontent1"
            >
              Dive into our collection of{" "}
              <span style={{ color: "#db7b44" }}>
                thought-provoking content
              </span>{" "}
              crafted to inspire, educate, and empower you on your digital
              journey. Whether you re looking for tips on software development,
              trends in AI and machine learning, or best practices in web
              design, our blog has something for everyone.
            </Typography>
          </Box>
          <Box className="flex justify-center firstblogcontent1" width={"50%"}>
            <Box sx={{ zIndex: "1" }}>
              {" "}
              <img src="src/assets/firstblogpage/BlogHero.webp" alt="" />
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ paddingBlock: "50px" }}>
        <Box
          sx={{
            width: {
              sm: "100%",
              xs: "100%",
              md: "823px",
              lg: "823px",
              xl: "823px",
            },
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search By Blog"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
              "& .MuiOutlinedInput-input": {
                fontFamily: "sans-serif",
                backgroundColor: "#f7f7f7",
              },
            }}
          />
        </Box>
      </Container>
    </>
  );
};
export default FirstBlogPage;
