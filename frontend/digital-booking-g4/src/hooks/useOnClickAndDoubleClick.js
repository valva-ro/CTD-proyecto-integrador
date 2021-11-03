import { useState, useEffect } from "react";

export default function useSingleAndDoubleClick(
  actionSimpleClick,
  actionDoubleClick
) {
  const [click, setClick] = useState(0);

  useEffect(() => {
    if (click === 1) {
      actionSimpleClick();
    }

    if (click === 2) {
      actionDoubleClick();
      setClick(0);
    }
  }, [actionDoubleClick, actionSimpleClick, click]);

  return () => {
    setClick((prev) => prev + 1);
  };
}
