export default function GlobalLoading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-[120]">
            <div className="w-10 h-10 border-4 border-sea-green border-t-transparent rounded-full animate-spin"></div>
        </div>
    );
}