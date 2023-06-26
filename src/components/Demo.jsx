import React from 'react'
import { useState, useEffect } from 'react'
import { useLazyGetSummaryQuery } from '../services/article'
import loader from '../assets/loader.svg'
const Demo = () => {
 const [article, setArticle] = useState({
  url: '',
  summary: '',
 })

 const [allArticles, setAllArticles] = useState([]);

 const [getSummary, {error, isLoading }] = useLazyGetSummaryQuery();

 const urlChange = (e) => {
  console.log(article.url)
  setArticle({ ...article, url: e.target.value });
  
 }

 useEffect(() => {
   const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'));
   if(articlesFromLocalStorage){
    setAllArticles(articlesFromLocalStorage);
   }
 }, [])

 const handleSubmit = async (e) => {
  e.preventDefault();
 const {data} = await getSummary({articleUrl: article.url});
 if(data?.summary){
  const newArticle = { ...article, summary: data.summary };
  const updatedAllArticles = [...allArticles, newArticle];
 
  setArticle(newArticle);
  setAllArticles(updatedAllArticles);
  localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
 }
 }

  return (
   <section className='flex flex-col items-center justify-center'>
    <div className='mt-8 bg-gradient-to-r from-gray-400 to-gray-700 rounded-lg items-center justify-center w-3/4 p-4' >
    <form className='flex justify-between ' 
    action=""
    onSubmit={handleSubmit}>
   
   
   <input 
   className='p-2 outline-none rounded-lg w-3/4 text-slate-950 bg-gray-500 placeholder-slate-950 '
   type="url" placeholder='Enter The URL' value={article.url} onChange={urlChange} required  />

   <button type='submit' onClick={handleSubmit}className='rounded-full bg-orange-800 p-4 text-slate-950 font-bold text-base tracking-wide' >
    Submit
   </button>
    </form>
   
    </div>

    
     {/* {allArticles.map((item, index) => (
      <div
      key={`link-${index}`}
      onClick={() => setArticle(item)} 
      className='mt-4 bg-gradient-to-r from-gray-400 to-gray-700 rounded-lg items-center justify-center w-3/4 p-4'
      >
        <div className='w-3/4 '> <p className='truncate text-slate-950 '>{item.url}</p> </div>
        
      </div>
     ))} */}
    

    {/* ...display... */}

    <div>
      {isLoading ? ( 
        <img src={loader} alt="loader" className='w-20 h-20 object-contain' />
      ) : error ? (
        <p className='font-bold text-center text-black'>ERROR
        <br />
        <span className='font-normal text-black'>{error?.data.error}</span>
        </p>
        
      ) : (
        article.summary && (
          <div className='flex flex-col gap-3 items-center my-8'>
           <h2 className='font-bold text-slate-950 text-xl'>Article <span className='text-orange-800'>Sumamry</span></h2>
           <div className='w-3/4 text-slate-950 rounded-xl'><p className='text-slate-950'>{article.summary}</p></div>
          </div>
        )
      )
    }
    </div>

   </section>
  )
}

export default Demo
