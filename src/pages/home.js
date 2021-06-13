import React from 'react';
import List from '../components/list/list';

function Home() {
  return (
    <>
      <List
        prefix="/ba"
        listUrl="/ba/list.json"
        markdownUrl="/ba/markdown.md"
      />
    </>
  );
}

export default Home;
