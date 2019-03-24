import React from "react"
import styled from "styled-components"

const Footer = () => (
  <Wrapper>
    <MainWrapper>
      <Title>LIUBABAODING</Title>
      <SupplymentWrapper>
        <Supplyment>株式会社リウバオディング</Supplyment>
        <Supplyment>
          163-8019 東京都新宿区西新宿3-19-2 西新宿ビルディング６F
        </Supplyment>
        <Supplyment>TEL:03-5359-5111 FAX:03-5359-1221</Supplyment>
      </SupplymentWrapper>
    </MainWrapper>
    <CopyRightWrapper>
      Copyright LIUBAODING Inc. All Rights Reserved
    </CopyRightWrapper>
  </Wrapper>
)

const Wrapper = styled.div`
  width: 100%;
  background-color: #35363d;
  color: white;
  text-align: center;
`

const MainWrapper = styled.div`
  padding: 50px 0 150px;

  @media (max-width: 375px) {
    padding: 5px;
  }
`

const Title = styled.p`
  font-size: 1rem;
  font-weight: bold;
`
const SupplymentWrapper = styled.div`
  line-height: 0.5;
`

const Supplyment = styled.p`
  font-size: 0.8rem;
`
const CopyRightWrapper = styled.div`
  background-color: #000000;
  font-size: 0.5rem;
`

export default Footer
