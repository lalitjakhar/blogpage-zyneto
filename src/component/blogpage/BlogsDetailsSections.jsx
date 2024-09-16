import { Box, Typography } from "@mui/material";

const blogPost = [
  {
    id: 1,
    date: "10 Sep 2024",
    title: "Advantages of Cross-Platform Development: What You Need to Know",
    description:
      "Explore cross-platform development benefits, including lower costs, faster launches, and top tools like React Native and Flutter for efficient multi-platform app deployment.",
    category: "Mobile App Development",
    readTime: "3 min read",
    author: "Clara",
    imageUrl: "src/assets/secondblogsection/cross-platform.webp",
  },
  {
    id: 2,
    date: "27 Aug 2024",
    title:
      "Why Python is Ideal for DevOps: Exploring the Benefits of Using Python",
    description:
      "Learn why Python is ideal for DevOps with its simplicity, speed, and robust libraries, enhancing productivity and streamlining software development.",
    category: "Mobile App Development",
    readTime: "10 min read",
    author: "DevOps",
    imageUrl: "src/assets/secondblogsection/python-devops.webp",
  },
  {
    id: 1,
    date: "10 Sep 2024",
    title: "Advantages of Cross-Platform Development: What You Need to Know",
    description:
      "Explore cross-platform development benefits, including lower costs, faster launches, and top tools like React Native and Flutter for efficient multi-platform app deployment.",
    category: "Mobile App Development",
    readTime: "3 min read",
    author: "Clara",
    imageUrl: "src/assets/secondblogsection/cross-platform.webp",
  },
  {
    id: 2,
    date: "27 Aug 2024",
    title:
      "Why Python is Ideal for DevOps: Exploring the Benefits of Using Python",
    description:
      "Learn why Python is ideal for DevOps with its simplicity, speed, and robust libraries, enhancing productivity and streamlining software development.",
    category: "Mobile App Development",
    readTime: "10 min read",
    author: "DevOps",
    imageUrl: "src/assets/secondblogsection/python-devops.webp",
  },
  {
    id: 1,
    date: "10 Sep 2024",
    title: "Advantages of Cross-Platform Development: What You Need to Know",
    description:
      "Explore cross-platform development benefits, including lower costs, faster launches, and top tools like React Native and Flutter for efficient multi-platform app deployment.",
    category: "Mobile App Development",
    readTime: "3 min read",
    author: "Clara",
    imageUrl: "src/assets/secondblogsection/cross-platform.webp",
  },
  {
    id: 1,
    date: "10 Sep 2024",
    title: "Advantages of Cross-Platform Development: What You Need to Know",
    description:
      "Explore cross-platform development benefits, including lower costs, faster launches, and top tools like React Native and Flutter for efficient multi-platform app deployment.",
    category: "Mobile App Development",
    readTime: "3 min read",
    author: "Clara",
    imageUrl: "src/assets/secondblogsection/cross-platform.webp",
  },
  {
    id: 2,
    date: "27 Aug 2024",
    title:
      "Why Python is Ideal for DevOps: Exploring the Benefits of Using Python",
    description:
      "Learn why Python is ideal for DevOps with its simplicity, speed, and robust libraries, enhancing productivity and streamlining software development.",
    category: "Mobile App Development",
    readTime: "10 min read",
    author: "DevOps",
    imageUrl: "src/assets/secondblogsection/python-devops.webp",
  },
  {
    id: 2,
    date: "27 Aug 2024",
    title:
      "Why Python is Ideal for DevOps: Exploring the Benefits of Using Python",
    description:
      "Learn why Python is ideal for DevOps with its simplicity, speed, and robust libraries, enhancing productivity and streamlining software development.",
    category: "Mobile App Development",
    readTime: "10 min read",
    author: "DevOps",
    imageUrl: "src/assets/secondblogsection/python-devops.webp",
  },
  {
    id: 1,
    date: "10 Sep 2024",
    title: "Advantages of Cross-Platform Development: What You Need to Know",
    description:
      "Explore cross-platform development benefits, including lower costs, faster launches, and top tools like React Native and Flutter for efficient multi-platform app deployment.",
    category: "Mobile App Development",
    readTime: "3 min read",
    author: "Clara",
    imageUrl: "src/assets/secondblogsection/cross-platform.webp",
  },
];
const BlogsDetailsSections = () => {
  return (
    <>
      {blogPost.map((abcd, index) => {
        return (
          <Box key={index} className="flex gap-5 secondblogcontent2">
            <Box
              className="secondblogimg"
              sx={{ width: "331px", height: "251px" }}
            >
              <img
                src={abcd.imageUrl}
                alt=""
                style={{ height: "250px" }}
                className="secondblogimg"
              />
            </Box>
            <Box
              className="flex flex-col gap-4 secondblogimg"
              sx={{ width: "473px" }}
            >
              <Typography>{abcd.date}</Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "#202020",
                  fontWeight: "800",
                  fontFamily: "sans-serif",
                  "&:hover": { color: "#e99f12" },
                }}
              >
                {abcd.title}
              </Typography>
              <Typography>{abcd.description}</Typography>
              <Box className="flex justify-between items-center">
                <Typography
                  sx={{
                    border: "1px solid #e99f12",
                    padding: "6px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    fontWeight: "500",
                    fontFamily: "sans-serif",
                    color: "#000000",
                  }}
                >
                  {" "}
                  <a href="#">{abcd.category}</a>
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
                    {abcd.readTime}
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
                    {abcd.author}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default BlogsDetailsSections;
