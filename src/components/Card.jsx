import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data , reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.2} dragTransition={{bounceStiffness: 100, bounceDamping:30}} 
     className="card">
      <FaRegFileAlt />
      <p>{data.desc}</p>
      <div className="footer">
        <div className="footer-content">
          <h5>{data.filesize}</h5>
          <span>
            {data.close ? <IoClose /> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen ? (
          <div
            className="footer-content2"
            style={{ background: `${data.tag.tagColor}` }}
          >
            <h3>{data.tag.tagTitle}</h3>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default Card;
