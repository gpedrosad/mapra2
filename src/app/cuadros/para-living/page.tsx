import CuadrosLanding from "../CuadrosLanding";
import { loadWorks } from "../load-works";
import { getCuadroPage } from "../pages";
import { cuadroMetadata } from "../seo";

const page = getCuadroPage("para-living");

export const metadata = cuadroMetadata(page);

export default async function CuadrosLivingPage() {
  const works = await loadWorks(page.workIds);
  return <CuadrosLanding page={page} works={works} />;
}
