import { Box, Typography } from "@mui/material";
import { Container } from "@mui/material";

const FirstAbout=()=>{
    return(
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
          <Box className="flex flex-col gap-9 firstblogcontent1 " sx={{ width: "50%", paddingTop:"60px", order:{sm:"2",xs:"2" ,md:"1",xl:"1",lg:"1"} }}>
            <Box>
              <Typography
                className=""
                variant="h2"
                sx={{
                  fontSize:{xs:"20px",sm:"20px",md:"36px",lg:"36px",xl:"36px"},
                  lineHeight: "44px",
                  fontWeight: "800",
                  color: "#ffffff",
                  fontFamily: "sans-serif",
                
                }}
              >
                Why Choose <span className="zyneto-global"> Zyneto</span> 
              </Typography>
              <Typography
                variant="h2"
                
                sx={{
                  fontSize:{xs:"20px",sm:"20px",md:"36px",lg:"36px",xl:"36px"},
                  lineHeight: "44px",
                  fontWeight: "800",
                  color: "#ffffff",
                  fontFamily: "sans-serif",
                  
                }}
              >
                Global Technology Team?
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: {xs:"10px",sm:"10px",md:"20px",xl:"20px",lg:"20px"},
                lineHeight: "30px",
                fontWeight: "500",
                color: "#bababa",
                width:"516px"
              }}
              className="firstblogcontent1"
            >
             Choose Zyneto Global Team for expertise, innovation, collaboration, tailored solutions, quality assurance, and customer satisfaction. <span style={{color:"#db7644"}}> Experience the difference </span> of working with a team that is committed to your success.
            </Typography>
          </Box>
          <Box className="flex justify-center firstblogcontent1" width={"50%"} sx={{ order:{sm:"1",xs:"1" ,md:"2",xl:"2",lg:"2"}}}>
            <Box sx={{ zIndex: "1" }}>
              {" "}
              <img src="src/assets/firstabout/about.webp" alt="" width={377} height={377} />
            </Box>
          </Box>
        </Container>
        </Box>
        </>
    )
};
export default FirstAbout;