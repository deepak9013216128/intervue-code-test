import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Stack, Typography, styled } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Image from "next/image";
import { useProfiles } from "@/hooks/profile";

const StyledAddIcon = styled(AddIcon)(({ theme }) => ({
  // background: "#f2f2f2",
  borderRadius: 4,
  ":hover": {
    background: "#f2f2f2",
    color: "#808080",
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  ":hover": {
    color: "#fff",
    "& .MuiTypography-root": {
      color: "#fff",
    },
    "& .MuiSvgIcon-root ": {
      background: "#f2f2f2",
      color: "#808080",
    },
  },
}));

export default function ManageProfile({ profileId }) {
  const [open, setOpen] = useState(false);
  const { addProfile } = useProfiles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box onClick={handleClickOpen}>
        <StyledBox>
          {/* <Box
            width={150}
            height={150}
            position={"relative"}
            borderRadius={1}
          ></Box> */}
          <AddIcon
            sx={{
              color: "white",
              width: 150,
              height: 150,
              borderRadius: 1,
            }}
          />
          <Typography
            color="primary"
            textTransform={"capitalize"}
            textAlign={"center"}
            mt={1}
          >
            Add Profile
          </Typography>
        </StyledBox>

        {/* <StyledAddIcon
          color="primary"
          sx={{
            width: 100,
            height: 100,
            // ":hover": {
            //   color: "black",
            // },
          }}
        ></StyledAddIcon>
        <Typography color="primary">Add Profile</Typography> */}
      </Box>

      {/* dialog for add profile */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        PaperProps={{
          component: "form",
          sx: {
            background: "grey",
          },
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const name = formJson.name;
            addProfile({ name, icon: "/assets/images/smile.png" });
            handleClose();
          },
        }}
      >
        <DialogTitle>Add a Profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a profile for another person watching Netflix.
          </DialogContentText>
          <Box display={"flex"} alignItems={"center"}>
            <Image
              width={64}
              height={64}
              src={"/assets/images/smile.png"}
              alt={"smile icon"}
            />
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="outlined"
              sx={{ ml: 2 }}
            />{" "}
          </Box>
        </DialogContent>
        <DialogActions>
          <Stack width={"100%"} spacing={2}>
            <Button type="submit" fullWidth variant="contained">
              Save
            </Button>
            <Button
              onClick={handleClose}
              fullWidth
              variant="text"
              color="primary"
            >
              Cancel
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  );
}
