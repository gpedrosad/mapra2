import CuadrosLanding from "../CuadrosLanding";
import { loadWorks } from "../load-works";
import { getCuadroPage } from "../pages";
import { cuadroMetadata } from "../seo";

const page = getCuadroPage("para-dormitorio");

export const metadata = cuadroMetadata(page);

export default async function CuadrosDormitorioPage() {
  const works = await loadWorks(page.workIds);
  return <CuadrosLanding page={page} works={works} />;
}
