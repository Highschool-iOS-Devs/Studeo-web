import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export default function DownloadButton() {
  return (
    <Button>
      <Link to="404.js">
        <Text>Download Now</Text>
      </Link>
    </Button>
  );
}

const Button = styled.a`
  background: rgba(0, 153, 255, 0.15);
  border-radius: 15px;
  width: 145px;
  height: 30px;
  border: none;
`;

const Text = styled.h5`
  /* Small Semibold */

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 130%;
  /* identical to box height, or 16px */

  text-transform: uppercase;

  color: #000000;
`;
