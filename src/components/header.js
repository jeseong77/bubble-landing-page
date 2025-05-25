export default function Header() {
    return (
        <div className="flex flex-row p-4 justify-between items-center border-b border-gray-300">
            <h1 className="text-2xl font-bold">Bubble</h1>
            <button className="px-4 py-2 bg-black text-white rounded hover:bg-neutral-500">
                download
            </button>
        </div>
    );
}
  