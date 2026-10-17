import CuadrosLanding from "./CuadrosLanding";
import { loadWorks } from "./load-works";
import { getCuadroPage } from "./pages";
import { cuadroMetadata } from "./seo";

const page = getCuadroPage("");

export const metadata = cuadroMetadata(page);

export default async function CuadrosIndexPage() {
  const works = await loadWorks(page.workIds);
  return <CuadrosLanding page={page} works={works} />;
}
