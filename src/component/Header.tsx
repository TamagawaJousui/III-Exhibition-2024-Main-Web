import { List, X } from "@phosphor-icons/react";
export default function Header() {
  return (
    <div className="fixed z-20 flex w-full items-center justify-between px-3 pt-1 font-header italic backdrop-blur-[2px]">
      <div className="text-xl">III EXHIBITION 2024</div>
      <List className="text-4xl" weight="light" />
      <dialog></dialog>
      <div className="hidden md:flex [&>span:nth-child(even)]:mx-0">
        <span>CONCEPT</span>
        <span>・</span>
        <span>WORKS</span>
        <span>・</span>
        <span>ACCESS</span>
        <span>・</span>
        <span>ANNOUNCE</span>
        <span>・</span>
        <span>MEMBERS</span>
        <span>・</span>
        <span>ARCHIVES</span>
      </div>
    </div>
  );
}
