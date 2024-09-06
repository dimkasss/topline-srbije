const copyableClick = (ref: React.RefObject<HTMLElement>, delay = 500) => {
  ref.current?.classList.remove("transition-out-bg");
  ref.current?.classList.add("transition-in-bg");
  window.getSelection()?.selectAllChildren(ref.current!);
  document.execCommand("copy");
  window.getSelection()?.empty();
  setTimeout(() => {
    ref.current?.classList.add("transition-out-bg");
    ref.current?.classList.remove("transition-in-bg");
  }, delay);
};

export default copyableClick;
