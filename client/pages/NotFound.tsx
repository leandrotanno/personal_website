import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-950 via-gray-900 to-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-violet-200 mb-2">404</h1>
        <p className="text-violet-100/80 mb-4">Página não encontrada</p>
        <a href="/" className="text-emerald-400 hover:text-emerald-300 underline">
          Voltar para Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
