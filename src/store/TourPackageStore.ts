import { TourPackage } from '@/types/hotel.package.type';
import { create } from 'zustand'
import { persist } from 'zustand/middleware';

interface PackageState {
    tourPackage: TourPackage | null;
    setPackage: (tourPackage: TourPackage | null) => void
}

export const useTourPackageStore = create<PackageState>()(
    persist(
        (set) => ({
            tourPackage: null,
            setPackage: (tourPackage) => set({ tourPackage }),
        }),
        {
            name: 'tour-package-storage',
        }
    )
)