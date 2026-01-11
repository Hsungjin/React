import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { toast } from "sonner";

export default function Shadcn() {
  return (
    <div>
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
