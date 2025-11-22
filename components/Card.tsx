"use client";

import { motion, PanInfo } from "motion/react";
import { RefObject, useState } from "react";

interface CardProps {
  style: any;
  text?: string;
  image?: string;

  containerRef: RefObject<HTMLDivElement | null>;
}

const Card = ({ style, text, image, containerRef }: CardProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const dragDistance = Math.sqrt(info.offset.x ** 2 + info.offset.y ** 2);

    if (dragDistance > 150) {
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return image && !text ? (
    <motion.img
      className="absolute w-15 cursor-grab active:cursor-grabbing"
      src={image}
      style={style}
      whileHover={{ scale: 1.1, zIndex: 50 }}
      whileTap={{ scale: 1.1, zIndex: 50 }}
      drag
      dragElastic={0.2}
      dragMomentum={true}
      onDragEnd={handleDragEnd}
    />
  ) : (
    <motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-48 cursor-grab active:cursor-grabbing"
      style={style}
      whileHover={{ scale: 1.1, zIndex: 50 }}
      whileTap={{ scale: 1.1, zIndex: 50 }}
      drag
      dragElastic={0.2}
      dragMomentum={true}
      onDragEnd={handleDragEnd}
    >
      {text}
    </motion.div>
  );
};

export default Card;
