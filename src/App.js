import React from 'react';
import Menu from './components/menu/menu';
import Page from './components/page/page';
import tw from 'twin.macro';

const Root = tw.div``;

function App() {
  return (
    <Root>
      <Menu />
      <Page
        markdownUrl="/comparisons/eitorf/markdown.txt"
        beforeUrl="/comparisons/eitorf/2018-05_low.jpg"
        afterUrl="/comparisons/eitorf/2020-05_low.jpg"
        beforeDescription="May 2018"
        afterDescription="May 2020"
        centerDescription="Wälder auf dem Leuscheid © Planet Labs"
      />
    </Root>
  );
}

export default App;
