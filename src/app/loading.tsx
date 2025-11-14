export default function GlobalLoading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
            <div className="loader"></div>
        </div>
    );
}