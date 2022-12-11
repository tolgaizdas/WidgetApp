import React, { useState } from "react";
import NewSocialMedia from "./NewSocialMedia";
import SocialMediaList from "./SocialMediaList";

export default function SocialMediaWidget() {
  const [socialMedias, setSocialMedias] = useState([
    {
      icon: "https://github.com/favicon.ico",
      name: "Github",
      link: "https://github.com/tolgaizdas",
    },
  ]);

  const [socialMedia, setSocialMedia] = useState({
    icon: "",
    name: "",
    link: "",
  });

  //   async function getIcon(url) {
  //     return fetch(url).then((res) => res);
  //     //   .then((json) => {
  //     //     return json;
  //     //   });
  //   }

  const handleInput = (event) => {
    const { name, value } = event.target;
    setSocialMedia((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addSocialMedia = () => {
    // socialMedia.icon = await getIcon(
    //   `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${socialMedia.link}`
    // );

    if (socialMedia.name.trim() !== "" && socialMedia.link.trim() !== "") {
      setSocialMedias((prev) => {
        return [...prev, socialMedia];
      });
      setSocialMedia({ name: "", link: "", icon: "" });
    }
  };

  const deleteSocialMedia = (id) => {
    const newSocialMedias = socialMedias.filter((socialMedia, index) => {
      return index !== id;
    });
    setSocialMedias(newSocialMedias);
  };

  return (
    <div>
      <NewSocialMedia
        handleInput={handleInput}
        socialMedia={socialMedia}
        addSocialMedia={addSocialMedia}
      />
      <SocialMediaList
        socialMedias={socialMedias}
        deleteSocialMedia={deleteSocialMedia}
      />
    </div>
  );
}
