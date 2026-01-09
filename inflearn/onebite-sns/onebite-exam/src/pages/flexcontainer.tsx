export default function FlexContainer() {
  return (
    <div className="flex flex-row items-center justify-evenly">
      <div className="h-10 w-10 border bg-amber-500">1</div>
      <div className="h-20 w-10 flex-1 border bg-blue-500">2</div>
      <div className="h-30 w-10 border bg-cyan-500">3</div>
      <div className="h-40 w-10 border bg-green-500">4</div>
    </div>
  );
}
