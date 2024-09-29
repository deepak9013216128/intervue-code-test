import { useState } from "react";
import { Box, Button, Container, Toolbar } from "@mui/material";
import ProfileCard from "./ProfileCard";
import { useProfiles } from "@/hooks/profile";
import ManageProfile from "./ManageProfile";

export default function ProfileList() {
  const { profiles } = useProfiles();
  const [edit, setEdit] = useState(false);

  const handleManageProfile = () => {
    setEdit((p) => !p);
  };

  return (
    <Container maxWidth="md">
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        // alignItems={"center"}
        flexWrap={"wrap"}
      >
        {profiles?.map((profile) => (
          <ProfileCard key={profile?.id} profile={profile} edit={edit} />
        ))}

        <Box>
          <ManageProfile />
        </Box>
      </Box>
      <Toolbar />
      <Box textAlign={"center"} onClick={handleManageProfile}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 0,
            px: 4,
            textTransform: "capitalize",
            fontSize: 18,
            color: "rgba(255,255,255,0.7)",
            ":hover": {
              color: "white",
            },
          }}
        >
          {edit ? "Done" : "Manage Profiles"}
        </Button>
      </Box>
    </Container>
  );
}
