import { Box, Typography } from "@mui/material";
import { Container } from "@mui/material";

const OurVisionSection=()=>{
    return(
        <>
        <Box
        sx={{ bgcolor: "#ffebef", paddingBlock: "100px", position: "relative" }}
      >
        
        <Container maxWidth="xl" className="flex firstblogcontent">
          <Box className="flex flex-col gap-9 firstblogcontent1 " sx={{ width: "50%", order:{sm:"2",xs:"2" ,md:"1",xl:"1",lg:"1"} }}>
            <Box>
              <Typography
                className=""
                variant="h2"
                sx={{
                  fontSize:{xs:"20px",sm:"20px",md:"36px",lg:"36px",xl:"36px"},
                  lineHeight: "44px",
                  fontWeight: "800",
                  color: "#000",
                  fontFamily: "sans-serif",
                  
                
                }}
              >
                Our<span className="zyneto-global">  Vision</span> 
              </Typography>
              
            </Box>
            <Typography
              sx={{
                fontSize: "22px",
                lineHeight: "30px",
                fontWeight: "500",
                color: "#424242",
                width:"499px",
                textAlign:"left",
                fontFamily:"sans-serif"
                
              }}
              className="firstblogcontent1"
            >
             Our vision at Zyneto is to redefine the boundaries of digital innovation, creating a future where technology empowers businesses to thrive in an ever-changing world.
            </Typography>
            <Typography  sx={{
                fontSize: "22px",
                lineHeight: "30px",
                fontWeight: "500",
                color: "#424242",
                width:"499px",
                textAlign:"left",
                fontFamily:"sans-serif"
              }}
              className="firstblogcontent1">
            We envision a digital ecosystem where creativity, technology, and strategy converge to unlock limitless possibilities.
            </Typography>
          </Box>
          <Box className="flex  firstblogcontent1" width={"50%"} sx={{ order:{sm:"1",xs:"1" ,md:"2",xl:"2",lg:"2"}}}>
            <Box sx={{ paddingLeft:"50px"}}>
              {" "}
              <img src="src/assets/ourvisionsection/aboutimg2.webp" alt="" width={377} height={377} />
            </Box>
          </Box>
        </Container>
        </Box>
        </>
    )
};
export default OurVisionSection;