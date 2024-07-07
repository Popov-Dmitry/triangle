"use client";

import { useMemo } from "react";
import { useWindowSize } from "@react-hook/window-size";

const useResponsive = () => {
  const [ deviceWidth, deviceHeight ] = useWindowSize();

  const isMobile = useMemo(
    () => deviceWidth <= 767,
    [deviceWidth]
  );
  const isDesktop = useMemo(
    () => deviceWidth > 767,
    [deviceWidth]
  );

  return {
    deviceWidth,
    deviceHeight,
    isMobile,
    isDesktop
  };
};

export default useResponsive;
