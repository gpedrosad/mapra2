import CuadrosLanding from "../CuadrosLanding";
import { loadWorks } from "../load-works";
import { getCuadroPage } from "../pages";
import { cuadroMetadata } from "../seo";

const page = getCuadroPage("paisajes-bosques-biobio");

export const metadata = cuadroMetadata(page);

export default async function CuadrosBosquesPage() {
  const works = await loadWorks(page.workIds);
  return <CuadrosLanding page={page} works={works} />;
}
