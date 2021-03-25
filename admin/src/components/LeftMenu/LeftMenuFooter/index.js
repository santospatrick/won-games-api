import React from 'react';
import Wrapper from './Wrapper';

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <a key="website" href="https://github.com/santospatrick/won-games-api" target="_blank" rel="noopener noreferrer">
          Won Games — @santospatrick
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
