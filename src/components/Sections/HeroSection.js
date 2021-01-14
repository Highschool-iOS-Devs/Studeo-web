import React from "react";
import styled from "styled-components";
import wave_blue from "../../../public/static/wave_blue.svg";

export default function HeroSection() {
  return (
    <Wrapper>
      <WaveImage src={wave_blue}></WaveImage>
      <SectionWrapper>
        <Subtitle>Studeo</Subtitle>
        <Title>
          The Discord app
          <br />
          for studying.
        </Title>
      </SectionWrapper>
      <StyleText>Studeo</StyleText>
    </Wrapper>
  );
}
const Wrapper = styled.div``;
const WaveImage = styled.img`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
const SectionWrapper = styled.div`
  display: grid;
  gap: 5px;
`;
const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  text-align: center;

  /* Text Black */

  color: #000000;
`;
const Subtitle = styled.h5`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  /* identical to box height */

  text-align: center;

  /* Primary */

  color: #0099ff;
`;

const StyleText = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 230px;
  line-height: 280px;
  text-align: center;
  letter-spacing: -0.02em;
  background: Linear Gradient rgba(70, 226, 250, 0.05) @0%
    rgba(0, 153, 255, 0.5) @30.97% rgba(217, 128, 250, 0.5) @67.02%
    rgba(253, 167, 223, 0.05) @100%;
`;
