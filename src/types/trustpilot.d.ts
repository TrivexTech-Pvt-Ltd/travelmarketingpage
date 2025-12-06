declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement | null, settings?: any) => void;
    };
  }
}

export {};