import loadingImg from  '../assert/loading.gif'
import useGIf from '../hook/useGIf';


// const API_KEY=process.env.REACT_APP_Giphy_Key;
// accessing data from ,env to create its object.

const Random = () => {
    
//     const [loading, setLoading] = useState(true);
// async function fetchData(){
//     const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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
// useEffect(()=>{
//     fetchData();
// },[])
//     function handleGif(){
// fetchData();
//     }

//  custom Gif
const {gif,loading,fetchData}=useGIf();

function handleGif(){
    fetchData();
}
  return (
    <div className='bg-green-600 w-1/2 flex flex-col items-center max-w-[450px]   rounded-xl border-[#ffffff] border p-2  gap-2'>
      <h3 className='text-center bg-white w-full rounded-xl font-bold text-lg underline'> Random Gif</h3>
      <img src={loading?loadingImg:gif} alt="loading" className=''/>
     <button onClick={handleGif} className='text-center bg-[#ff004f] w-full rounded-xl font-bold text-lg  border-[#149ECA] border-b-4 text-[#ffffff] ' >Generate</button>

    </div>
  )
}

export default Random;
