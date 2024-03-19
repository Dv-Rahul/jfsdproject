import React, { createContext, useContext, useState } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogContent, setBlogContent] = useState('');

  const updateBlogContent = (content) => {
    setBlogContent(content);
  };

  return (
    <BlogContext.Provider value={{ blogContent, updateBlogContent }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  return useContext(BlogContext);
};
