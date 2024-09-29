import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";

const StyledBox = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  ":hover": {
    color: "#fff",
    "& .MuiTypography-root": {
      color: "#fff",
    },
    "& .MuiBox-root ": {
      border: "2px solid white",
    },
  },
}));

export default function ProfileCard({ profile, edit }) {
  const { name, icon } = profile;

  return (
    <StyledBox>
      <Box
        width={150}
        height={150}
        position={"relative"}
        borderRadius={1}
        border={"2px solid black"}
        sx={{
          backgroundImage: `url('${icon}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          ":hover": {
            border: "2px solid white",
          },
        }}
      >
        {/* <Box position={"absolute"}>
          <Box position={"relative"} width={48} height={48}>
            <Image
              fill
              src={"/assets/images/edit.svg"}
              alt={name}
              style={{
                margin: "auto",
              
              }}
            />
          </Box>
        </Box> */}
      </Box>
      <Typography
        color="primary"
        textTransform={"capitalize"}
        textAlign={"center"}
        mt={1}
      >
        {name}
      </Typography>
    </StyledBox>
  );
}
