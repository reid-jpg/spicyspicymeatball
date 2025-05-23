import Link from "next/link";

const QuitButton: React.FC = () => {
    return (
        <main className="p-4">
        <div className="bg-white rounded-lg shadow-md w-full max-w-md">
        <Link href="/home"/>
            <button>Quit</button>  
        </div>
        </main>
    );
};

export default QuitButton;   