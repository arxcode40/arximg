import { useCallback, useState } from "preact/compat";
import { lazy, LocationProvider, ErrorBoundary, Router } from "preact-iso";
import AppState from "./context/app-state-context";
import AppLayout from "./layouts/app-layout";
import baseURL from "./utils/base-url.js";

export function App() {
    const Home = lazy(() => import("./pages/home.jsx"));
    const Compress = lazy(() => import("./pages/compress.jsx"));
    const Resize = lazy(() => import("./pages/resize.jsx"));
    const Convert = lazy(() => import("./pages/convert.jsx"));
    const NotFound = lazy(() => import("./pages/errors/404.jsx"));

    const [currentURL, setCurrentURL] = useState("/");
    const onRouteChange = useCallback(
        (url) => setCurrentURL(url),
        [currentURL]
    );

    return (
        <AppState.Provider value={{ currentURL }}>
            <AppLayout>
                <LocationProvider>
                    <ErrorBoundary>
                        <Router onRouteChange={(url) => onRouteChange(url)}>
                            <Home path={baseURL("/")} />
                            <Compress path={baseURL("/compress")} />
                            <Resize path={baseURL("/resize")} />
                            <Convert path={baseURL("/convert")} />
                            <NotFound default />
                        </Router>
                    </ErrorBoundary>
                </LocationProvider>
            </AppLayout>
        </AppState.Provider>
    );
}
