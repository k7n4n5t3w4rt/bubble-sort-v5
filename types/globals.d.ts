export {};

declare global {
  interface Window {
    NODE_ENV?: string;
    REMEMBER_ME?: boolean;
  }

  // Used by `js/setup_mobile_debug.js`
  const eruda: {
    init: (options?: any) => void;
  };

  interface Navigator {
    // WebXR isn't in all DOM lib versions; treat as `any` for now.
    xr?: any;
  }
}


