import React, { useEffect, useState } from 'react'
import CustomLayout from './Layout/CustomLayout'
import LeonardoAPI from '../API/LeonardoAPI';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const StartCreating = () => {
  const history = useNavigate()

  useEffect(() => {
    const user = localStorage.getItem('userEmail')

    if(!user) {
      history('/');
    }
  },[history])  // Run this only when `history` changes

  const [prompt, setPrompt] = useState("")
  // const [imgURL, setImgURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [base64Image, setBase64Image] = useState(false);

  const handleGenerate = async () => {
    console.log("Clicked..!")
    setLoading(true)
    if (!prompt.trim()) {
      return toast.error('Please Enter a Prompt..!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
    else {
      try {
        const data = await LeonardoAPI(prompt,4);

        if (data) {
          setLoading(false)
          setBase64Image(data)
        }
        else {
          toast.error('Failed to Generate Image..!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }
      } catch (e) {
        console.log(`Internal Server Error : ${e}`);
      }
    }
  }

  return (
    <CustomLayout>
      <div className='text-white relative h-screen overflow-hidden my-10 flex flex-col gap-5'>
        {/* <div className="design1 absolute bg-[#262928] h-[200px] w-[200px] rounded-[50%]">
      </div>
      <div className="design2 absolute top-[70%] left-[90%] bg-red-700 h-[200px] w-[200px] rounded-[50%]">
      </div> */}
        <div className="mainTitleDescrption flex flex-col gap-2">
          <h1 className='text-5xl bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent h-[104px] font-bold'>
            Create Artistic Images with <br />
            Artificial Intelligence
          </h1>
          <p>"Transform your ideas into stunning art with AI magic, powered by Leonardo API!"</p>
        </div>
        <div className="searchBTN flex justify-center items-center">
          <form action="" className='flex gap-5'>
            <div className="inputField">
              <textarea type="text"
                onChange={(e) => setPrompt(e.target.value)}
                className='p-2 w-[400px] text-black rounded-lg resize-none min-h-[100px] max-h-[400px] overflow-y-auto'
                name="imgPropmpt"
                placeholder='Enter Your Creative Prompt'
              />
            </div>
            <div className="generateImages flex justify-center items-center font-bold">
              <a className='bg-gradient-to-r from-blue-500 to-green-500 h-10 p-5 flex justify-center items-center bg-clip-text text-transparent cursor-pointer'
              onClick={handleGenerate}
              >{loading ? "Generating..." : "CRAFT YOUR VISION"}</a>
            </div>
          </form>
        </div>
        <div className="images">
          {base64Image && (
            <div className="mt-4 flex justify-center items-center gap-10">
              <img src={`data:image/png;base64,${base64Image}`} alt="AI Generated" className='rounded-lg shadow-lg h-[300px] w-[300px]' />
              <img src={`data:image/png;base64,${base64Image}`} alt="AI Generated" className='rounded-lg shadow-lg h-[300px] w-[300px]' />
              <img src={`data:image/png;base64,${base64Image}`} alt="AI Generated" className='rounded-lg shadow-lg h-[300px] w-[300px]' />
              <img src={`data:image/png;base64,${base64Image}`} alt="AI Generated" className='rounded-lg shadow-lg h-[300px] w-[300px]' />
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      //transition={Bounce}
      />
    </CustomLayout>
  )
}

export default StartCreating
