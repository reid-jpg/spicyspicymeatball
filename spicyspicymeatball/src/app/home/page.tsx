import Link from "next/link";
import AddButton from "./addbutton";

export default function HomePage() {
  return (
    <main className="bg-[#FA946E]">
        <h1 className="bg-[#FF5032] font-serif text-7xl flex justify-center"> = Popular Recipes Now! = </h1>
        <AddButton>
        </AddButton>
    </main>
  );
};