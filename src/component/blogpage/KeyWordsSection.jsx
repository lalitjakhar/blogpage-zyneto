import { Box, Typography } from "@mui/material";

const keywordsList = ["Artificial intelligence","DevOps","Desiging","Web Scraping","Mobile App Development","Web Development"];
const KeyWordsSection = () => {
  return (
    <>
      <Typography
        sx={{
          fontSize: "24px",
          color: "#000000 ",
          fontFamily: "sans-serif",
          marginBottom: "20px",
          fontWeight: "800",
        }}
      >
        Relevant Keywords
      </Typography>
      <Box className="flex flex-wrap gap-3">
        {keywordsList.map((keyword, index) => (
          <Typography
            key={index}
            sx={{
              border: "1px solid #e99f12",
              padding: "6px",
              borderRadius: "10px",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            <a href="#">{keyword}</a>
          </Typography>
        ))}
      </Box>
    </>
  );
};

export default KeyWordsSection;
