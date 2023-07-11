import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/sidebar";
import Widgets from "../components/widget";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="app">
      <Sidebar />
      <Component {...pageProps} />
      <Widgets />
    </div>
  );
}
