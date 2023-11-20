const mouseEffect = () => {
  function mousecursor() {
    const cursorInner = document.querySelector<HTMLElement>(".cursor-inner"),
      cursorOuter = document.querySelector<HTMLElement>(".cursor-outer");
    let n: number,
      i: number = 0,
      o: boolean = false;
    window.onmousemove = function (s: MouseEvent) {
      o ||
        (cursorOuter &&
          (cursorOuter.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"));
      if (cursorInner) {
        cursorInner.style.transform =
          "translate(" + s.clientX + "px, " + s.clientY + "px)";
      }
      n = s.clientY;
      i = s.clientX;
    };
    if (document.querySelector<HTMLElement>(".cursor-pointer")) {
      const cursorPointer =
        document.querySelector<HTMLElement>(".cursor-pointer");
      cursorPointer?.addEventListener("mouseenter", function () {
        cursorInner?.classList.add("cursor-hover");
        cursorOuter?.classList.add("cursor-hover");
      });
      cursorPointer?.addEventListener("mouseleave", function () {
        cursorInner?.classList.remove("cursor-hover");
        cursorOuter?.classList.remove("cursor-hover");
      });
      cursorInner!.style.visibility = "visible";
      if (cursorOuter) {
        cursorOuter.style.visibility = "visible";
      }
    }
    document.querySelectorAll("a").forEach(function (item) {
      item.addEventListener("mouseenter", function () {
        cursorInner?.classList.add("cursor-hover");
        cursorOuter?.classList.add("cursor-hover");
      });
    });
    document.querySelectorAll("a").forEach(function (item) {
      item.addEventListener("mouseleave", function () {
        if (cursorInner) {
          cursorInner.classList.remove("cursor-hover");
          cursorInner.style.visibility = "visible";
        }
        if (cursorOuter) {
          cursorOuter.classList.remove("cursor-hover");
          cursorOuter.style.visibility = "visible";
        }
      });
    });
  }
  mousecursor();
};

export default mouseEffect;
