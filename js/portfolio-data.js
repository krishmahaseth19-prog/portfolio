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
    { label: "GitHub", url: "https://github.com/krishmahaseth19-prog", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/krish-mahaseth", icon: "linkedin" },
    { label: "Email", url: "mailto:krishmahaseth19@gmail.com", icon: "email" }
  ],
  projects: [
    {
      number: "01", title: "House Price Prediction", category: "MACHINE LEARNING",
      description: "An end-to-end house price prediction application built with Python and Scikit-learn. It uses a 300-estimator Extra Trees Regressor, a FastAPI REST API with interactive Swagger UI documentation, and a Streamlit dashboard for live predictions and model evaluation.",
      problem: "Build an end-to-end machine-learning workflow that prepares housing data, estimates residential property prices, and makes predictions accessible through a web interface and REST API.",
      role: "Handled data cleaning, preprocessing, date-based feature engineering, missing-value imputation, IQR-based outlier handling, and categorical encoding. Built a Scikit-learn Pipeline with an Extra Trees Regressor, developed a FastAPI REST endpoint for JSON-based predictions, and created an interactive Streamlit dashboard with Plotly visualizations. Published interactive endpoint documentation through Swagger UI.",
      result: "On the held-out test set, the 300-estimator Extra Trees model achieved MAE $77,106.38, MSE 14,300,417,704.77, RMSE $119,584.35, and R² 0.7114. Saved the model with Pickle and Joblib, hosted the model artifact on Hugging Face, deployed the FastAPI backend on Render, and deployed the Streamlit dashboard. The API exposes /predict and /health endpoints, with interactive Swagger documentation.",
      stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Extra Trees Regressor", "FastAPI", "Streamlit", "Plotly", "Hugging Face"], github: "https://github.com/krishmahaseth19-prog/HousePricePrediction", demo: "https://house-price-prediction-krishma.streamlit.app/", api: "https://house-price-prediction-api-2q84.onrender.com/docs", featured: true
    },
    {
      number: "02", title: "Multi-Service Mobile App UI/UX Design", category: "UI/UX DESIGN",
      description: "A Figma mobile-app interface concept that brings digital payments, utility and bill payments, and travel services together in one organized dashboard.",
      problem: "Explore how a user can access several everyday digital services from a single mobile interface without making the home screen feel cluttered.",
      role: "Created a mobile dashboard wireframe in Figma with grouped service areas, a login/register header, payment shortcuts, utility-payment options, travel and ticketing categories, and bottom navigation.",
      result: "Produced a mobile UI concept covering digital payments (Load Money, Send Money, Bank Transfer, and Remittance), utility services (Top-up & Data, Electricity, Water/Khanepani, Internet, Government Payment, Traffic Fine Payment, and Health), and travel services (Airlines, International Airlines, Hotels, and Bus Tickets).",
      stack: ["Figma", "UI/UX Design", "Mobile App Design", "Wireframing"],
      figma: "https://www.figma.com/design/wsvzEFHNQMaESJZN0F08GK/Untitled?node-id=1-9",
      featured: false
    }
  ],
  skills: [
    { group: "Programming", items: ["Python", "C++", "C"] },
    { group: "Data & Machine Learning", items: ["Pandas", "NumPy", "Scikit-learn", "EDA", "Data preprocessing", "Feature engineering", "Regression", "Model evaluation"] },
    { group: "Deep Learning", items: ["PyTorch", "TensorFlow", "CNNs", "RNNs", "LSTMs", "Transformers", "BERT"] },
    { group: "Design", items: ["Figma", "UI/UX Design", "Mobile App Design", "Wireframing"] },
    { group: "Tools & Other Areas", items: ["Git", "GitHub", "Jira", "Network security", "Two-factor authentication"] }
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
