import React from 'react';
import List from '../components/list/list';

function Home() {
  return (
    <>
      <List
        prefix="/changes/ba"
        listUrl="/comparisons/list.json"
        markdownUrl="/comparisons/markdown.md"
      />
    </>
  );
}

export default Home;
