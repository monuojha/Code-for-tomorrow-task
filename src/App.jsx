

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchPosts, removeCard, setPage,  } from '../src/store/Postslice.js'
import Card from "../src/componants/Card.jsx"

import Loader from "../src/componants/Loader.jsx"
import Pagination from "../src/componants/Pagination.jsx"

function App() {
  const [Loadsing, setLoadsing] = useState(true);

  const dispatch = useDispatch();
  const { posts, currentPage, Loading } = useSelector((state) => state.post);
 const itemsPerPage = 6;
 const totalPages = Math.ceil(posts.length / itemsPerPage);
 const startIndex = (currentPage - 1) * itemsPerPage;
 const visiblePosts = posts.slice(startIndex, startIndex + itemsPerPage);
  
  useEffect(() => {
    setLoadsing(true);
    dispatch(fetchPosts());
    setInterval(() => {
      setLoadsing(false);
    }, 5000);
     
  
  }, [dispatch]);

  const handleRemoveCard = (id) => {
    dispatch(removeCard(id));
  };

  const handlePageChange = (page) => {
setLoadsing(true);
    dispatch(setPage(page));
    
    
  };
  
  if (Loading || Loadsing) {
    return <div className='flex justify-center items-center h-screen'><Loader /></div>;
  }
 
  

  return (
    <>


     <div className='flex flex-wrap justify-center bg-[#e8eff5] py-10 px-4'>
      <div className='grid grid-cols-3 gap-4'>
        {visiblePosts.map((post) => (
          
          <Card key={post.id} post={post} onRemove={handleRemoveCard} />
        ))}
      </div >
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
     </div>
    </>
  )
}

export default App
