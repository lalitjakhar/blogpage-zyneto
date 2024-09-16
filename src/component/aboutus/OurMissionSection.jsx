import { Box, Container, Typography } from "@mui/material";

const OurMissionSection=()=>{
    return(
        <>
        <Container maxWidth="xl" className="flex ourmissionsection" sx={{paddingBlock:'80px'}}>
            <Box className="ourmissioncontent" width={"50%"} >
                 <img src="src/assets/ourmissionsection/aboutimg1.webp" alt="" width={287} height={290} style={{order:{xs:"2",sm:"2"}}} />
            </Box>
            <Box 
            width={"50%"}
            className="flex flex-col gap-6 ourmissioncontent1"
            
            >
               
               <Box>
                    <Typography variant="h2" sx={{fontSize:"36px", fontFamily:"sans-serif", fontWeight:"800",marginBottom:"20px" }}>Our <span className="HeadingsAboutSectionColor"> Mission</span></Typography>
                    <Typography className="ourTypo" sx={{fontSize:"20px", color:"#424242", fontWeight:"500", fontFamily:"sans-serif", lineHeight:"30px", width:"499px"}}>At Zyneto, our mission is to empower businesses with innovative digital solutions that drive growth and foster success.</Typography>
               </Box>
                <Box>
                <Typography  className="ourTypo" sx={{fontSize:"20px", color:"#424242", fontWeight:"500", fontFamily:"sans-serif", lineHeight:"30px", width:"499px"}}>We are committed to delivering excellence in every project, leveraging the latest technologies and strategies to help our clients stay ahead in a rapidly evolving digital landscape.</Typography>
                </Box>
            </Box>
           


        </Container>
        </>
    )
}
export default OurMissionSection;