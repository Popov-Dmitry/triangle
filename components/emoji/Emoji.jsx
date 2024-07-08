import React from "react";
import Image from "next/image";

const Emoji = ({ src, width, height }) => {
  return (
    <Image src={src} alt="" width={width} height={height} />
  );
};

export default Emoji;