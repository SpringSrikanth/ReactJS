import React from 'react';
import { useParams } from 'react-router-dom';

function BlogList() {
  const { published } = useParams();
  return (
    <div>BlogList {published}</div>
  )
}

export default BlogList