import CuadrosLanding from "../CuadrosLanding";
import { loadWorks } from "../load-works";
import { getCuadroPage } from "../pages";
import { cuadroMetadata } from "../seo";

const page = getCuadroPage("regalar-pintura-original");

export const metadata = cuadroMetadata(page);

export default async function CuadrosRegaloPage() {
  const works = await loadWorks(page.workIds);
  return <CuadrosLanding page={page} works={works} />;
}