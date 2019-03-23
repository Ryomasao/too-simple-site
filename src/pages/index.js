import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Link from "../components/link"
import service from "../images/service.png"
import voice from "../images/voice.png"
import faq from "../images/faq.png"
import arrowSvg from "../svg/arrow.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeroWrapper>
      <Hero />
    </HeroWrapper>
    <MainText>
      <Title>
        <p>PLAY the VIEW.</p>
      </Title>
      <SubTitle>
        <p>あらゆるニーズにこたえたい。</p>
        <p>問題解決のために私達は努力します。</p>
      </SubTitle>
      <Description>
        <p>私たちリウバオディングは、企業と社会が抱える問題点を、</p>
        <p>システムを通して解決するソフトウェア開発会社です。</p>
        <p>問題点の本質を見極め、迅速で的確な価値を提供することで</p>
        <p>企業の競争力の向上、豊かな社会の実現を目指します。</p>
      </Description>
      <AboutUs>
        <LinkButton href="#"> About us</LinkButton>
      </AboutUs>
    </MainText>
    <Thumbnail>
      <ThumbnailLink href="#">
        <ThumbnailImage>
          <img src={service} alt="service" />
          <ThumbnailTextWrapper>
            <Text>Service</Text>
            <Supplyment>サービス</Supplyment>
          </ThumbnailTextWrapper>
        </ThumbnailImage>
      </ThumbnailLink>
      <ThumbnailLink href="#">
        <ThumbnailImage>
          <img src={voice} alt="voice" />
          <ThumbnailTextWrapper>
            <Text>Voice</Text>
            <Supplyment>お客様の声</Supplyment>
          </ThumbnailTextWrapper>
        </ThumbnailImage>
      </ThumbnailLink>
      <ThumbnailLink href="#">
        <ThumbnailImage>
          <img src={faq} alt="faq" />
          <ThumbnailTextWrapper>
            <Text>FAQ</Text>
            <Supplyment>よくあるご質問</Supplyment>
          </ThumbnailTextWrapper>
        </ThumbnailImage>
      </ThumbnailLink>
    </Thumbnail>
    <Infomation>
      <InfomationTitleWrapper>
        <InfomationMainTitle>Infomartion</InfomationMainTitle>
        <InfomationSubTitle>お知らせ</InfomationSubTitle>
      </InfomationTitleWrapper>
      <InfomationListWrapper>
        <InfomationList>
          <InfomationItem>
            <Link href="#">
              <span>2019.05.12</span>
              <span>採用情報の更新</span>
            </Link>
          </InfomationItem>
          <InfomationItem>
            <Link href="#">
              <span>2019.04.15</span>
              <span>営業日についてのお知らせ</span>
            </Link>
          </InfomationItem>
          <InfomationItem>
            <Link href="#">
              <span>2019.05.12</span>
              <span>コーポレートサイトオープン</span>
            </Link>
          </InfomationItem>
          <InfomationItem>
            <Link href="#">
              <span>View more</span>
              <img src={arrowSvg} alt="arrow" />
            </Link>
          </InfomationItem>
        </InfomationList>
      </InfomationListWrapper>
    </Infomation>
  </Layout>
)

const HeroWrapper = styled.div`
  margin: 0 auto;
  width: 95%;
`

const MainText = styled.div`
  position: relative;
  top: -40px;
  text-align: center;
  div:first-child {
    margin-bottom: 50px;
  }
  div:last-child {
    margin-top: 50px;
  }
`

const Title = styled.div`
  font-size: 70px;
`

const SubTitle = styled.div`
  font-size: 35px;
`

const Description = styled.div`
  font-size: 16px;
  line-height: 0.5;
`

const AboutUs = styled.div`
  width: 22.8%;
  margin: 0 auto;
`

const LinkButton = styled.a`
  width: 100%;
  color: #35363d;
  text-decoration: none;
  font-size: 20px;
  padding: 10.5% 0;
  display: inline-block;
  border: 1px solid;
  border-color: #35363d;
`

const Thumbnail = styled.div`
  margin: 0 auto;
  width: 95%;
  display: flex;
`

const ThumbnailLink = styled.a`
  display: block;
  width: 33%;
`

const ThumbnailImage = styled.div`
  position: relative;
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    background-color: rgba(0, 0, 0);
    width: 100%;
    height: 85%;
    opacity: 0.4;
  }
`

const ThumbnailTextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const Text = styled.p`
  color: white;
  font-size: 2rem;
`

const Supplyment = styled.p`
  color: white;
  font-size: 1rem;
`

const Infomation = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`
const InfomationTitleWrapper = styled.div`
  width: 25%;
`

const InfomationMainTitle = styled.p`
  font-size: 2rem;
`

const InfomationSubTitle = styled.p``
const InfomationListWrapper = styled.div`
  width: 70%;
  padding-top: 50px;
`

const InfomationList = styled.ul`
  list-style: none;
  li {
    border-bottom: 1px solid #d8d8d8;
  }

  li:last-child {
    border-bottom: 0px;
    text-align: right;
  }
`

const InfomationItem = styled.li`
  padding: 10px 0;
  text-decoration: none;

  span:first-of-type {
    margin-right: 10px;
  }
`

export default IndexPage
