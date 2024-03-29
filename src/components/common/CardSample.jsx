import React from 'react';
import styled from 'styled-components';
import IconButton from '@/components/common/button/IconButton';

const Styled = {
  Card: styled.div`
    display: flex;
    position: relative;
    width: ${({ $usage }) => ($usage == 'option' ? '16.8rem' : '27.5rem')};
    height: ${({ $usage }) => ($usage == 'option' ? '16.8rem' : '26rem')};
    border-radius: 1.6rem;
    border: ${({ color }) => color && '1px solid rgba(0, 0, 0, 0.08)'};
    background: ${({ color, theme, $cardUrl }) =>
      $cardUrl
        ? `url(${$cardUrl}) center/cover`
        : (() => {
            switch (color) {
              case 'beige':
                return theme.color.lightOr2;
              case 'purple':
                return theme.color.lightPu2;
              case 'blue':
                return theme.color.lightBl2;
              case 'green':
                return theme.color.lightGn2;
              default:
                return 'none';
            }
          })()};
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.5;
      background-color: ${({ $isChecked, $cardUrl }) =>
        $isChecked && $cardUrl && ' #fff'};
    }
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (max-width: 767px) {
      width: 15.4rem;
      height: 15.4rem;
    }
  `,
};

function CardSample({ usage = 'option', color, isChecked, onClick, cardUrl }) {
  return (
    <Styled.Card
      $usage={usage}
      color={color}
      onClick={onClick}
      $cardUrl={cardUrl}
      $isChecked={isChecked}
    >
      {isChecked && <IconButton shape="check" style={{ zIndex: '2' }} />}
    </Styled.Card>
  );
}
export default CardSample;
