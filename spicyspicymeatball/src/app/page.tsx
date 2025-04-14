import Link from "next/link";
import MyButton from "./mybutton";

export default function HomePage() {
  return (
    <main>
      <div>
        <h1 className="bg-[#FF5032] font-serif flex justify-center text-7xl">
          THATS A SPICY MEATBALL!
        </h1>
        <div className="bg-[#FA946E] flex w-full">
          <img className=" w-2/5 rounded-full" src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/02/Meatballs-6.jpg" alt="meatball" />
          <div className="divider divider-horizontal"></div>
          <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">Why Spicy Meatball is the recipe log for you: <br/> We’re the most intuitive app on the market <br/> Fun meatball rating systems <br/> Meet others in our interactive Meetball message board!</div>
        </div>
      </div>
     {/*
      <div className="bg-[#FA946E]">
        <input type="text" className="card bg-[#FA946E] rounded-box grid h-20 flex-grow place-items-center" placeholder="Name" />
        <input type="text" className="card bg-[#FA946E] rounded-box grid h-20 flex-grow place-items-center" placeholder="Email" />
      </div>
      */}
      <div className="bg-[#FA946E]">
        <MyButton>
        </MyButton>
      </div>
    </main>
  );
}