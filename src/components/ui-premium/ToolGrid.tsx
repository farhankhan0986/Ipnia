import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Tool {
  name: string;
  emoji: string;
  category: string;
}

const CATEGORIES = ["All", "AI & ML", "Data", "Cloud", "DevOps", "Analytics"] as const;
type Category = typeof CATEGORIES[number];

const allTools: Tool[] = [
  // AI & ML
  { name: "Python", emoji: "🐍", category: "AI & ML" },
  { name: "PyTorch", emoji: "🧠", category: "AI & ML" },
  { name: "Keras", emoji: "🟥", category: "AI & ML" },
  { name: "Sklearn", emoji: "🔬", category: "AI & ML" },
  { name: "Statsmodels", emoji: "📈", category: "AI & ML" },
  { name: "OpenAI", emoji: "🔓", category: "AI & ML" },
  { name: "GPT", emoji: "🤖", category: "AI & ML" },
  { name: "LlamaIndex", emoji: "🦙", category: "AI & ML" },
  { name: "Claude", emoji: "🌟", category: "AI & ML" },
  { name: "CrewAI", emoji: "👥", category: "AI & ML" },
  { name: "LangGraph", emoji: "🔗", category: "AI & ML" },
  { name: "Autogen", emoji: "⚙️", category: "AI & ML" },
  { name: "LangChain", emoji: "⛓️", category: "AI & ML" },
  { name: "HuggingFace", emoji: "🤗", category: "AI & ML" },
  // Data
  { name: "Pandas", emoji: "📊", category: "Data" },
  { name: "NumPy", emoji: "🔢", category: "Data" },
  { name: "PySpark", emoji: "🔥", category: "Data" },
  { name: "MySQL", emoji: "🗄️", category: "Data" },
  { name: "MongoDB", emoji: "🍃", category: "Data" },
  { name: "PostgreSQL", emoji: "🐘", category: "Data" },
  { name: "Kafka", emoji: "🦒", category: "Data" },
  { name: "Snowflake", emoji: "❄️", category: "Data" },
  { name: "dbt", emoji: "📦", category: "Data" },
  // Cloud
  { name: "AWS", emoji: "☁️", category: "Cloud" },
  { name: "GCP", emoji: "🔵", category: "Cloud" },
  { name: "Azure", emoji: "🔷", category: "Cloud" },
  { name: "Streamlit", emoji: "💡", category: "Cloud" },
  { name: "FastAPI", emoji: "⚡", category: "Cloud" },
  // DevOps
  { name: "Docker", emoji: "🐳", category: "DevOps" },
  { name: "Kubernetes", emoji: "☸️", category: "DevOps" },
  { name: "Airflow", emoji: "🌀", category: "DevOps" },
  { name: "MLFlow", emoji: "🔁", category: "DevOps" },
  { name: "Git", emoji: "🌿", category: "DevOps" },
  { name: "CI/CD", emoji: "🔄", category: "DevOps" },
  // Analytics
  { name: "Power BI", emoji: "📊", category: "Analytics" },
  { name: "Tableau", emoji: "📈", category: "Analytics" },
  { name: "Looker", emoji: "👁️", category: "Analytics" },
  { name: "Excel", emoji: "📋", category: "Analytics" },
  { name: "Metabase", emoji: "📉", category: "Analytics" },
];

const categoryColors: Record<string, string> = {
  "AI & ML": "text-violet-600 dark:text-violet-400",
  "Data": "text-blue-600 dark:text-blue-400",
  "Cloud": "text-sky-600 dark:text-sky-400",
  "DevOps": "text-orange-600 dark:text-orange-400",
  "Analytics": "text-emerald-600 dark:text-emerald-400",
};

interface ToolGridProps {
  className?: string;
}

const ToolGrid = ({ className }: ToolGridProps) => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredTools = useMemo(() => {
    return allTools.filter((tool) => {
      const matchesCategory =
        activeCategory === "All" || tool.category === activeCategory;
      const matchesSearch = tool.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className={cn("space-y-8", className)}>
      {/* Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Category filters */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground hover:scale-105"
                  : "bg-muted text-foreground hover:bg-accent hover:text-foreground hover:scale-105"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-56">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tools..."
            className="h-9 pl-9 pr-9 text-sm"
          />
          {search && (
            <button
              type="button"
              aria-label="Clear search"
              title="Clear search"
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Tools grid */}
      {filteredTools.length === 0 ? (
        <div className="py-12 text-center text-muted">
          No tools found. Try a different search.
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {filteredTools.map((tool) => (
            <div key={tool.name} className="tool-card">
              <div className="flex h-14 w-14 items-center justify-center rounded-md border border-border bg-secondary-50 text-3xl transition-all duration-200 group-hover:scale-110">
                <span role="img" aria-label={tool.name}>
                  {tool.emoji}
                </span>
              </div>
              <span className="text-xs font-semibold text-foreground leading-tight">
                {tool.name}
              </span>
              <span
                className={cn(
                  "text-[10px] font-medium",
                  categoryColors[tool.category] ?? "text-muted"
                )}
              >
                {tool.category}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Count */}
      <p className="text-center text-xs text-muted">
        Showing {filteredTools.length} of {allTools.length}+ industry tools
      </p>
    </div>
  );
};

export default ToolGrid;
