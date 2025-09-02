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
  { name: "Python", level: 90, icon: Code, category: "Programming", tools: ["Pandas", "Scikit-learn", "NumPy", "Jupyter"] },
  { name: "Web Analytics", level: 95, icon: BarChart3, category: "Analytics", tools: ["GA4", "GTM", "BigQuery", "Looker Studio"] },
  { name: "Machine Learning", level: 75, icon: Brain, category: "AI/ML", tools: ["RandomForest", "XGBoost", "Pipelines", "CV"] },
  { name: "SQL/Databases", level: 88, icon: Database, category: "Data", tools: ["Postgres", "BigQuery", "MySQL", "SQLite"] },
  { name: "Data Visualization", level: 85, icon: TrendingUp, category: "Viz", tools: ["Matplotlib", "Seaborn", "D3.js", "Recharts"] },
  { name: "Cloud/DevOps", level: 70, icon: Zap, category: "Infrastructure", tools: ["AWS", "Docker", "CI/CD", "Linux"] },
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
    command: "python -m pip install pandas scikit-learn matplotlib seaborn",
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
    command: "python titanic_train.py",
    steps: [
      "Loading Titanic dataset from seaborn",
      "Dataset shape: (891, 15)",
      "Checking missing values...",
      "Missing: age=177, cabin=687, embarked=2",
      "Building preprocessing: impute(age->median), one-hot(sex, embarked), scale(numeric)",
      "Splitting data: 80% train, 20% test (stratified by survived)",
      "Training LogisticRegression (liblinear)...",
      "5-fold cross-val accuracy: 0.782 (+/- 0.024)",
      "Test Accuracy: 0.789 | ROC AUC: 0.84",
      "Top features: sex_male, pclass, fare, age",
      "Saving model to /models/titanic_lr.pkl",
      "Generating evaluation report at /output/titanic_report.html",
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
    command: "git add . && git commit -m \"feat: titanic: add LR pipeline, report and model\"",
    steps: [
      "[main 8a3c1f2] feat: titanic: add LR pipeline, report and model",
      "6 files changed, 312 insertions(+), 18 deletions(-)",
      "create mode 100644 notebooks/titanic_analysis.ipynb",
      "create mode 100644 src/models/titanic_pipeline.py",
    ],
  },
];

export const terminalConfig = {
  stepDelay: 55,
  stepVariation: 35,
  commandPause: 240,
  startDelay: 60,
  terminalHeight: "420px",
  maxLines: 18,
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
