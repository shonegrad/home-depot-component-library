"use client";

import React, { createContext, useContext } from "react";

interface DevicePortalContextType {
    container: HTMLElement | null;
}

const DevicePortalContext = createContext<DevicePortalContextType>({
    container: null,
});

export function useDevicePortal() {
    return useContext(DevicePortalContext);
}

export const DevicePortalProvider = DevicePortalContext.Provider;
