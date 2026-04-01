import Link from "next/link";
import { motion } from "framer-motion";

interface QuizCardProps {
  quiz: {
    id: string;
    titre: string;
    theme: string;
    description: string;
  };
}

export default function QuizCard({ quiz }: QuizCardProps) {
  const getThemeColor = (theme: string) => {
    switch (theme) {
      case "Histoire": return "from-orange-500 to-red-500";
      case "Géographie": return "from-blue-500 to-cyan-500";
      case "Sciences": return "from-green-500 to-emerald-500";
      case "Sport": return "from-rose-500 to-pink-500";
      case "Cinéma": return "from-purple-500 to-indigo-500";
      case "Musique": return "from-yellow-400 to-orange-500";
      case "Littérature": return "from-teal-400 to-emerald-600";
      case "Technologie": return "from-gray-700 to-slate-900";
      case "Gastronomie": return "from-amber-500 to-orange-600";
      case "Nature": return "from-lime-500 to-green-600";
      default: return "from-primary to-cyan";
    }
  };

  const getThemeIcon = (theme: string) => {
    switch (theme) {
      case "Histoire": return "🏛️";
      case "Géographie": return "🌍";
      case "Sciences": return "🧪";
      case "Sport": return "⚽";
      case "Cinéma": return "🎬";
      case "Musique": return "🎵";
      case "Littérature": return "📚";
      case "Technologie": return "💻";
      case "Gastronomie": return "🍕";
      case "Nature": return "🌿";
      default: return "📝";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link 
        href={`/play/general/${quiz.theme}/${quiz.id}`}
        className="glass p-5 rounded-[2rem] flex flex-col gap-3 group hover:border-primary/50 transition-all duration-500 hover:shadow-2xl relative overflow-hidden h-full"
      >
        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${getThemeColor(quiz.theme)} opacity-5 rounded-full blur-2xl -mr-6 -mt-6 group-hover:opacity-10 transition-opacity`}></div>
        
        <div className="flex justify-between items-center relative z-10">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getThemeColor(quiz.theme)} flex items-center justify-center text-xl text-white shadow-lg group-hover:scale-110 transition-transform`}>
            {getThemeIcon(quiz.theme)}
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest opacity-40 bg-foreground/5 px-2 py-1 rounded-lg">{quiz.theme}</span>
        </div>

        <div className="relative z-10 space-y-1">
          <h3 className="text-lg font-bold font-space group-hover:text-primary transition-colors line-clamp-1">{quiz.titre}</h3>
          <p className="text-xs opacity-60 font-medium line-clamp-2 leading-relaxed">{quiz.description}</p>
        </div>

        <div className="mt-auto pt-2 flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
           <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
              Lancer <span>➜</span>
           </div>
           <span className="opacity-40">10 Questions</span>
        </div>
      </Link>
    </motion.div>
  );
}
