import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import Button from '@components/common/button/Button';
import routes from '@constants/routes';
import InfiniteCardMessages from '@components/paperViewer/InfiniteCardMessages';
import InfiniteCardMessagesLoader from '@components/paperViewer/InfiniteCardMessagesLoader';

const Styled = {
  ButtonContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1.1rem;

    @media (max-width: 1247px) {
      display: flex;
      justify-content: center;
      position: fixed;
      left: 0;
      bottom: 0;

      width: 100%;
      padding: 0 2.3rem;
      margin-bottom: 2.4rem;
      z-index: 10;
      border-radius: 1.2rem;

      .button {
        min-width: 100%;
        padding: 1.4rem 0;
        font-size: 1.8rem;
        font-weight: 700;
      }
    }
  `,
};

function PaperViewerPage() {
  const navigate = useNavigate();
  const { id: recipientId } = useParams();

  return (
    <>
      <Styled.ButtonContainer>
        <Button
          className="button"
          onClick={() => navigate(`${routes.post}/${recipientId}/edit`)}
        >
          편집하기
        </Button>
      </Styled.ButtonContainer>

      <React.Suspense fallback={<InfiniteCardMessagesLoader />}>
        <InfiniteCardMessages recipientId={recipientId} />
      </React.Suspense>
    </>
  );
}

export default PaperViewerPage;
