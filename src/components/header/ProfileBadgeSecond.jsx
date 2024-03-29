import React from 'react';

import styled from 'styled-components';
import { css } from 'styled-components';

const setBackgroundColor = css`
  background-color: ${({ $profileimg }) =>
    $profileimg ? 'transparent' : '#fff'};
`;

const Styled = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: ${({ $count }) =>
      (() => {
        switch ($count) {
          case 2:
            return '6rem';
          case 3:
            return '4rem';
          default:
            return '2rem';
        }
      })()};
    width: 2.8rem;
    height: 2.8rem;
    padding: 0.84rem;
    border-radius: 10rem;
    border: 1px solid #eee;
    background-color: ${({ theme }) => theme.color.mainGr};
    background-image: url(${({ $profileimg }) => $profileimg || ''});
    background-position: top;
    background-size: cover;
  `,
  Div: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.122rem;
  `,
  Head: styled.div`
    width: 0.525rem;
    height: 0.525rem;
    border-radius: 10rem;
    ${setBackgroundColor}
  `,
  Body: styled.div`
    width: 1.055rem;
    height: 0.455rem;
    border-radius: 15.707px 15.707px 3.141px 3.141px;
    ${setBackgroundColor}
  `,
};

function ProfileBadgeHeader({ profileImg, count }) {
  return (
    <Styled.Container $profileimg={profileImg} $count={count}>
      <Styled.Div>
        <Styled.Head $profileimg={profileImg} />
        <Styled.Body $profileimg={profileImg} />
      </Styled.Div>
    </Styled.Container>
  );
}

export default ProfileBadgeHeader;
