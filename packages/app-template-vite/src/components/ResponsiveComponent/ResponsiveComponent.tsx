import { useEffect, useState } from "react";

import tokens from "@nimbus-ds/tokens/dist/js/tokens";
import useWindowWidth from "../../hooks/useWindowWidth";

interface ResponsiveComponentProps {
  mobileContent: React.ReactNode;
  desktopContent: React.ReactNode;
}

const ResponsiveComponent: React.FC<ResponsiveComponentProps> = ({
  mobileContent,
  desktopContent,
}) => {
  const windowWidth = useWindowWidth();
  const [isMounted, setIsMounted] = useState(false);

  const breakpointMd = tokens.breakpoint.md.value.replace("px","");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (windowWidth !== null && windowWidth <= breakpointMd) {
    return <>{mobileContent}</>;
  } else {
    return <>{desktopContent}</>;
  }
};

export default ResponsiveComponent;
