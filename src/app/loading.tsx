export default function GlobalLoading() {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-white">
            <div className="relative w-16 h-16">
                {/* Rotating circular path */}
                <div className="absolute inset-0 rounded-full border-[3px] border-[#1F686A]/30 border-t-[#1F686A] animate-spin" />

                {/* Airplane-like triangle orbiting */}
                <div
                    className="absolute left-1/2 top-0 w-0 h-0 
                     border-l-[10px] border-l-[#1F686A] 
                     border-t-[6px] border-t-transparent 
                     border-b-[6px] border-b-transparent 
                     origin-[0.4rem_2rem] 
                     animate-[orbit_1.2s_linear_infinite]"
                />
            </div>
        </div>
    );
}