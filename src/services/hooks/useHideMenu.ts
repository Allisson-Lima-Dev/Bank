import { useEffect, useState } from "react";

export function UseHideMenu(){
  const [hide, setHide] = useState<string>('flex');
  useEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener(
      'scroll',
      function () {
        if (scrollY === lastScrollTop) return;
        setHide(scrollY < lastScrollTop ? 'flex' : 'none');
        lastScrollTop = scrollY;
      },
      true,
    );
  }, []);
  return hide
}


