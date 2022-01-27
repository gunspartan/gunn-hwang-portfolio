import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { StyledProfile } from "./styles/ProfileImg.styled";

export default function ProfileImg() {
  return (
    <StyledProfile>
      <div>
        <StaticImage src='../images/profile_ccexpress.png' alt='' />
      </div>
    </StyledProfile>
  );
}
