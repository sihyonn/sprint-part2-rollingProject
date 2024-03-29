import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import ProfileEmojiShare from '@/components/header/ProfileEmojiShare';

const Styled = {
  Container: styled.nav`
    width: 100vw;
    display: flex;

    position: fixed;
    top: 6.7rem; // gnb가 fixed되어있어서 top은 gnb높이를 제외
    left: 0;
    padding: 0;
    z-index: 100;

    background: ${({ theme }) => theme.color.white};

    @media (max-width: 767px) {
      display: inline-block;
      top: 0;
    }
  `,
  HeaderContainer: styled.div`
    display: flex;
    width: 100%;
    padding: 1.3rem max(2.4rem, calc((100vw - 120rem) / 2));
    justify-content: space-between;

    @media (max-width: 767px) {
      padding: 1.2rem 2rem;
    }
  `,
  MobileContainer: styled.div`
    display: flex;

    padding: 1rem 2rem;
    align-items: center;
  `,
  CardOwner: styled.span`
    display: flex;
    align-items: flex-start;
    color: #2b2b2b;
    font-family: Pretendard;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 4.2rem;
    letter-spacing: -0.028rem;
    @media (max-width: 767px) {
      font-size: 1.8rem;
      line-height: 2.8rem; /* 155.556% */
      letter-spacing: -0.018rem;
    }
  `,
  Bar: styled.div`
    width: 100%;
    height: 0.1rem;
    background: var(--gray-200, #eee);
  `,
};
function Header({ data }) {
  // data는 /list에서 /list{id}로 이동시 페이지에서 보내주기

  const [isMobile, setIsMobile] = useState(false);
  const profileListData = data
    ? { messageCount: data.messageCount, recentMessages: data.recentMessages }
    : {};
  const EmojiData = data
    ? { id: data.id, topReactions: data.topReactions }
    : {};
  useEffect(() => {
    const checkIfMobile = () => window.innerWidth <= 767;
    setIsMobile(checkIfMobile());

    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? (
    <Styled.Container>
      <Styled.MobileContainer>
        <Styled.CardOwner>To. {data?.name}</Styled.CardOwner>
      </Styled.MobileContainer>
      <Styled.Bar />
      <Styled.HeaderContainer>
        <ProfileEmojiShare
          profileData={profileListData}
          EmojiData={EmojiData}
        />
      </Styled.HeaderContainer>
    </Styled.Container>
  ) : (
    <Styled.Container>
      <Styled.HeaderContainer>
        <Styled.CardOwner>To. {data?.name}</Styled.CardOwner>
        <ProfileEmojiShare
          profileData={profileListData}
          EmojiData={EmojiData}
        />
      </Styled.HeaderContainer>
    </Styled.Container>
  );
}

export default Header;
