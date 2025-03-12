import axios from 'axios';
import React from 'react'


const LeonardoAPI = async (prompt, numImages = 4) => {

    const APIKey = "sk-G7hMiIVTUqET5AObhzexXy87jrpymYH9lxRC3TiG7RKL9qfq"
    const baseURL = 'https://api.stability.ai/v2beta/stable-image/generate/core';
    try {
        const formData = new FormData();
        formData.append("prompt", prompt);
        formData.append("engine", "stable-diffusion-v1-5"); // Choose the engine you want
        formData.append("steps", "10"); // Number of steps for image generation
        const response = await axios.post(baseURL,formData,{        
            headers: {
                'Authorization': `Bearer ${APIKey}`,
                "Accept": "application/json",
                "Content-Type": "multipart/form-data",
            }
        }
        );
        console.log("Full API Response:", response.data);

        
        if (response.data?.image) {
            return response.data.image; // Base64 image
        } else {
            throw new Error("No image found in response.");
        }
    } catch (error) {
        console.error("Error generating image:", error.response?.data || error);
    }
    return (
        <div>

        </div>
    )
}

export default LeonardoAPI
