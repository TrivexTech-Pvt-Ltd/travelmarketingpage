export default function GlobalLoading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm z-[9999]">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-400 border-t-transparent"></div>
        </div>
    );
}