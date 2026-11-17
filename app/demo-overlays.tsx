"use client";

import { Copy, MoreHorizontal, Pencil, Plus, Trash2 } from "lucide-react";

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
} from "@/registry/chandratand/ui/alert-dialog";
import { Button } from "@/registry/chandratand/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/chandratand/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/registry/chandratand/ui/dropdown-menu";
import { Input } from "@/registry/chandratand/ui/input";
import { Label } from "@/registry/chandratand/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/chandratand/ui/popover";
import { toast } from "@/registry/chandratand/ui/sonner";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/chandratand/ui/tooltip";

export function DemoOverlays() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit client</DialogTitle>
            <DialogDescription>Changes apply to future invoices only.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-2">
            <Label htmlFor="dlg-name">Company name</Label>
            <Input id="dlg-name" defaultValue="PT Contoh Jaya" />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button onClick={() => toast.success("Client saved")}>Save</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">Delete invoice</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete invoice #1042?</AlertDialogTitle>
            <AlertDialogDescription>
              This removes the invoice and its payment history. It cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction variant="destructive" onClick={() => toast.error("Invoice deleted")}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Row actions">
            <MoreHorizontal aria-hidden />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          <DropdownMenuLabel>Invoice #1042</DropdownMenuLabel>
          <DropdownMenuItem>
            <Pencil aria-hidden /> Edit <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Copy aria-hidden /> Duplicate
          </DropdownMenuItem>
          <DropdownMenuCheckboxItem defaultChecked>Auto-remind</DropdownMenuCheckboxItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <Trash2 aria-hidden /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" aria-label="New invoice">
            <Plus aria-hidden />
          </Button>
        </TooltipTrigger>
        <TooltipContent>New invoice</TooltipContent>
      </Tooltip>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Net 30</PopoverTitle>
            <PopoverDescription>Payment is due 30 days after the invoice date.</PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>

      <Button variant="secondary" onClick={() => toast("Draft saved")}>
        Toast
      </Button>
      <Button variant="secondary" onClick={() => toast.success("Payment received")}>
        Success toast
      </Button>
      <Button
        variant="secondary"
        onClick={() =>
          toast.warning("Invoice due in 3 days", {
            description: "PT Contoh Jaya · Rp 4.250.000",
            action: { label: "Remind", onClick: () => toast.info("Reminder sent") },
          })
        }
      >
        Warning toast
      </Button>
    </div>
  );
}
