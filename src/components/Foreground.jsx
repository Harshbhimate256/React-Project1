import React, { useRef } from 'react'
import Card from './Card'
import { motion } from "framer-motion"

function Foreground() {

  const ref = useRef(null);

  const data = [
    {
      desc: "Est deserunt id laborum consectetur anim ad eu tempor amet labore.",
      filesize: ".9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now" , tagColor: "green"},
    },
    {
      desc: "Est deserunt id laborum consectetur anim ad eu tempor amet labore.",
      filesize: ".9mb",
      close: true,
      tag: {isOpen: false, tagTitle: "Download Now" , tagColor: "green"},
    },
    {
      desc: "Est deserunt id laborum consectetur anim ad eu tempor amet labore.",
      filesize: ".9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Upload" , tagColor: "blue"},
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
