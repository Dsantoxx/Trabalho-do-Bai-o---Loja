import { produtos } from "../lib/produtos";
import CatalogClient from "./components/CatalogClient";

export default function Home() {
  return (
    <main>
      <CatalogClient produtos={produtos} />
    </main>
  );
}