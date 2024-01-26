import React, { useRef } from 'react'
import Card from './Card'
import { motion } from "framer-motion"

function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc: "This is first document or description where you can download it",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: true, tagTitle: "Download Now" , tagColor: "green"},
    },
    {
      desc: "This is second description or kind of ToDo ",
      filesize: "",
      close: false,
      tag: {isOpen: false, tagTitle: "Download Now" , tagColor: "green"},
    },
    {
      desc: "This is third description or document where you can upload something specific like files aur folders or audios",
      filesize: "2.9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Upload" , tagColor: "blue"},
    },
    {
      desc: "This is fourth description, it wont work becoz its only for client side, and server side data is not connected.",
      filesize: "2.9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download" , tagColor: "orange`"},
    },
  ];

  return (
      <div className='fr-ground' ref = {ref}>
        {data.map((item,index)=>(
          <Card data={item} reference={ref}/>
        ))}
      </div>
  )
}

export default Foreground
