export default function Border() {
  return (
    <div className="m-5 flex flex-col gap-2">
      <div className="border-2">border</div>
      <div className="border-x">border</div>
      <div className="border-y-2">border</div>
      <div className="border-t border-r border-b-2 border-l-2">border</div>
      <div className="border-2 border-amber-400">border</div>
      <div className="rounded-2xl border-2 border-amber-400 px-2">border</div>
    </div>
  );
}
