import Link from "next/link";

const DoneButton: React.FC = () => {
    return (
        <main className="p-4">
        <div className="bg-white rounded-lg shadow-md w-full max-w-md">
        <Link href="/home">
            <button>Done</button>
        </Link>
        </div>
        </main>
    );
};

export default DoneButton;