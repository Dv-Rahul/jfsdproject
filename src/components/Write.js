
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useAuth } from './Auth';

// const Write = () => {
//   const [content, setContent] = useState('');

//   const navigate = useNavigate();
//   const location1 = useLocation();
//   const auth = useAuth();
//   const redirectpath = location1.state?.pathname || 'm';
//   const [user1, setUser1] = useState(" ");
 
//   const handleContentChange = (e) => {
//     setContent(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle the blog submission logic here, e.g., sending content to a server or saving it in local storage
//     console.log('Blog content submitted:', content);
//   }

//   return (
//     <div className="write-container">
//       <h2 style={{marginLeft:'500px'}}>Write your Blog Here</h2>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={content}
//           onChange={handleContentChange}
//           placeholder="Start writing your blog here..."
//           rows="10"
//           cols="50"
//         />
//  <button type="submit" onClick={() => navigate('p')}>Publish</button>
//       </form>
//     </div>
//   );
// };

// export default Write;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Write = () => {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/w/p/${ content }');
  };

  return (
    <div className="write-container">
      <h2 style={{ marginLeft: '500px' }}>Write your Blog Here</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={handleContentChange}
          placeholder="Start writing your blog here..."
          rows="10"
          cols="50"
        />
        <button type="submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;

