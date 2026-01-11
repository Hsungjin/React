import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="m-4 flex flex-col gap-2">
      <Button asChild>
        <Link to="/typograpy">typograpy</Link>
      </Button>
      <Button asChild>
        <Link to="/border">border</Link>
      </Button>
      <Button asChild>
        <Link to="/flexcontainer">flexcontainer</Link>
      </Button>
      <Button asChild>
        <Link to="/shadcn">shadcn</Link>
      </Button>
    </div>
  );
}
