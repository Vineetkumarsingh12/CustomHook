import React, { useState } from 'react';
import loadingImg from  '../assert/loading.gif'
import useGIf from '../hook/useGIf';



// const API_KEY=process.env.REACT_APP_Giphy_Key;
// accessing data from ,env to create its object.

const Tag = () => {
    // const [gif,setGif]=useState("");
   
    // const [loading, setLoading] = useState(true);
    const [gifTag,setTag]=useState('');
    function changeHandler(event){ 
setTag(event.target.value);
    }
// async function fetchData(){
//     const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${gif}`;
//     try{
//     const {data}=await axios.get(url);
//     const imageSrc=data.data.images.downsized_large.url;
//     setLoading(false);
//     setGif(imageSrc);
//     }
//     catch(error){
//         alert("API limit exced");
//     }
   
// }
// useEffect(() => {
//     fetchData();
//   }, []);

// custom hook
//   const [gif,loading,fetchData]=useGI

const {gif,loading,fetchData}=useGIf(gifTag);
    function handleGif(){
fetchData(gifTag);
    }
  return (
    <div className='bg-blue-600 w-1/2 flex flex-col items-center max-w-[450px] rounded-xl border-[#ffffff] border p-2  gap-2'>
      <h3 className='text-center bg-white w-full rounded-xl font-bold text-lg underline '> {gifTag}</h3>
      {loading?<img src={loadingImg} alt="loading"></img>:
      <img src={gif} alt="img" className='object-fill' ></img>}

{/*  */}
      <input className='text-center rounded font-bold w-full' onChange={changeHandler}
      value={gifTag} placeholder='Enter gif name'/>



      {/*  */}
     <button onClick={handleGif} className='text-center bg-[#ff004f] w-full rounded-xl font-bold text-lg  border-[#149ECA] border-b-4 text-[#ffffff]' >Generate</button>

    </div>
  )
}

export default Tag
