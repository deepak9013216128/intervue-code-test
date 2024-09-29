const { createContext, useContext, useState } = require("react");

const ProfilesContext = createContext({
  profiles: [],
  addProfile: () => {},
  editProfile: (profileId, profileData) => {},
});

export default function ProfilesProvider({ children }) {
  const [profiles, setProfiles] = useState([
    {
      name: "deepak",
      icon: "/assets/images/smile.png",
      id: "1",
    },
    {
      name: "deepak",
      icon: "/assets/images/smile.png",
      id: "2",
    },
    {
      name: "deepak",
      icon: "/assets/images/smile.png",
      id: "3",
    },
    {
      name: "deepak",
      icon: "/assets/images/smile.png",
      id: "4",
    },
  ]);

  const addProfile = (profile) => {
    setProfiles((p) => [...p, profile]);
  };
  const editProfile = (profileId, profileData) => {
    const profileIdx = profiles.findIndex((p) => p?.id === profileId);

    if (profileIdx === -1) return;

    const updatedProfiles = [...profiles];
    updatedProfiles[profileIdx] = profileData;

    setProfiles(updatedProfiles);
  };
  return (
    <ProfilesContext.Provider
      value={{ profiles: profiles, addProfile, editProfile }}
    >
      {children}
    </ProfilesContext.Provider>
  );
}

export const useProfiles = () => useContext(ProfilesContext);
