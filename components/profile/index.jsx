import { useState } from "react";

import { Box, Toolbar, Typography } from "@mui/material";
import ProfileList from "./ProfileList";

export default function Profile() {
  return (
    <Box
      minHeight={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography
        component={"h1"}
        variant="h3"
        textAlign={"center"}
        color="secondary"
        mb={4}
      >
        Who's is Watching?
      </Typography>

      <ProfileList />
    </Box>
  );
}
