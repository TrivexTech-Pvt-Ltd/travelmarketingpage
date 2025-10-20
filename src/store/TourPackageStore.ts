import { MaldivesTourPackage,SriLankaTourPackage } from '@/types/hotel.package.type';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PackageStateMaldives {
    tourPackage: MaldivesTourPackage | null;
    setPackage: (tourPackage: MaldivesTourPackage | null) => void
}

interface PackageStateSriLanka {
    tourPackage: SriLankaTourPackage | null;
    setPackage: (tourPackage: SriLankaTourPackage | null) => void
}

export const useTourPackageStore = create<PackageStateMaldives>()(
    persist(
        (set) => ({
            tourPackage: null,
            setPackage: (tourPackage) => set({ tourPackage }),
        }),
        {
            name: 'maldives-tour-package-storage',
        }
    )
)

export const useSLTourPackageStore = create<PackageStateSriLanka>()(
    persist(
        (set) => ({
            tourPackage: null,
            setPackage: (tourPackage) => set({ tourPackage }),
        }),
        {
            name: 'srilanka-tour-package-storage',
        }
    )
)