/*
  PERSONALIZE THIS FILE FIRST.
  These starter details were filled from Krish Mahaseth's CV.
  Replace/add project evidence and real profile URLs before publishing.
  Leave optional arrays empty to hide those sections automatically.
  Never add passwords, API keys, or other secrets to this public file.
*/
const portfolioData = {
  name: "Krish Mahaseth",
  role: "CSE Undergraduate · Machine Learning · Data Science",
  status: "Open to internships",
  tagline: "Interested in practical machine learning, data science, and software development that solves real problems.",
  about: "I'm a Computer Science and Engineering undergraduate at the National Institute of Technology Durgapur, with internship experience in machine learning, data analysis, AI research, and digital-payment research. I enjoy working with data, building reproducible ML workflows, and exploring how technology can solve practical problems.",
  aboutExtra: "My interests include machine learning, data science, software development, and user-focused technology. Through research, team activities, and student leadership, I've also developed experience in coordination, communication, and collaborative work.",
  email: "krishmahaseth19@gmail.com",
  phone: "+91 9547439405",
  location: "NIT Durgapur · India",
  resume: "assets/resume.pdf",
  socials: [
    { label: "GitHub", url: "", icon: "github" },
    { label: "LinkedIn", url: "", icon: "linkedin" },
    { label: "Email", url: "mailto:krishmahaseth19@gmail.com", icon: "email" }
  ],
  projects: [
    {
      number: "01", title: "House Price Prediction", category: "MACHINE LEARNING",
      description: "An end-to-end house-price prediction system built with Python and Scikit-learn, using a Random Forest Regressor.",
      problem: "Build a machine-learning workflow that prepares housing data and predicts house prices.",
      role: "Performed exploratory data analysis, engineered date-based features, handled missing values and outliers, and encoded categorical variables. Built preprocessing and training into a Scikit-learn Pipeline and ColumnTransformer.",
      result: "Evaluated the model using MAE, RMSE, and R-squared. The trained model was serialized with Pickle and Joblib for reuse and potential deployment. Add measured scores and a repository link here when ready.",
      stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Random Forest"], github: "", demo: "", featured: true
    }
  ],
  skills: [
    { group: "Programming", items: ["Python", "C++", "C"] },
    { group: "Data & Machine Learning", items: ["Pandas", "NumPy", "Scikit-learn", "EDA", "Data preprocessing", "Feature engineering", "Regression", "Model evaluation"] },
    { group: "Deep Learning", items: ["PyTorch", "TensorFlow", "CNNs", "RNNs", "LSTMs", "Transformers", "BERT"] },
    { group: "Tools & Other Areas", items: ["Git", "GitHub", "Figma", "Jira", "UI/UX", "Network security", "Two-factor authentication"] }
  ],
  facts: [
    { label: "Education", value: "B.Tech. CSE · NIT Durgapur" },
    { label: "Graduation", value: "2027" },
    { label: "Languages", value: "English, Hindi, Nepali, Maithili" }
  ],
  experience: [
    {
      period: "May 2026 – Aug 2026", role: "AI Intern", organization: "AITC International Pvt. Ltd. · Bhaktapur, Nepal",
      description: "Developed a house-price prediction system using Python, Pandas, NumPy, and Scikit-learn. Worked on exploratory data analysis, preprocessing, feature engineering, ML/DL models, and research into Transformer and BERT architectures."
    },
    {
      period: "May 2025 – Jul 2025", role: "Research Intern", organization: "Creative Lab · Kathmandu, Nepal",
      description: "Researched alternative two-factor authentication features for UPI-based payments, focusing on security, usability, and user trust. Mapped payment user journeys, designed interface prototypes in Figma, and organized research and design work in Jira."
    },
    {
      period: "2024 – Present", role: "Hall Representative & Head of Sports Committee", organization: "Hall 12 · NIT Durgapur",
      description: "Represent student concerns, coordinate with hostel administration and maintenance teams, formed a sports committee, and help organize sports competitions and inter-hall tournament selections."
    },
    {
      period: "2026 – Present", role: "Gym Committee Head", organization: "Hall 12 · NIT Durgapur",
      description: "Coordinate gym equipment maintenance, upgrades, repairs, and safety with the administration."
    },
    {
      period: "2023 – Present", role: "Senior Coordinator", organization: "AAROHAN · NIT Durgapur Annual Technical Fest",
      description: "Support event planning, logistics, scheduling, on-ground operations, and inter-team communication for technical and cultural activities."
    }
  ],
  testimonials: []
};
