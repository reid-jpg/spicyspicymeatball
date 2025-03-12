import Link from "next/link";
import QuitButton from "~/app/quitbutton";
import DoneButton from "./donebutton";

export default function HomePage() {
  return (
    <main className="bg-[#FA946E]">
      <div>
        <h1 className="bg-[#FF5032] font-serif text-7xl flex justify-center"> = New Recipe = </h1>
        <h2 className="text-2xl font-serif">Name of Recipe:</h2>
        <div className="flex justify-center">
          <input type="text" className="card rounded-box grid h-20 w-4/5 place-items-center" placeholder="Meatballs w/ Spaghetti" />
        </div>
        <h2 className="text-2xl font-serif">Ingredients:</h2>
        <div className="flex justify-center">
          <input type="text" className="card rounded-box grid h-20 w-4/5 place-items-center" placeholder="Meat, Ball, Spaghettos" />
        </div>
        <h2 className="text-2xl font-serif">Directions:</h2>
        <div className="flex justify-center">
          <input type="text" className="card rounded-box grid h-20 w-4/5 place-items-center" placeholder="First, Scoop the Meat. Then, Ball the Meat." />
        </div>
        <div className="rating">
          <h1 className="text-2xl font-serif">Spice: (Low to High)</h1>
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
        </div>
        <DoneButton>
        </DoneButton>
        <QuitButton>
        </QuitButton>
      </div>
    </main>
  );
}
/*"use client";

import { useState, ChangeEvent } from "react";

type ReturnData = {
  message: string;
  error?: string;
};

export default function HomePage() {
  const [text, setText] = useState<string>(""); // To track the input text
  const [loading, setLoading] = useState<boolean>(false); // To handle loading state
  const [error, setError] = useState<string | null>(null); // To show any error messages
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // To show success message

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleButtonClick = async () => {
    if (text.trim() === "") {
      alert("Please enter some text.");
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await fetch("/api/upload-stuff", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",  // Use JSON for request body
        },
        body: JSON.stringify({
          content: text,
        }),
      });

      const data = await response.json() as ReturnData;

      if (response.ok) {
        setSuccessMessage(data.message); // Show success message
        setText(""); // Clear input
        setError(null); // Reset error state
      } else {
        setError(data.error || "An unknown error occurred");
      }
    } catch (error) {
      console.error("Error uploading text:", error);
      setError("An error occurred while uploading the text.");
    } finally {
      setLoading(false); // End loading state
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Upload Text</h1>
        
        error message
        {error && <div className="alert alert-error mb-4"><span>{error}</span></div>}

        success message
        {successMessage && <div className="alert alert-success mb-4"><span>{successMessage}</span></div>}

        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Enter text here"
          className="input input-bordered w-full mb-4"
        />

        <button 
          onClick={handleButtonClick}
          className="btn btn-primary w-full"
          disabled={loading} // Disable button during loading
        >
          {loading ? "Uploading..." : "Upload Text"}
        </button>
      </div>
    </main>
  );
}*/