import { NavigationMenuDemo } from "@/components/Navbar";
import { CarouselDemo } from "@/components/Carousel";
import { SiteFooter } from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import cellama_logo from "@/assets/cellama.png";

export function Cellama() {
	return (
		<>
			<NavigationMenuDemo />
			<div className="h-[40rem] flex justify-center items-center px-4">
				<div className="text-sm mx-auto font-normal text-neutral-600 dark:text-neutral-400">
					<blockquote cite="https://pubmed.ncbi.nlm.nih.gov/22186258/">
						"We need merely to assume that changes in the genotype produce
						correlated changes in the adult phenotype, but the mechanism of this
						correlation need not concern us."
						<footer>
							C.H. Waddington, <cite>The Epigenotype</cite>, 1942
						</footer>
					</blockquote>
				</div>
			</div>
			<Separator />
			<div className="h-[40rem] flex justify-center items-center px-4">
				<div className="mx-auto font-normal text-neutral-600 dark:text-neutral-400">
					After decades of work, we now know how phenotype and genotype are
					connected: <i>Genes</i>.
					<br />
					<br />
					Thousands of genes act together, creating networks (or circuits) to
					define how a phenotype occurs in any cell. Single-cell technologies
					allow us to analyze these genes and annotate each cell individually.
					However, high-quality cell annotation requires technical competency
					and extensive labour. Automated annotation pipelines give simple
					confidency scores of cell type annotations, but do not provide any
					explanation why these cells are annotated as they did. Therefore, hard
					to reach techinal expertise is still required.
				</div>
			</div>
			<div className="h-[5rem] flex justify-center items-center px-4">
				<div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
					Introducing CeLLama
				</div>
			</div>
			<div className="h-[20rem] flex justify-center items-center px-4">
				<div className="text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
					<img
						className="border-0"
						src={cellama_logo}
						alt="Cell Journal Logo"
						style={{ height: "300px", width: "300px", borderRadius: "100%" }}
					/>
				</div>
			</div>

			<div className="h-[20rem] flex justify-center items-center px-4">
				<div className="mx-auto font-normal text-neutral-600 dark:text-neutral-400">
					ceLLama is an open-source streamlined automation pipeline for cell
					type annotations using local Large Language Models (LLMs). This
					cutting-edge tool is crafted to streamline and enhance the process of
					cell type identification, making it faster, more comprehensive, and
					more reliable.
				</div>
			</div>
			<div className="h-[20rem] flex justify-center items-center px-4">
				<CarouselDemo />
			</div>

			<SiteFooter />
		</>
	);
}

export default Cellama;
