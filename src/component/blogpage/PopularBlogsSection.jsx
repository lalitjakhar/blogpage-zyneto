import { Box, Typography } from "@mui/material";

const popularBlogs = [
  {
    id: 1,
    date: "10 Sep 2024",
    title: "Advantages of Cross-Platform Development: What You Need to Know",
    readTime: "3 min read",
    imageUrl: "src/assets/secondblogsection/cross-platform.webp",
  },
  {
    id: 2,
    date: "10 Sep 2024",
    title: "Advantages of Cross-Platform Development: What You Need to Know",
    readTime: "3 min read",
    imageUrl: "src/assets/secondblogsection/cross-platform.webp",
  },
  {
    id: 3,
    date: "10 Sep 2024",
    title: "Advantages of Cross-Platform Development: What You Need to Know",
    readTime: "3 min read",
    imageUrl: "src/assets/secondblogsection/cross-platform.webp",
  },
  {
    id: 4,
    date: "10 Sep 2024",
    title: "Advantages of Cross-Platform Development: What You Need to Know",
    readTime: "3 min read",
    imageUrl: "src/assets/secondblogsection/cross-platform.webp",
  },
  {
    id: 4,
    date: "10 Sep 2024",
    title: "Advantages of Cross-Platform Development: What You Need to Know",
    readTime: "3 min read",
    imageUrl: "",
  },
];

const PopularBlogsSection = () => {
  return (
    <>
      <Typography
        sx={{
          fontSize: "24px",
          fontFamily: "sans-serif",
          color: "#000000",
          fontWeight: "800",
        }}
      >
        Popular Blogs
      </Typography>
      {popularBlogs.map((blogs, index) => {
        return (
          <Box key={index} className="flex gap-3">
            <Box sx={{ width: "30%" }}>
              <img src={blogs.imageUrl} style={{ height: "66px" }} alt="" />
            </Box>
            <Box sx={{ width: "70%" }}>
              <Box className="flex justify-between mb-4">
                <Typography sx={{ fontSize: "12px", color: "#212529" }}>
                  10 Sep 2024
                </Typography>
                <Typography sx={{ fontSize: "12px", color: "#212529" }}>
                  3 min read
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#323232",
                  fontFamily: "sans-serif",
                  fontWeight: "600",
                }}
              >
                Advantages of Cross-Platform Development: What You Need to Know
              </Typography>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default PopularBlogsSection;
