import { useState } from "react";
import { Search, BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GridPattern } from "@/components/ui/grid-pattern";

const BackgroundGrid = ({
  pattern,
  size,
}: {
  pattern?: [number, number][];
  size?: number;
}) => {
  const p =
    pattern ??
    ([
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ] as [number, number][]);
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-zinc-100/30 to-zinc-300/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export type KnowledgeBaseItem = {
  title: string;
  description: string;
  url: string;
};

type SupportKnowledgeBaseProps = {
  articles: KnowledgeBaseItem[];
};

const SupportKnowledgeBase = ({ articles }: SupportKnowledgeBaseProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <h2 className="heading-2 mb-6">Knowledge Base</h2>

      <div className="mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-schedise-red" />
          </div>
          <input
            type="text"
            placeholder="Search knowledge base articles..."
            className="pl-10 pr-4 py-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-schedise-red focus:border-transparent shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredArticles.map((article, index) => (
          <Link
            key={index}
            to={article.url}
            onClick={scrollToTop}
            className="group block relative bg-gradient-to-b from-neutral-100 to-white p-8 rounded-3xl overflow-hidden border border-neutral-200/50 shadow-sm transform transition-all duration-300 hover:shadow-md"
          >
            <BackgroundGrid size={20} />
            <div className="relative z-10">
              <div className="flex items-start gap-4">
                <div className="rounded-full p-2 bg-schedise-red/10 flex-shrink-0">
                  <BookOpen className="h-5 w-5 text-schedise-red" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-schedise-red transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-black mb-4">{article.description}</p>
                  <div className="text-schedise-red font-medium flex items-center">
                    Read more
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12 bg-white rounded-lg border border-gray-200 relative overflow-hidden">
          <BackgroundGrid size={20} />
          <div className="relative z-10">
            <Search size={48} className="mx-auto mb-4 text-schedise-red" />
            <p className="text-black mb-2">
              No articles found matching "{searchTerm}"
            </p>
            <p className="text-sm text-black">
              Try using different keywords or browse all articles
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportKnowledgeBase;
