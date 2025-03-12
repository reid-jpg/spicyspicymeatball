import Link from "next/link";

const AddButton: React.FC = () => {
    return (
        <main className="p-4">
        <div className="bg-white rounded-lg shadow-md w-full max-w-md">
        <Link href="/home/makerecipe">
            <button>Add a recipe</button>
        </Link>
        </div>
        </main>
    );
};

export default AddButton;