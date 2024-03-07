import React from 'react';

import EmojiBadge from '@components/common/badge/EmojiBadge';

function Hi() {
  return (
    <>
      <EmojiBadge emoji="" count={14} />
      <EmojiBadge emoji="😍" count={24} />
      <EmojiBadge emoji="😍" count={24999} />
      <EmojiBadge emoji="😍" count={100} />
    </>
  );
}

export default Hi;