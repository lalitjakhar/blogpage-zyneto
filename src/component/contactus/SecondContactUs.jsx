import { Avatar, Box, Typography } from "@mui/material";
import { Container } from "@mui/material";

const vikasChatting = [
  {
    id: 1,
    message: "hey just had a great chat with zyneto global tecnology.They are offering some impressive solution for our project  ",
  },
  
];
const bheemChatting = [
    {
      id: 1,
      message: "That's awesome! What Specifically did you discuss? ",
    },
   
  ];
  

function SecondContactUs() {
  return (
    <>
      <Box sx={{ paddingBlock: "50px", bgcolor:"#FFF5EB"  }}>
        <Container maxWidth="xl" className="flex">
          <Box width={"50%"} className="flex items-center">
           <Box className="flex flex-col gap-5"  >
                <Typography variant="h3" sx={{fontSize:"36px", fontFamily:"sans-serif",lineHeight:"44px", textAlign:"left",fontWeight:"700"}}>Let s <span className="HeadingsAboutSectionColor "> Chat & build</span> your next product!</Typography>
                <Typography sx={{fontSize:"20px",fontWeight:"500",lineHeight:"30px", color:"#424242", width:"499px"}}>
                    Whether you&apos;re envisioning the next revolutionary product or
                    seeking to elevate your current offerings, we&apos;re here to make it
                    happen. With our blend of creativity, expertise, and dedication,
                    we all work hand in hand to bring your ideas to fruition.
                </Typography>
           </Box>
          </Box>
            <Box  width={"50%"} className="flex flex-col gap-5">
          {vikasChatting.map((post, index) => (
              <Box key={index} className="flex gap-4 items-center">
                <Box
                  sx={{
                    paddingInline: "15px",
                    paddingBlock: "10px",
                    borderRadius: "30px 30px 0px 30px",
                    backgroundColor: "#f9e3cf",
                  }}
                >
                  <Typography sx={{ fontSize: "18px", width: "400px" }}>
                    {post?.message}
                  </Typography>
                </Box>
                <Box>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 70, height: 70 }}
                  />
                </Box>
              </Box>
              ))}
              {bheemChatting.map((post,index)=>(
              <Box key={index} className="flex gap-4 items-center">
                <Box>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 70, height: 70 }}
                  />
                </Box>
                <Box
                  sx={{
                    paddingInline: "15px",
                    paddingBlock: "10px",
                    borderRadius: "0px 30px 30px 30px",
                    backgroundColor: "#dedbdc",
                  }}
                >
                  <Typography sx={{ fontSize: "18px", width: "400px" }}>
                   {post?.message}
                  </Typography>
                </Box>
              </Box>
              ))}
               {vikasChatting.map((post, index) => (
              <Box key={index} className="flex gap-4 items-center">
                <Box
                  sx={{
                    paddingInline: "15px",
                    paddingBlock: "10px",
                    borderRadius: "30px 30px 0px 30px",
                    backgroundColor: "#f9e3cf",
                  }}
                >
                  <Typography sx={{ fontSize: "18px", width: "400px" }}>
                    {post?.message}
                  </Typography>
                </Box>
                <Box>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 70, height: 70 }}
                  />
                </Box>
              </Box>
              ))}
                {bheemChatting.map((post,index)=>(
              <Box key={index} className="flex gap-4 items-center">
                <Box>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 70, height: 70 }}
                  />
                </Box>
                <Box
                  sx={{
                    paddingInline: "15px",
                    paddingBlock: "10px",
                    borderRadius: "0px 30px 30px 30px",
                    backgroundColor: "#dedbdc",
                  }}
                >
                  <Typography sx={{ fontSize: "18px", width: "400px" }}>
                   {post?.message}
                  </Typography>
                </Box>
              </Box>
              ))}
               {vikasChatting.map((post, index) => (
              <Box key={index} className="flex gap-4 items-center">
                <Box
                  sx={{
                    paddingInline: "15px",
                    paddingBlock: "10px",
                    borderRadius: "30px 30px 0px 30px",
                    backgroundColor: "#f9e3cf",
                  }}
                >
                  <Typography sx={{ fontSize: "18px", width: "400px" }}>
                    {post?.message}
                  </Typography>
                </Box>
                <Box>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 70, height: 70 }}
                  />
                </Box>
              </Box>
              ))}
            </Box>
          
        </Container>
      </Box>
    </>
  );
}

export default SecondContactUs;
