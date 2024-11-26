import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({ $id, title, featuredimage }) {
  // Pass featuredimage to getFilePreview to generate the correct URL
  const previewUrl = appwriteService.getFilePreview(featuredimage);

  console.log("Generated preview URL:", previewUrl); // Debugging

  return (
      <Link to={`/post/${$id}`}>
          <div className="w-full  bg-gray-100 rounded-xl p-4">
              <div className="w-full justify-center mb-4">
                  <img
                      src={previewUrl}
                      alt={title}
                      className="rounded-xl h-20 w-full"
                  />
              </div>
              <h2 className="text-xl text-center font-bold">{title}</h2>
          </div>
      </Link>
  );
}



export default PostCard