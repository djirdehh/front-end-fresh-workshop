"use client";

export default function PostsSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
}: {
  categories: string[];
  selectedCategory: string | undefined;
  onCategoryChange: (category: string | undefined) => void;
}) {
  const handleCategoryChange = (category: string | undefined) => {
    if (category === selectedCategory) {
      onCategoryChange(undefined);
    } else {
      onCategoryChange(category);
    }
  };

  const getIcon = (category: string) => {
    switch (category) {
      case "Hard Skills":
        return (
          <svg
            className="shrink-0 fill-indigo-500/80"
            width={16}
            height={15}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0Z" />
          </svg>
        );
      case "Soft Skills":
        return (
          <svg
            className="shrink-0 fill-indigo-500/80"
            width={16}
            height={15}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.7 5.7 10.3.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l.6.6L2.7 6l-1-1c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l1.5 1.5 2.4 2.4L.6 14 2 15.4l3.7-3.7 4 4c.5.5 1.2.2 1.4 0 .4-.4.4-1 0-1.4l-1-1 3.7-6.7.6.6c.6.6 1.2.2 1.4 0 .3-.4.3-1.1-.1-1.5Zm-7.2 6.1L4.2 7.5l6.7-3.7 1.3 1.3-3.7 6.7Z"></path>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <aside className="mb-12 md:mb-0 md:w-[276px] md:mr-8 md:shrink-0 md:p-4">
      <div className="font-semibold text-xs text-gray-500/80 uppercase tracking-normal mb-3">
        Select category
      </div>
      <ul className="space-y-0.5">
        {categories.map((category, index) => {
          return (
            <li key={index}>
              <a
                className={`flex items-center font-medium text-sm text-gray-800 dark:text-gray-200 px-4 h-9 space-x-4 transition-colors rounded-lg ${
                  selectedCategory === category
                    ? "bg-gradient-to-tr from-white/70 to-white/50 dark:bg-gradient-to-b dark:from-gray-700/50 dark:to-gray-700/40 shadow shadow-black/5"
                    : "hover:bg-indigo-50/50 dark:hover:bg-gray-700/20"
                }`}
                href="#0"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryChange(category);
                }}
              >
                {getIcon(category)}
                <span>{category}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
