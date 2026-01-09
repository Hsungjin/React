import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";

export default function RouterPage() {
  return (
    <div className="m-4 flex flex-col gap-2">
      <Input placeholder="placeholder" />
      <Textarea className="resize-none" placeholder="placeholder" />

      <Button
        onClick={() => {
          toast("Hello World", {
            position: "top-center",
          });
        }}
      >
        Sonner
      </Button>

      <Button variant={"destructive"}>destructive</Button>
      <Button variant={"ghost"}>ghost</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button variant={"outline"}>outline</Button>
      <Button variant={"link"}>link</Button>

      <br></br>
      <Button asChild>
        <Link to="/typograpy">typograpy</Link>
      </Button>
      <Button asChild>
        <Link to="/border">border</Link>
      </Button>
      <Button asChild>
        <Link to="/flexcontainer">flexcontainer</Link>
      </Button>
      <div className="text-muted text-2xl">muted</div>
      <div className="text-primary text-2xl">primary</div>
      <div className="text-destructive text-2xl">destructive</div>

      <Carousel className="mx-10">
        <CarouselContent>
          <CarouselItem className="basis-1/3">1</CarouselItem>
          <CarouselItem className="basis-1/3">2</CarouselItem>
          <CarouselItem className="basis-1/3">3</CarouselItem>
          <CarouselItem className="basis-1/3">4</CarouselItem>
          <CarouselItem className="basis-1/3">5</CarouselItem>
        </CarouselContent>
        <CarouselPrevious></CarouselPrevious>
        <CarouselNext></CarouselNext>
      </Carousel>

      <Popover>
        <PopoverTrigger asChild>
          <Button>Popover Trigger</Button>
        </PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Dialog Trigger</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>Close</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>AlertDialog Trigger</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>AlertDialog</AlertDialogTitle>
            <AlertDialogDescription>
              AlertDialog Description
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Action</AlertDialogAction>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <CircleCheckIcon className="size-4" />
      <InfoIcon className="size-4" />
      <Loader2Icon className="size-4" />
      <OctagonXIcon className="size-4" />
      <TriangleAlertIcon className="size-4" />
    </div>
  );
}
