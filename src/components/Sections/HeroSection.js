import React from "react";
import styled from "styled-components";
import wave_blue from "../../../public/static/background/wave_blue.svg";
import studeo_text from "../../../public/static/background/studeo_text.svg";
import recent_screen from "../../../public/static/mockup/recent_chat_screen.png";
import DownloadButton from "../Buttons/DownloadButton";
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
        <DownloadButton />
      </SectionWrapper>
      <MockupImgSection>
        <MockupImg src={recent_screen} />
        <SpecialText src={studeo_text} />
      </MockupImgSection>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  overflow-x: hidden;
`;
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
  padding-top: 150px;
`;
const Title = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 44px;
  text-align: center;

  /* Text Black */

  color: #000000;
`;
const Subtitle = styled.h5`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 22px;
  text-transform: uppercase;
  /* identical to box height */

  text-align: center;

  /* Primary */

  color: #0099ff;
`;

const MockupImgSection = styled.div`
  text-align: center;
`;

const MockupImg = styled.img`
  width: 400px;
  height: auto;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  padding-bottom: 50px;
`;

const SpecialText = styled.img`
  position: absolute;
  z-index: -1;
  max-width: 1400px;
  width: 80%;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 200px;
  padding-top: 400px;
  overflow-x: hidden;
`;
// position: relative;
//   width: 400px;
//   height: auto;
//   left: 0;
//   right: 0;
//   margin: auto;
//   padding-top: 100px;
