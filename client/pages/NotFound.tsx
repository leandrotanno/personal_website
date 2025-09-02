import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-2 text-5xl font-extrabold text-violet-200">404</h1>
          <p className="mb-4 text-violet-100/80">Página não encontrada</p>
          <a
            href="/"
            className="underline text-emerald-400 hover:text-emerald-300"
          >
            Voltar para Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
