import { Github, Linkedin, Mail, FileText, Code, BarChart3, Brain, Database, TrendingUp, Zap } from "lucide-react";

export const profileData = {
  name: "Leandro Tanno",
  title: "Analytics Engineer • Data Scientist • Developer",
  location: "Lucas do Rio Verde, MT",
  availability: "Disponível para projetos",
  email: "falae@tanno.online",
  bio: "Analytics Engineer especializado em transformar dados complexos em insights acionáveis. Com sólida experiência em web analytics, estou expandindo minha expertise para ciência de dados, machine learning e automação de processos.",
};

export const metrics = [
  { label: "Anos de Experiência", value: "5+" },
  { label: "Projetos Concluídos", value: "50+" },
  { label: "Tecnologias Dominadas", value: "15+" },
];

export const skills = [
  { name: "Python", level: 90, icon: Code, category: "Programming" },
  { name: "Web Analytics", level: 95, icon: BarChart3, category: "Analytics" },
  { name: "Machine Learning", level: 75, icon: Brain, category: "AI/ML" },
  { name: "SQL/Databases", level: 88, icon: Database, category: "Data" },
  { name: "Data Visualization", level: 85, icon: TrendingUp, category: "Viz" },
  { name: "Cloud/DevOps", level: 70, icon: Zap, category: "Infrastructure" },
];

export const projects = [
  {
    title: "Customer Churn Prediction",
    description:
      "Modelo ML para predição de churn com 94% de acurácia usando ensemble methods",
    tech: ["Python", "Scikit-learn", "AWS", "Docker"],
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "Web Analytics Dashboard",
    description:
      "Dashboard em tempo real para análise de e-commerce com insights automatizados",
    tech: ["React", "D3.js", "BigQuery", "GCP"],
    demoUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "Automated Reporting System",
    description:
      "Sistema Python para geração automática de relatórios semanais de negócios",
    tech: ["Python", "Pandas", "Selenium", "Schedule"],
    demoUrl: "#",
    repoUrl: "#",
    featured: false,
  },
];

export const socialLinks = [
  { href: "https://github.com/leandrotanno", icon: Github, label: "GitHub", external: true },
  { href: "https://linkedin.com/in/tanno-leandro", icon: Linkedin, label: "LinkedIn", external: true },
  { href: "mailto:falae@tanno.online", icon: Mail, label: "Email", external: false },
  { href: "/resume", icon: FileText, label: "Currículo", external: false, isCV: true },
];

export type TerminalCommand = { command: string; steps: string[] };

export const terminalCommands: TerminalCommand[] = [
  {
    command:
      "python -m pip install pandas scikit-learn matplotlib seaborn",
    steps: [
      "Collecting pandas",
      "Collecting scikit-learn",
      "Collecting matplotlib",
      "Collecting seaborn",
      "Installing collected packages: pandas, scikit-learn, matplotlib, seaborn",
      "Successfully installed pandas-2.1.4 scikit-learn-1.3.2 matplotlib-3.8.2 seaborn-0.13.0",
    ],
  },
  {
    command: "python data_analysis.py",
    steps: [
      "Loading dataset from /data/customer_behavior.csv",
      "Dataset shape: (15847, 23)",
      "Checking for missing values...",
      "Found 127 missing values in age column",
      "Applying data cleaning transformations...",
      "Creating feature engineering pipeline...",
      "Encoding categorical variables: gender, region, subscription_type",
      "Splitting data: 70% train, 15% validation, 15% test",
      "Training Random Forest model...",
      "Cross-validation score: 0.847 (+/- 0.023)",
      "Model saved to /models/customer_churn_rf_v2.pkl",
      "Generating prediction report...",
      "Analysis complete. Check /output/analysis_report.html",
    ],
  },
  {
    command: "jupyter lab --no-browser --port=8888",
    steps: [
      "[I 2025-09-01 14:32:15.742 ServerApp] jupyterlab | extension was successfully linked.",
      "[I 2025-09-01 14:32:15.756 ServerApp] Writing notebook server cookie secret",
      "[I 2025-09-01 14:32:16.234 ServerApp] The Jupyter Server is running at:",
      "[I 2025-09-01 14:32:16.234 ServerApp] http://localhost:8888/lab?token=a1b2c3d4e5f6g7h8i9",
      "[I 2025-09-01 14:32:16.234 ServerApp] Use Control-C to stop this server",
      "[I 2025-09-01 14:32:16.756 LabApp] JupyterLab extension loaded",
    ],
  },
  {
    command:
      "git add . && git commit -m \"feat: add customer segmentation analysis\"",
    steps: [
      "warning: LF will be replaced by CRLF in data/processed/customer_segments.csv.",
      "The file will have its original line endings in your working directory",
      "[main f4a7d2b] feat: add customer segmentation analysis",
      "8 files changed, 247 insertions(+), 12 deletions(-)",
      "create mode 100644 notebooks/customer_segmentation.ipynb",
      "create mode 100644 src/models/segmentation_pipeline.py",
    ],
  },
  {
    command:
      "docker build -t ml-api:latest . && docker run -p 5000:5000 ml-api",
    steps: [
      "Sending build context to Docker daemon  15.36MB",
      "Step 1/8 : FROM python:3.11-slim",
      "Step 2/8 : WORKDIR /app",
      "Step 3/8 : COPY requirements.txt .",
      "Step 4/8 : RUN pip install --no-cache-dir -r requirements.txt",
      "Step 5/8 : COPY . .",
      "Step 6/8 : EXPOSE 5000",
      "Step 7/8 : CMD [\"python\", \"app.py\"]",
      "Successfully built 4c8f9d2a1e7b",
      "Successfully tagged ml-api:latest",
      "* Running on http://0.0.0.0:5000",
      "* Debug mode: off",
      "Model API ready to receive predictions",
    ],
  },
];

export const terminalConfig = {
  stepDelay: 1200,
  stepVariation: 800,
  commandPause: 4000,
  startDelay: 1000,
  terminalHeight: "320px",
  maxLines: 15,
};

export const sectionConfig = {
  showAboutSection: true,
  showSkillsSection: true,
  showProjectsSection: true,
  showTestimonialsSection: false,
  showBlogSection: false,
  showContactSection: true,
};

export const brand = {
  violet700: "263 70% 50%",
  violet500: "271 91% 65%",
  violet900: "263 67% 35%",
  emerald600: "161 94% 30%",
  blue700: "226 71% 40%",
};
