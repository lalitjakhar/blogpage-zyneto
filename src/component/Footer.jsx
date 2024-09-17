import { Box, Typography } from "@mui/material"
import { Container } from "@mui/material"

const footerPost=[
    {
        id:"1",
        imglink:"src/assets/footer/calliconfooter.svg",
        mobnumber:"+91-95096-25-345"
    },
    {
        id:"2",
        imglink:"src/assets/footer/mailiconfooter.svg",
        mobnumber:"info@zyneto.com"
    },
    {
        id:"3",
        imglink:"src/assets/footer/locationiconfooter.svg",
        mobnumber:"302, 3rd Floor, Nirman Nagar E, E-10, Ajmer Rd, opposite Asopa Hospital, Jaipur, Rajasthan  302024"
    },
]

function Footer() {
  return (
    <>
  <Box sx={{bgcolor:"#202020"}}>
  <Box sx={{borderBottom:"2px solid #333"}}>

<Container maxWidth="xl" className="flex footercontent" sx={{paddingTop:"80px"}}>

    <Box width={"33%"} sx={{borderRight:"2px solid #333"}} className="flex flex-col gap-5 footercontentfirst">
        <Typography>
            <img src="src/assets/navbar/logo (1).svg" alt="" width={370} height={60} />
        </Typography>
        <Typography className="footercontentfirst" sx={{fontSize:"18px", color:"#bdbdbd", width:"407px"}}>
        At Zyneto Technologies, we are more than just a software company we are your trusted partner in transforming your ideas into digital success.
        </Typography>
        <Box>
        { footerPost.map((post, index) => {
          return (
        <Box  key={index} className="flex items-start gap-4 mb-4">
            <Box ><span className="flex justify-center items-center hovericon" style={{width:"32px", height:"32px", borderRadius:"30px", backgroundColor:"#333" }}><img src={post.imglink} alt=""style={{width:"26px", height:"26px"}}/></span></Box>
            <Typography className="footercontentfirst" sx={{color:"#bdbdbd" ,width:"407px"}}>{post.mobnumber}</Typography>
        </Box>
          )
        })}
        </Box>
    </Box>

   <Box className="flex justify-around footercontentsecond " width={"66%"}>
   <Box className="footercontentsecond " width={"50%"}  sx={{borderRight:"2px solid #333",paddingLeft:"60px",paddingTop:"40px"}}>
        <Typography sx={{fontSize:'24px', color:"#ffffff", fontWeight:"700"}}>Quick Links</Typography>
          <Box sx={{height:"4px", width:"50px", background:" linear-gradient(90deg, #e99f12, #f04f2c);",marginBottom:'30px'}}></Box>
          <Box>
            <ul>
                <li className="hoverlink" style={{fontSize:"18px", color:"#dbdbdb", fontFamily:"sans-serif", fontWeight:"500" , marginBottom:"10px"}}><a href="#"> Home</a></li>
                <li className="hoverlink" style={{fontSize:"18px", color:"#dbdbdb", fontFamily:"sans-serif", fontWeight:"500", marginBottom:"10px"}}><a href="#"> Services</a></li>
                <li className="hoverlink" style={{fontSize:"18px", color:"#dbdbdb", fontFamily:"sans-serif", fontWeight:"500", marginBottom:"10px"}}><a href="#">About Us</a></li>
                <li className="hoverlink" style={{fontSize:"18px", color:"#dbdbdb", fontFamily:"sans-serif", fontWeight:"500", marginBottom:"10px"}}><a href="#">Blog</a></li>
                <li className="hoverlink" style={{fontSize:"18px", color:"#dbdbdb", fontFamily:"sans-serif", fontWeight:"500", marginBottom:"10px"}}><a href="#"> Contact Us</a></li>

            </ul>
          </Box>
    </Box>
    <Box className="footercontentsecond " width={"50%"} sx={{paddingLeft:"60px"}}>
        <Typography sx={{fontSize:'24px', color:"#ffffff", fontWeight:"700",paddingTop:"40px"}}>Services</Typography>
          <Box sx={{height:"4px", width:"50px", background:" linear-gradient(90deg, #e99f12, #f04f2c);",marginBottom:'30px'}}></Box>
          <Box>
            <ul>
                <li className="hoverlink" style={{fontSize:"18px", color:"#dbdbdb", fontFamily:"sans-serif", fontWeight:"500", marginBottom:"10px"}}><a href="#"> Designing</a></li>
                <li className="hoverlink" style={{fontSize:"18px", color:"#dbdbdb", fontFamily:"sans-serif", fontWeight:"500" , marginBottom:"10px"}}><a href="#">Web Development</a></li>
                <li className="hoverlink" style={{fontSize:"18px", color:"#dbdbdb", fontFamily:"sans-serif", fontWeight:"500", marginBottom:"10px"}}><a href="#">App Development</a></li>
                <li className="hoverlink" style={{fontSize:"18px", color:"#dbdbdb", fontFamily:"sans-serif", fontWeight:"500" , marginBottom:"10px"}}><a href="#">Web Scraping</a></li>
                <li className="hoverlink" style={{fontSize:"18px", color:"#dbdbdb", fontFamily:"sans-serif", fontWeight:"500" , marginBottom:"10px"}}><a href="#"> DevOps</a></li>
                <li className="hoverlink" style={{fontSize:"18px", color:"#dbdbdb", fontFamily:"sans-serif", fontWeight:"500" , marginBottom:"10px"}}><a href="#"> Artificial Intelligence</a></li>
            </ul>

          </Box>
    </Box>
   </Box>
</Container>

</Box>
<Container maxWidth="xl" className="flex justify-between items-center" sx={{paddingBlock:"20px"}}>
   <Typography sx={{color:"#818181", fontSize:"16px", fontFamily:"sans-serif",fontWeight:"500"}}>© Zyneto Global Technologies. All Rights Reserved.</Typography>
   <Box className="flex gap-8">
    <Box ><span className="flex justify-center items-center hovericon" style={{width:"42px", height:"42px", borderRadius:"30px", backgroundColor:"#333" }}><img src="src/assets/footer/facebookiconfooter.svg" alt=""style={{width:"26px", height:"26px"}}/></span></Box>
    <Box><span className="flex justify-center items-center hovericon" style={{width:"42px", height:"42px", borderRadius:"30px", backgroundColor:"#333" }}><img src="src/assets/footer/instagramiconfooter.svg" alt="" width={"26px"} /></span></Box>
    <Box><span className="flex justify-center items-center hovericon" style={{width:"42px", height:"42px", borderRadius:"30px", backgroundColor:"#333" }}><img src="src/assets/footer/linkediniconfooter.svg" alt="" width={"16px"} /></span></Box>
   </Box>

</Container>
  </Box>
    </>
  )
}

export default Footer