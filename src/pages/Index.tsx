import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { ServiceSection } from "@/components/ServiceSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [activeBrand, setActiveBrand] = useState("Quantum Innovations");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[data-brand]");
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          const brand = element.getAttribute("data-brand");
          if (brand) setActiveBrand(brand);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    {
      id: "home",
      brand: "Quantum Innovations",
      title: "AI Solutions",
      description: "Deploy enterprise-grade AI systems that drive measurable ROI through intelligent automation, predictive modeling, and advanced natural language understanding. Our solutions reduce operational costs by up to 40% while improving decision accuracy. Recent pilot: A Fortune 500 retailer achieved 28% faster inventory forecasting.",
      subServices: [
        { title: "Intelligent Automation", description: "End-to-end workflow automation leveraging machine learning to eliminate manual processes and reduce cycle times by 50%." },
        { title: "Decision Intelligence", description: "Real-time analytics and predictive models that empower C-suite executives with data-driven insights for strategic planning." },
      ],
      capabilities: [
        { title: "Predictive Modeling", description: "Forecast business outcomes with 95% accuracy using ensemble ML techniques and continuous model retraining." },
        { title: "Process Optimization", description: "Identify bottlenecks and automate repetitive tasks, delivering 35% productivity gains across operations." },
        { title: "AI Governance", description: "Enterprise-ready frameworks ensuring model transparency, compliance, and ethical AI deployment at scale." },
      ],
      ctaHeading: "Accelerate Your AI Transformation",
      ctaText: "Launch a pilot in 6 weeks and see measurable impact on efficiency, cost reduction, and revenue growth within your first quarter.",
      gradient: "from-background to-card/30",
    },
    {
      id: "chatbots",
      brand: "ConvoTech AI",
      title: "Custom Chatbots & RAG Systems",
      description: "Build conversational AI agents with retrieval-augmented generation (RAG) to deliver precise, context-aware responses. Reduce customer support tickets by 60% and improve satisfaction scores by 45%. Pilot: A SaaS company automated 70% of tier-1 inquiries in 8 weeks.",
      subServices: [
        { title: "Domain-Specific Bots", description: "Train chatbots on proprietary knowledge bases to handle complex, industry-specific queries with human-like accuracy." },
        { title: "Multimodal Interfaces", description: "Integrate voice, text, and visual inputs for seamless omnichannel customer experiences across web and mobile." },
      ],
      capabilities: [
        { title: "RAG Architecture", description: "Leverage vector databases and semantic search to retrieve relevant documents and generate accurate, hallucination-free answers." },
        { title: "Continuous Learning", description: "Implement feedback loops that refine bot performance over time, reducing error rates by 30% month-over-month." },
        { title: "Enterprise Integration", description: "Connect to CRM, ERP, and support systems for unified data access and real-time ticket resolution." },
      ],
      ctaHeading: "Transform Customer Engagement",
      ctaText: "Deploy a custom chatbot in 4 weeks. See immediate reductions in support costs and faster resolution times from day one.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "predictive",
      brand: "Nexora Labs",
      title: "Predictive Analytics Models",
      description: "Unlock future insights with advanced forecasting models that anticipate market shifts, customer behavior, and operational risks. Achieve forecast accuracy exceeding 92% and reduce planning cycles by 50%. Example: A logistics firm cut route costs by 18% through demand prediction.",
      subServices: [
        { title: "Demand Forecasting", description: "Optimize inventory and supply chain planning with models that predict demand fluctuations across geographies and seasons." },
        { title: "Risk Assessment", description: "Identify financial, operational, and cybersecurity risks before they materialize, enabling proactive mitigation strategies." },
      ],
      capabilities: [
        { title: "Time-Series Analysis", description: "Apply ARIMA, LSTM, and Prophet models to capture complex temporal patterns in sales, revenue, and resource utilization." },
        { title: "Scenario Planning", description: "Run Monte Carlo simulations to evaluate business outcomes under various market conditions and strategic decisions." },
        { title: "Real-Time Dashboards", description: "Visualize KPIs and predictive metrics in intuitive dashboards, empowering stakeholders with actionable intelligence." },
      ],
      ctaHeading: "Harness Predictive Power",
      ctaText: "Start a forecasting pilot today. Gain clarity on future trends and make confident, data-backed decisions within weeks.",
      gradient: "from-background to-card/30",
    },
    {
      id: "nlp-cv",
      brand: "Visionary AI",
      title: "NLP & Computer Vision Projects",
      description: "Extract insights from unstructured text and visual data using state-of-the-art NLP and computer vision. Automate document processing, sentiment analysis, and image classification at scale. Case study: A healthcare provider reduced diagnosis time by 35% with medical image AI.",
      subServices: [
        { title: "Document Intelligence", description: "Automatically extract entities, classify documents, and summarize legal contracts, reducing manual review time by 80%." },
        { title: "Visual Inspection", description: "Deploy computer vision for quality control, defect detection, and asset monitoring in manufacturing and infrastructure." },
      ],
      capabilities: [
        { title: "Transformer Models", description: "Leverage BERT, GPT, and T5 for language understanding, translation, and generation tasks with near-human accuracy." },
        { title: "Object Detection", description: "Implement YOLOv8 and Mask R-CNN for real-time object localization, tracking, and segmentation in video streams." },
        { title: "Multimodal Fusion", description: "Combine text, image, and audio data for richer insights—ideal for content moderation and personalized recommendations." },
      ],
      ctaHeading: "Unlock Unstructured Data",
      ctaText: "Deploy NLP or CV solutions in 6–8 weeks. See immediate improvements in accuracy, speed, and cost efficiency.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "ai-apps",
      brand: "AppGenius",
      title: "AI-Powered Web & Mobile Apps",
      description: "Build intelligent, user-centric applications that integrate ML models for personalization, recommendations, and automation. Increase user engagement by 50% and retention by 35%. Pilot: An e-commerce app boosted conversions by 22% with AI-driven product suggestions.",
      subServices: [
        { title: "Personalization Engines", description: "Deliver tailored content, product recommendations, and dynamic pricing based on real-time user behavior and preferences." },
        { title: "Voice-Enabled Interfaces", description: "Integrate speech recognition and synthesis for hands-free interactions in mobile apps, IoT devices, and automotive systems." },
      ],
      capabilities: [
        { title: "Recommendation Systems", description: "Implement collaborative and content-based filtering to surface relevant items, driving 30% higher click-through rates." },
        { title: "Edge AI Deployment", description: "Run ML models on-device for low-latency inference, ensuring privacy and offline functionality in mobile environments." },
        { title: "A/B Testing & Optimization", description: "Continuously test model variants and UI/UX changes to maximize conversion rates and user satisfaction." },
      ],
      ctaHeading: "Elevate User Experience",
      ctaText: "Launch an AI-powered app prototype in 8 weeks. Delight users with intelligent features and see engagement soar.",
      gradient: "from-background to-card/30",
    },
    {
      id: "process-auto",
      brand: "AutoFlow",
      title: "Process Automation",
      description: "Streamline end-to-end business processes with intelligent automation that eliminates bottlenecks and accelerates workflows. Achieve 60% reduction in manual tasks and 40% faster turnaround times. Success story: A financial services firm automated loan approvals, cutting processing time from days to hours.",
      subServices: [
        { title: "Robotic Process Automation", description: "Deploy software bots to handle repetitive tasks like data entry, invoice processing, and report generation with 99.9% accuracy." },
        { title: "Workflow Orchestration", description: "Design complex, multi-step processes that integrate humans and bots, ensuring seamless handoffs and exception handling." },
      ],
      capabilities: [
        { title: "Intelligent Document Processing", description: "Extract and validate data from invoices, contracts, and forms using OCR and NLP, reducing errors by 85%." },
        { title: "API Integration", description: "Connect legacy systems, cloud platforms, and third-party APIs to create unified, automated workflows." },
        { title: "Audit & Compliance", description: "Maintain detailed logs and ensure regulatory compliance with automated monitoring and reporting." },
      ],
      ctaHeading: "Automate With Confidence",
      ctaText: "Pilot an automation project in 4 weeks. Experience immediate cost savings and faster cycle times from the start.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "sales-marketing",
      brand: "GrowthEngine",
      title: "Sales & Marketing Automation",
      description: "Drive revenue growth with AI-powered lead scoring, personalized campaigns, and predictive sales analytics. Increase conversion rates by 45% and reduce acquisition costs by 30%. Example: A B2B SaaS firm grew pipeline by 50% using automated lead nurturing.",
      subServices: [
        { title: "Lead Intelligence", description: "Score and prioritize leads based on behavioral data, firmographics, and intent signals, ensuring sales teams focus on high-value prospects." },
        { title: "Campaign Optimization", description: "Automate email sequences, A/B tests, and multi-channel outreach to maximize engagement and ROI across all touchpoints." },
      ],
      capabilities: [
        { title: "Predictive Lead Scoring", description: "Use machine learning to identify leads most likely to convert, improving sales efficiency by 40%." },
        { title: "Personalization at Scale", description: "Dynamically tailor messaging and content for each prospect, boosting email open rates by 35%." },
        { title: "Attribution Modeling", description: "Track campaign impact across the customer journey, enabling data-driven budget allocation and strategy refinement." },
      ],
      ctaHeading: "Supercharge Your Pipeline",
      ctaText: "Launch an automated sales campaign in 3 weeks. See measurable lift in qualified leads and closed deals quickly.",
      gradient: "from-background to-card/30",
    },
    {
      id: "hr-recruitment",
      brand: "TalentAI",
      title: "HR & Recruitment AI Agents",
      description: "Modernize talent acquisition and employee management with AI-driven screening, onboarding, and engagement tools. Reduce time-to-hire by 50% and improve retention by 25%. Case study: A tech company filled 100+ roles in 6 months with AI-assisted recruiting.",
      subServices: [
        { title: "Candidate Screening", description: "Automate resume parsing, skills assessment, and interview scheduling to identify top talent faster and more objectively." },
        { title: "Employee Engagement", description: "Deploy chatbots for onboarding, benefits inquiries, and continuous feedback, enhancing satisfaction and productivity." },
      ],
      capabilities: [
        { title: "Bias Reduction", description: "Apply fairness algorithms to ensure equitable candidate evaluation, promoting diversity and inclusion in hiring." },
        { title: "Predictive Attrition", description: "Identify employees at risk of leaving and recommend interventions, reducing turnover costs by 20%." },
        { title: "Onboarding Automation", description: "Guide new hires through paperwork, training modules, and compliance checks, cutting onboarding time by 60%." },
      ],
      ctaHeading: "Transform Talent Operations",
      ctaText: "Pilot HR automation in 5 weeks. Accelerate hiring, boost engagement, and retain top performers with AI.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "finance-accounting",
      brand: "FinTech Innovate",
      title: "Finance & Accounting Workflows",
      description: "Automate financial operations from invoice processing to reconciliation and reporting, achieving 70% faster close cycles and 99% accuracy. Real-world impact: A multinational reduced month-end close from 10 days to 3 days with intelligent automation.",
      subServices: [
        { title: "Accounts Payable/Receivable", description: "Streamline invoice capture, approval workflows, and payment processing, eliminating manual entry and late fees." },
        { title: "Financial Reporting", description: "Generate real-time P&L, balance sheets, and cash flow statements with automated data aggregation and validation." },
      ],
      capabilities: [
        { title: "Automated Reconciliation", description: "Match transactions across systems in seconds, reducing errors and freeing finance teams for strategic analysis." },
        { title: "Fraud Detection", description: "Monitor transactions for anomalies using ML models, preventing financial losses and ensuring compliance." },
        { title: "Regulatory Compliance", description: "Automatically generate audit trails and reports for SOX, GDPR, and other regulatory requirements." },
      ],
      ctaHeading: "Optimize Financial Operations",
      ctaText: "Implement finance automation in 6 weeks. Close books faster, reduce errors, and gain real-time visibility.",
      gradient: "from-background to-card/30",
    },
    {
      id: "customer-support",
      brand: "SupportBot Pro",
      title: "Customer Support Automation",
      description: "Deliver 24/7 support with AI-powered agents that resolve queries instantly, reducing ticket volume by 65% and improving CSAT by 40%. Pilot: A telecom provider automated 80% of common inquiries, freeing agents for complex issues.",
      subServices: [
        { title: "Omnichannel Support", description: "Unify chat, email, voice, and social channels in a single platform, ensuring consistent, fast responses across all touchpoints." },
        { title: "Self-Service Portals", description: "Empower customers to find answers, track orders, and resolve issues independently, reducing support costs by 50%." },
      ],
      capabilities: [
        { title: "Intent Recognition", description: "Classify customer queries with 98% accuracy, routing tickets to the right agent or bot for faster resolution." },
        { title: "Sentiment Analysis", description: "Detect frustration or urgency in real-time, triggering escalations and personalized responses to retain customers." },
        { title: "Knowledge Base Integration", description: "Automatically pull relevant articles and FAQs, enabling instant, accurate answers to common questions." },
      ],
      ctaHeading: "Revolutionize Customer Care",
      ctaText: "Deploy automated support in 4 weeks. Reduce costs, improve satisfaction, and scale effortlessly as you grow.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "ai-consulting",
      brand: "QuantaMind",
      title: "Enterprise AI Roadmap",
      description: "Define a strategic AI vision aligned with business objectives, balancing quick wins with long-term transformation. Our roadmaps deliver 200%+ ROI within 18 months by prioritizing high-impact use cases. Engagement: A manufacturing giant achieved $12M in savings through our phased AI rollout.",
      subServices: [
        { title: "Use Case Prioritization", description: "Evaluate opportunities across functions, ranking by ROI, feasibility, and strategic alignment to guide investment decisions." },
        { title: "Change Management", description: "Prepare teams for AI adoption through training, upskilling, and stakeholder engagement, ensuring smooth transitions." },
      ],
      capabilities: [
        { title: "Maturity Assessment", description: "Benchmark your AI readiness against industry standards, identifying gaps in data, infrastructure, and talent." },
        { title: "Technology Selection", description: "Recommend optimal ML frameworks, cloud platforms, and vendors based on your architecture and constraints." },
        { title: "Governance Frameworks", description: "Establish policies for model risk, ethics, and compliance, building trust and accountability across the organization." },
      ],
      ctaHeading: "Chart Your AI Journey",
      ctaText: "Engage in a 2-week roadmap workshop. Walk away with a clear, actionable plan to scale AI across your enterprise.",
      gradient: "from-background to-card/30",
    },
    {
      id: "digital-transformation",
      brand: "TransformX",
      title: "Digital Transformation Strategy",
      description: "Reimagine business models, operations, and customer experiences with end-to-end digital strategies. Achieve 50% improvement in operational efficiency and 35% revenue uplift. Success: A retail chain pivoted to e-commerce and increased online sales by 300% in one year.",
      subServices: [
        { title: "Business Model Innovation", description: "Explore new revenue streams, partnerships, and go-to-market strategies enabled by digital technologies and platforms." },
        { title: "Customer Experience Design", description: "Map journeys, identify pain points, and design seamless, personalized experiences that drive loyalty and NPS gains." },
      ],
      capabilities: [
        { title: "Cloud Migration", description: "Transition legacy systems to scalable cloud infrastructure, reducing IT costs by 40% and improving agility." },
        { title: "Data Modernization", description: "Build data lakes, warehouses, and analytics platforms that unify siloed information for enterprise-wide insights." },
        { title: "Agile Transformation", description: "Adopt agile methodologies and DevOps practices to accelerate delivery, reduce time-to-market, and foster innovation." },
      ],
      ctaHeading: "Lead Digital Disruption",
      ctaText: "Begin your transformation roadmap in 3 weeks. Position your business for sustained growth in a digital-first world.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "ai-infrastructure",
      brand: "CloudOps AI",
      title: "AI Infrastructure & MLOps",
      description: "Build robust, scalable ML infrastructure with automated training, deployment, and monitoring pipelines. Reduce model deployment time from months to days and ensure 99.9% uptime. Implementation: A fintech achieved 10x faster model iteration with our MLOps platform.",
      subServices: [
        { title: "Model Lifecycle Management", description: "Version, test, and deploy models with CI/CD pipelines, ensuring reproducibility and compliance across environments." },
        { title: "Distributed Training", description: "Leverage GPU clusters and distributed computing frameworks to train large models faster and more cost-effectively." },
      ],
      capabilities: [
        { title: "Container Orchestration", description: "Use Kubernetes and Docker to package and scale ML workloads seamlessly across cloud and on-premise infrastructure." },
        { title: "Monitoring & Observability", description: "Track model performance, data drift, and resource utilization in real-time, triggering retraining and alerts as needed." },
        { title: "AutoML & Hyperparameter Tuning", description: "Automate model selection and optimization, reducing experimentation time by 60% while improving accuracy." },
      ],
      ctaHeading: "Strengthen Your ML Foundation",
      ctaText: "Deploy MLOps in 8 weeks. Accelerate model delivery, ensure reliability, and scale AI initiatives enterprise-wide.",
      gradient: "from-background to-card/30",
    },
    {
      id: "quantum-research",
      brand: "Quantum Frontier",
      title: "Quantum AI Research & Development",
      description: "Explore next-generation computing with quantum algorithms for optimization, cryptography, and machine learning. Early adopters gain 5–10 year competitive advantages. Pilot: A logistics firm tested quantum annealing for route optimization, achieving 15% efficiency gains.",
      subServices: [
        { title: "Quantum Algorithms", description: "Develop custom algorithms for combinatorial optimization, simulation, and machine learning on quantum hardware." },
        { title: "Hybrid Classical-Quantum", description: "Combine classical ML with quantum circuits to solve problems intractable for traditional computing alone." },
      ],
      capabilities: [
        { title: "QAOA & VQE", description: "Implement Quantum Approximate Optimization and Variational Quantum Eigensolver for optimization and chemistry problems." },
        { title: "Quantum Annealing", description: "Solve large-scale optimization tasks on D-Wave systems, applicable to scheduling, logistics, and portfolio management." },
        { title: "Quantum Simulation", description: "Model molecular structures and material properties for drug discovery and materials science breakthroughs." },
      ],
      ctaHeading: "Pioneer Quantum Computing",
      ctaText: "Join a quantum R&D pilot in 10 weeks. Position your organization at the forefront of computational innovation.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "ai-hackathons",
      brand: "InnoBuild",
      title: "AI Hackathons",
      description: "Accelerate innovation through intensive, time-boxed hackathons where cross-functional teams prototype AI solutions. Generate 10–15 viable concepts in 48 hours. Event outcome: A pharma company identified 3 high-ROI use cases now in production.",
      subServices: [
        { title: "Problem Framing", description: "Collaborate with stakeholders to define challenges, success criteria, and constraints before teams begin building." },
        { title: "Rapid Prototyping", description: "Provide tools, data, and expert mentorship to enable teams to build and demo working prototypes in days." },
      ],
      capabilities: [
        { title: "Ideation Workshops", description: "Facilitate brainstorming sessions that blend domain expertise with AI capabilities, surfacing creative solutions." },
        { title: "Pitch & Judging", description: "Evaluate prototypes based on feasibility, impact, and scalability, selecting winners for pilot development." },
        { title: "Post-Hackathon Support", description: "Transition winning ideas into funded projects with clear roadmaps, resources, and executive sponsorship." },
      ],
      ctaHeading: "Spark Innovation Fast",
      ctaText: "Host a hackathon in 2 weeks. Unleash your team's creativity and discover breakthrough AI applications quickly.",
      gradient: "from-background to-card/30",
    },
    {
      id: "capstone-projects",
      brand: "ProjectLab",
      title: "Capstone Projects",
      description: "Partner with academic institutions and internal teams to deliver real-world AI projects that solve business challenges. Build talent pipelines and validate new technologies. Example: A university collaboration yielded a fraud detection model now deployed enterprise-wide.",
      subServices: [
        { title: "Industry-Academia Collaboration", description: "Connect with top universities to access cutting-edge research and emerging talent for joint AI initiatives." },
        { title: "Internal Innovation Challenges", description: "Empower employees to propose and lead capstone projects, fostering a culture of innovation and ownership." },
      ],
      capabilities: [
        { title: "Project Scoping", description: "Define objectives, data requirements, and success metrics to ensure capstone teams deliver actionable results." },
        { title: "Mentorship & Guidance", description: "Assign experienced AI practitioners to coach teams, troubleshoot technical issues, and maintain momentum." },
        { title: "Technology Transfer", description: "Package capstone outputs—models, code, documentation—for seamless handoff to production engineering teams." },
      ],
      ctaHeading: "Cultivate Future Innovators",
      ctaText: "Launch a capstone program in 6 weeks. Develop talent, solve real problems, and build a pipeline of AI expertise.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "startup-builder",
      brand: "VentureLaunch",
      title: "Startup Builder Program",
      description: "Incubate AI-driven startups with end-to-end support: ideation, product development, go-to-market, and fundraising. 70% of program graduates secure seed funding within 6 months. Success: A fintech startup raised $2M after 12 weeks in our accelerator.",
      subServices: [
        { title: "Product-Market Fit", description: "Conduct customer discovery, validate assumptions, and iterate rapidly to find scalable, defensible business models." },
        { title: "Technical Co-Founding", description: "Provide engineering and data science resources to build MVPs and scale infrastructure as the startup grows." },
      ],
      capabilities: [
        { title: "Pitch Deck Development", description: "Craft compelling narratives, financial projections, and market analyses that resonate with VCs and angel investors." },
        { title: "Investor Introductions", description: "Leverage our network to connect founders with relevant investors, increasing fundraising success rates by 50%." },
        { title: "Go-To-Market Strategy", description: "Design launch plans, pricing models, and customer acquisition strategies that drive early traction and revenue." },
      ],
      ctaHeading: "Launch Your AI Venture",
      ctaText: "Apply to our startup program in 1 week. Get resources, mentorship, and funding to bring your AI idea to market.",
      gradient: "from-background to-card/30",
    },
    {
      id: "n8n-automation",
      brand: "WorkflowPro",
      title: "n8n Automation Tools",
      description: "Deploy n8n-based workflow automation to connect apps, APIs, and data sources without code. Reduce integration costs by 60% and accelerate deployment from weeks to hours. Use case: A marketing agency automated lead routing across 5 platforms, saving 20 hours/week.",
      subServices: [
        { title: "Custom Workflows", description: "Design multi-step automations that trigger on events, schedule tasks, and orchestrate complex business logic visually." },
        { title: "Third-Party Integrations", description: "Connect CRM, email, Slack, databases, and 300+ apps using n8n's extensive node library and webhooks." },
      ],
      capabilities: [
        { title: "Self-Hosted Flexibility", description: "Run n8n on-premise or in your cloud for complete control over data, security, and compliance." },
        { title: "Error Handling & Retry", description: "Build resilient workflows with automatic retries, fallback paths, and detailed logging for troubleshooting." },
        { title: "Real-Time Monitoring", description: "Track workflow execution, identify bottlenecks, and optimize performance with built-in dashboards and alerts." },
      ],
      ctaHeading: "Automate Anything With n8n",
      ctaText: "Implement n8n workflows in 3 weeks. Connect your tech stack and eliminate manual handoffs instantly.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "odoo-integration",
      brand: "Odoo Solutions",
      title: "Odoo ERP Integration",
      description: "Streamline operations with Odoo ERP, integrating accounting, inventory, CRM, and HR into a unified platform. Reduce system complexity by 50% and improve data accuracy by 40%. Deployment: A manufacturing SME consolidated 7 legacy systems into Odoo, cutting IT costs by 35%.",
      subServices: [
        { title: "Custom Module Development", description: "Extend Odoo with industry-specific modules and workflows tailored to your unique business requirements." },
        { title: "Data Migration", description: "Seamlessly transfer data from legacy systems to Odoo, ensuring data integrity and minimizing downtime." },
      ],
      capabilities: [
        { title: "End-to-End Integration", description: "Connect Odoo with e-commerce, payment gateways, shipping, and marketing platforms for holistic operations." },
        { title: "Mobile Access", description: "Enable field teams to access ERP data and perform tasks on mobile devices, improving productivity and responsiveness." },
        { title: "Business Intelligence", description: "Generate dashboards and reports on sales, inventory, and financials, providing real-time visibility into performance." },
      ],
      ctaHeading: "Unify Your Business Systems",
      ctaText: "Deploy Odoo in 8 weeks. Simplify IT, enhance visibility, and scale operations efficiently with integrated ERP.",
      gradient: "from-background to-card/30",
    },
    {
      id: "data-pipelines",
      brand: "DataStream",
      title: "Data Pipeline Automation",
      description: "Build reliable, scalable data pipelines that ingest, transform, and load data for analytics and ML. Reduce data preparation time by 70% and improve data quality by 50%. Example: A retailer automated ETL for 10M daily transactions, enabling real-time reporting.",
      subServices: [
        { title: "ETL/ELT Design", description: "Extract data from diverse sources, apply transformations, and load into warehouses or lakes for downstream consumption." },
        { title: "Streaming Data", description: "Process real-time data from IoT, logs, and events using Kafka, Spark Streaming, and Flink for instant insights." },
      ],
      capabilities: [
        { title: "Data Validation", description: "Implement schema checks, anomaly detection, and data quality rules to prevent bad data from polluting analytics." },
        { title: "Orchestration & Scheduling", description: "Use Airflow or Prefect to manage dependencies, schedule jobs, and monitor pipeline health across environments." },
        { title: "Lineage & Governance", description: "Track data flow from source to destination, ensuring compliance and enabling root-cause analysis of issues." },
      ],
      ctaHeading: "Power Your Data Operations",
      ctaText: "Deploy data pipelines in 6 weeks. Ensure reliable, high-quality data flows that fuel analytics and AI initiatives.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "ai-marketing",
      brand: "MarketIQ",
      title: "AI-Powered Marketing",
      description: "Optimize campaigns with AI-driven audience segmentation, content personalization, and spend allocation. Increase ROAS by 60% and reduce CAC by 35%. Campaign: An e-commerce brand scaled ad spend 3x while maintaining CPA through predictive bidding.",
      subServices: [
        { title: "Audience Insights", description: "Analyze customer data to uncover segments, preferences, and lifetime value, enabling hyper-targeted marketing." },
        { title: "Creative Optimization", description: "Test and optimize ad creatives, landing pages, and CTAs using multivariate testing and reinforcement learning." },
      ],
      capabilities: [
        { title: "Predictive Bidding", description: "Automate bid adjustments across Google, Facebook, and programmatic platforms to maximize conversions within budget." },
        { title: "Lookalike Modeling", description: "Identify new prospects similar to your best customers, expanding reach while maintaining high conversion rates." },
        { title: "Attribution Analytics", description: "Measure campaign impact across touchpoints, allocating credit accurately and optimizing channel mix." },
      ],
      ctaHeading: "Maximize Marketing ROI",
      ctaText: "Launch AI marketing tools in 4 weeks. Drive more conversions, reduce waste, and scale campaigns profitably.",
      gradient: "from-background to-card/30",
    },
    {
      id: "customer-intelligence",
      brand: "InsightEngine",
      title: "Customer Intelligence",
      description: "Gain 360° customer views by unifying data from transactions, interactions, and behaviors. Increase retention by 30% and cross-sell rates by 40%. Application: A subscription service reduced churn by 25% using predictive engagement models.",
      subServices: [
        { title: "Churn Prediction", description: "Identify at-risk customers early and trigger retention campaigns, loyalty offers, or personalized outreach to prevent churn." },
        { title: "Next-Best-Action", description: "Recommend optimal actions for each customer—upsell, cross-sell, support—based on real-time behavioral signals." },
      ],
      capabilities: [
        { title: "Customer Data Platform", description: "Consolidate data from CRM, web, mobile, and support into a unified profile for holistic analysis and activation." },
        { title: "Segmentation & Personas", description: "Build dynamic segments based on RFM, lifecycle stage, and psychographics, enabling precision targeting." },
        { title: "Lifetime Value Modeling", description: "Forecast CLV to prioritize high-value customers and allocate resources for maximum long-term profitability." },
      ],
      ctaHeading: "Deepen Customer Relationships",
      ctaText: "Deploy customer intelligence in 5 weeks. Retain more customers, increase wallet share, and drive loyalty.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "predictive-growth",
      brand: "GrowthMetrics",
      title: "Predictive Analytics for Growth",
      description: "Leverage predictive models to forecast revenue, identify expansion opportunities, and optimize resource allocation. Achieve 25% faster growth and 30% higher profitability. Insight: A SaaS company prioritized high-growth accounts, boosting ARR by $5M in one year.",
      subServices: [
        { title: "Revenue Forecasting", description: "Predict future sales and bookings with scenario planning, enabling confident budgeting and capacity planning." },
        { title: "Market Expansion", description: "Identify high-potential geographies, verticals, and customer segments for strategic growth investments." },
      ],
      capabilities: [
        { title: "Cohort Analysis", description: "Track performance of customer cohorts over time, revealing retention patterns and monetization opportunities." },
        { title: "Pipeline Analytics", description: "Forecast deal closures, conversion rates, and sales velocity to improve forecasting accuracy and quota setting." },
        { title: "Pricing Optimization", description: "Test pricing strategies and elasticity models to maximize revenue without sacrificing demand or market share." },
      ],
      ctaHeading: "Fuel Sustainable Growth",
      ctaText: "Start growth analytics in 4 weeks. Make data-driven decisions that accelerate revenue and market share.",
      gradient: "from-background to-card/30",
    },
    {
      id: "python",
      brand: "CodeForge",
      title: "Python",
      description: "Harness Python's versatility for data science, web development, automation, and AI—powering 80% of ML projects globally. Achieve 50% faster development cycles and 60% lower costs. Project: A data team built a forecasting suite in Python, reducing analysis time from weeks to hours.",
      subServices: [
        { title: "Data Science Libraries", description: "Leverage pandas, NumPy, scikit-learn, and PyTorch for data manipulation, statistical modeling, and deep learning." },
        { title: "API & Microservices", description: "Build scalable, RESTful APIs with Flask, FastAPI, and Django for seamless integration with front-end and mobile apps." },
      ],
      capabilities: [
        { title: "Notebook Environments", description: "Use Jupyter and Colab for interactive development, exploratory analysis, and collaborative research." },
        { title: "Package Management", description: "Manage dependencies with pip and conda, ensuring reproducible environments across development and production." },
        { title: "Testing & CI/CD", description: "Implement pytest, linting, and automated deployments to maintain code quality and accelerate releases." },
      ],
      ctaHeading: "Build With Python",
      ctaText: "Kick off Python projects in 2 weeks. Leverage a rich ecosystem to deliver solutions faster and more reliably.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "llamaindex",
      brand: "LlamaLabs",
      title: "LlamaIndex",
      description: "Build advanced RAG applications with LlamaIndex, connecting LLMs to your proprietary data for accurate, context-aware responses. Reduce hallucinations by 80% and improve answer relevance by 70%. Use case: A legal firm deployed a contract Q&A bot with 95% accuracy.",
      subServices: [
        { title: "Document Indexing", description: "Ingest PDFs, Word docs, and databases, creating vector embeddings for fast semantic search and retrieval." },
        { title: "Query Engines", description: "Build custom query pipelines that combine retrieval, reranking, and generation for optimal response quality." },
      ],
      capabilities: [
        { title: "Vector Databases", description: "Integrate with Pinecone, Weaviate, and FAISS for scalable, low-latency similarity search across millions of documents." },
        { title: "Multi-Modal RAG", description: "Extend beyond text to index images, tables, and charts, enabling richer, more comprehensive answers." },
        { title: "Fine-Tuning & Adaptation", description: "Customize embeddings and prompts for domain-specific terminology, improving accuracy in specialized fields." },
      ],
      ctaHeading: "Unlock Your Data With RAG",
      ctaText: "Deploy LlamaIndex RAG in 5 weeks. Empower users to query your knowledge base with natural language instantly.",
      gradient: "from-background to-card/30",
    },
    {
      id: "tensorflow-quantum",
      brand: "QuantumML",
      title: "TensorFlow Quantum",
      description: "Merge quantum computing with classical ML using TensorFlow Quantum for hybrid algorithms. Explore quantum advantage in chemistry, optimization, and finance. Early experiments show 2–3x speedups in select use cases. Research: A materials science lab accelerated molecular simulation by 40%.",
      subServices: [
        { title: "Quantum Circuit Design", description: "Construct and simulate quantum circuits using Cirq, then integrate with TensorFlow for end-to-end training." },
        { title: "Variational Algorithms", description: "Implement VQE and QAOA for optimization and eigenvalue problems, blending quantum and classical gradient descent." },
      ],
      capabilities: [
        { title: "Hybrid Workflows", description: "Combine classical neural networks with quantum layers, enabling models that leverage both paradigms' strengths." },
        { title: "Noise Mitigation", description: "Apply error correction and noise-aware training to improve reliability on near-term quantum hardware." },
        { title: "Benchmarking & Validation", description: "Compare quantum vs. classical performance on well-defined problems, guiding investment in quantum initiatives." },
      ],
      ctaHeading: "Explore Quantum-ML Synergy",
      ctaText: "Join a TensorFlow Quantum pilot in 8 weeks. Investigate quantum speedups and position for future breakthroughs.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "nextjs",
      brand: "WebForward",
      title: "Next.js",
      description: "Build high-performance, SEO-friendly web applications with Next.js, React's leading framework for production. Achieve 50% faster page loads and 40% better Core Web Vitals. Launch: An e-commerce site migrated to Next.js, boosting organic traffic by 35% in 3 months.",
      subServices: [
        { title: "Server-Side Rendering", description: "Render pages on the server for instant first paints, improving SEO and user experience across devices." },
        { title: "Static Site Generation", description: "Pre-render pages at build time for maximum speed and scalability, ideal for content-heavy sites." },
      ],
      capabilities: [
        { title: "API Routes", description: "Build backend endpoints within Next.js, simplifying architecture and reducing latency for data fetching." },
        { title: "Image Optimization", description: "Automatically optimize images with Next.js Image component, reducing payload sizes by 60% without quality loss." },
        { title: "Incremental Static Regeneration", description: "Update static pages without full rebuilds, balancing performance with freshness for dynamic content." },
      ],
      ctaHeading: "Launch Modern Web Apps",
      ctaText: "Build with Next.js in 6 weeks. Deliver blazing-fast, scalable, and SEO-optimized experiences that convert.",
      gradient: "from-background to-card/30",
    },
    {
      id: "internal-assistants",
      brand: "AssistantHub",
      title: "Internal AI Assistants",
      description: "Deploy conversational AI agents for employees—answering HR questions, looking up policies, and automating workflows. Reduce support tickets by 50% and improve employee satisfaction by 30%. Implementation: A global firm rolled out an HR bot, resolving 10K queries monthly.",
      subServices: [
        { title: "Knowledge Management", description: "Index internal wikis, documents, and FAQs, enabling instant, accurate answers to employee questions." },
        { title: "Task Automation", description: "Allow employees to trigger workflows—submit expenses, book meetings, request IT support—via chat commands." },
      ],
      capabilities: [
        { title: "Contextual Understanding", description: "Leverage NLU to handle follow-up questions, clarifications, and multi-turn conversations naturally." },
        { title: "Permissions & Security", description: "Respect role-based access controls, ensuring employees only see information they're authorized to access." },
        { title: "Analytics & Insights", description: "Track common queries and pain points, informing process improvements and training priorities." },
      ],
      ctaHeading: "Empower Your Workforce",
      ctaText: "Deploy internal assistants in 5 weeks. Free up support teams and give employees instant, accurate answers.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "data-analysis-bots",
      brand: "DataBot",
      title: "Data Analysis Bots",
      description: "Enable non-technical users to query databases and generate reports through natural language. Democratize data access, reducing analyst workload by 60% and accelerating decision-making by 40%. Case: A sales team built dashboards on-demand, eliminating 2-week BI backlogs.",
      subServices: [
        { title: "SQL Generation", description: "Convert natural language questions into SQL queries, abstracting database complexity from business users." },
        { title: "Automated Reporting", description: "Schedule and distribute reports via Slack or email, keeping stakeholders informed without manual effort." },
      ],
      capabilities: [
        { title: "Semantic Layer", description: "Map business terms to database schemas, ensuring consistent definitions and accurate results across queries." },
        { title: "Visualization", description: "Automatically generate charts and tables from query results, making insights immediately actionable." },
        { title: "Governance & Auditing", description: "Log all queries and data access for compliance, providing transparency and accountability." },
      ],
      ctaHeading: "Democratize Data Insights",
      ctaText: "Launch data bots in 4 weeks. Empower everyone to answer their own questions and make data-driven decisions.",
      gradient: "from-background to-card/30",
    },
    {
      id: "workflow-agents",
      brand: "AgentFlow",
      title: "Workflow AI Agents",
      description: "Orchestrate complex, multi-step workflows with autonomous AI agents that make decisions, invoke tools, and collaborate. Reduce process time by 70% and errors by 60%. Example: A procurement agent automated vendor selection, negotiation, and PO generation end-to-end.",
      subServices: [
        { title: "Agentic Planning", description: "Design agents that break down goals into tasks, reason about dependencies, and execute plans adaptively." },
        { title: "Tool Integration", description: "Connect agents to APIs, databases, and software, enabling them to retrieve data, perform actions, and update systems." },
      ],
      capabilities: [
        { title: "Multi-Agent Collaboration", description: "Coordinate multiple specialized agents—one for research, one for drafting, one for approval—to complete workflows." },
        { title: "Human-in-the-Loop", description: "Escalate ambiguous decisions to humans, ensuring oversight while automating routine steps." },
        { title: "Learning & Adaptation", description: "Improve agent performance over time through reinforcement learning and feedback loops." },
      ],
      ctaHeading: "Automate Complex Workflows",
      ctaText: "Deploy workflow agents in 6 weeks. Let AI handle end-to-end processes, freeing teams for strategic work.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "for-startups",
      brand: "StartupAlliance",
      title: "For Startups",
      description: "Accelerate product development and go-to-market with tailored AI tools, mentorship, and capital introductions. 80% of partner startups achieve product-market fit within 12 months. Partnership: A health-tech startup scaled from MVP to 10K users in 6 months with our support.",
      subServices: [
        { title: "Technical Advisory", description: "Access AI engineers and data scientists for architecture reviews, code audits, and best practice guidance." },
        { title: "Growth Hacking", description: "Leverage AI-driven marketing, referral programs, and viral loops to acquire customers cost-effectively." },
      ],
      capabilities: [
        { title: "Cloud Credits", description: "Provide AWS, GCP, or Azure credits to offset infrastructure costs during early growth stages." },
        { title: "Co-Marketing", description: "Feature startups in case studies, webinars, and events, amplifying reach and credibility." },
        { title: "Investor Network", description: "Connect with VCs, angels, and corporate investors actively seeking AI-driven startups." },
      ],
      ctaHeading: "Scale Your Startup Faster",
      ctaText: "Partner with us in 1 week. Gain resources, expertise, and connections to accelerate your path to scale.",
      gradient: "from-background to-card/30",
    },
    {
      id: "for-enterprises",
      brand: "EnterpriseEdge",
      title: "For Enterprises",
      description: "Transform at scale with end-to-end AI programs—from strategy to deployment to continuous optimization. Achieve 150%+ ROI and 50% reduction in operational costs within 24 months. Engagement: A global bank deployed AI across 15 functions, saving $50M annually.",
      subServices: [
        { title: "Center of Excellence", description: "Establish dedicated AI teams with clear mandates, governance, and resources to drive enterprise-wide initiatives." },
        { title: "Change Management", description: "Guide cultural transformation, upskilling thousands of employees and embedding AI into daily operations." },
      ],
      capabilities: [
        { title: "Enterprise Architecture", description: "Design scalable, secure AI platforms that integrate with existing IT landscapes and support hybrid cloud deployments." },
        { title: "Executive Reporting", description: "Deliver dashboards and KPIs that track AI maturity, ROI, and strategic alignment for C-suite visibility." },
        { title: "Risk & Compliance", description: "Ensure models meet regulatory standards, ethical guidelines, and internal policies across all jurisdictions." },
      ],
      ctaHeading: "Transform Your Enterprise",
      ctaText: "Engage in a 4-week discovery. Build a comprehensive AI program that delivers sustainable, measurable impact.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "ai-investment",
      brand: "VentureQuantum",
      title: "AI Investment & Venture Support",
      description: "Identify, evaluate, and support high-potential AI startups for investment and partnership. Our portfolio companies achieve 3x higher success rates and 40% faster time to Series A. Deal flow: We screened 500+ startups last year, investing in 12 with 5 exits in progress.",
      subServices: [
        { title: "Due Diligence", description: "Conduct technical and market assessments of AI startups, evaluating IP, team, and scalability." },
        { title: "Portfolio Support", description: "Provide ongoing advisory, customer introductions, and follow-on capital to accelerate growth." },
      ],
      capabilities: [
        { title: "Sector Expertise", description: "Specialize in fintech, healthcare, logistics, and SaaS—verticals where AI drives defensible moats." },
        { title: "Syndication Network", description: "Co-invest with leading VCs and corporate venture arms, sharing risk and expanding reach." },
        { title: "Exit Strategy", description: "Position portfolio companies for acquisitions or IPOs, maximizing returns for investors and founders." },
      ],
      ctaHeading: "Invest in AI Winners",
      ctaText: "Join our venture ecosystem in 2 weeks. Access curated deal flow and scale portfolio companies with AI expertise.",
      gradient: "from-background to-card/30",
    },
    {
      id: "ai-ecommerce",
      brand: "CommerceAI",
      title: "AI for E-Commerce",
      description: "Boost online sales with AI-powered search, recommendations, dynamic pricing, and fraud detection. Increase conversions by 35% and reduce cart abandonment by 25%. Success: A fashion retailer grew revenue by $8M annually after implementing personalized product recommendations.",
      subServices: [
        { title: "Product Discovery", description: "Enhance search with NLP and visual similarity, helping shoppers find products faster and more intuitively." },
        { title: "Dynamic Pricing", description: "Adjust prices in real-time based on demand, competition, and inventory, maximizing margin and velocity." },
      ],
      capabilities: [
        { title: "Recommendation Engines", description: "Deploy collaborative filtering and deep learning models to suggest products, bundles, and upsells." },
        { title: "Fraud Prevention", description: "Detect and block fraudulent transactions with ML models, reducing chargebacks by 60%." },
        { title: "Inventory Optimization", description: "Forecast demand and automate replenishment, minimizing stockouts and overstock by 30%." },
      ],
      ctaHeading: "Supercharge E-Commerce Sales",
      ctaText: "Deploy AI commerce tools in 5 weeks. Drive more conversions, increase AOV, and protect margins with intelligence.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "ai-healthcare",
      brand: "HealthAI",
      title: "AI for Healthcare",
      description: "Improve patient outcomes and operational efficiency with AI for diagnostics, treatment planning, and administrative automation. Reduce diagnosis time by 40% and operational costs by 30%. Implementation: A hospital network deployed radiology AI, improving detection rates by 20%.",
      subServices: [
        { title: "Clinical Decision Support", description: "Provide evidence-based recommendations at the point of care, aiding clinicians in diagnosis and treatment selection." },
        { title: "Administrative Automation", description: "Automate scheduling, billing, and claims processing, freeing staff to focus on patient care." },
      ],
      capabilities: [
        { title: "Medical Imaging AI", description: "Detect anomalies in X-rays, MRIs, and CT scans with convolutional neural networks, improving sensitivity and specificity." },
        { title: "Predictive Analytics", description: "Forecast patient readmissions, disease progression, and resource utilization to optimize care delivery." },
        { title: "NLP for EHR", description: "Extract structured data from clinical notes, enabling population health analytics and quality reporting." },
      ],
      ctaHeading: "Advance Healthcare With AI",
      ctaText: "Pilot healthcare AI in 8 weeks. Enhance diagnostics, streamline operations, and deliver better patient outcomes.",
      gradient: "from-background to-card/30",
    },
    {
      id: "ai-manufacturing",
      brand: "FactoryAI",
      title: "AI for Manufacturing",
      description: "Optimize production with predictive maintenance, quality control, and supply chain intelligence. Reduce downtime by 50%, defects by 40%, and costs by 25%. Case: An automotive plant deployed vision AI for defect detection, cutting rework by 35%.",
      subServices: [
        { title: "Predictive Maintenance", description: "Monitor equipment health with IoT sensors and ML, scheduling maintenance before failures occur and avoiding costly downtime." },
        { title: "Quality Inspection", description: "Automate visual inspection with computer vision, identifying defects faster and more consistently than manual checks." },
      ],
      capabilities: [
        { title: "Anomaly Detection", description: "Detect deviations in sensor data, flagging potential issues before they escalate into production stoppages." },
        { title: "Digital Twin", description: "Create virtual replicas of production lines, simulating changes and optimizing throughput without physical trials." },
        { title: "Supply Chain Optimization", description: "Forecast demand, optimize inventory, and coordinate logistics to minimize lead times and carrying costs." },
      ],
      ctaHeading: "Modernize Manufacturing Operations",
      ctaText: "Deploy manufacturing AI in 10 weeks. Cut waste, improve quality, and boost productivity across the factory floor.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "quantum-pocs",
      brand: "QuantumProofs",
      title: "Quantum-AI Proof of Concepts",
      description: "Validate quantum computing's potential for your use case with focused POCs. Test algorithms on real quantum hardware and assess feasibility, ROI, and timeline to production. POC outcome: A chemical company confirmed 20% simulation speedup, greenlighting a 12-month pilot.",
      subServices: [
        { title: "Use Case Identification", description: "Analyze your problems to determine where quantum computing offers tangible advantages over classical approaches." },
        { title: "Hardware Selection", description: "Choose the right quantum platform—IBM, Rigetti, IonQ, or D-Wave—based on your algorithm and error tolerance." },
      ],
      capabilities: [
        { title: "Algorithm Development", description: "Translate business problems into quantum circuits, optimizing for qubit count and gate depth." },
        { title: "Benchmarking", description: "Compare quantum vs. classical performance on identical tasks, quantifying speedups and cost tradeoffs." },
        { title: "Roadmap Planning", description: "Define next steps—scaling, integration, talent—to transition from POC to production deployment." },
      ],
      ctaHeading: "Prove Quantum Value",
      ctaText: "Run a quantum POC in 8 weeks. Validate business impact and chart a path to quantum-enhanced operations.",
      gradient: "from-background to-card/30",
    },
    {
      id: "automation-audit",
      brand: "AuditPro",
      title: "Automation Audit",
      description: "Assess your current processes, identify automation opportunities, and prioritize by ROI and feasibility. Uncover 30–50 automation candidates in a 2-week audit. Audit result: A logistics company found $3M in savings potential across 15 workflows.",
      subServices: [
        { title: "Process Mapping", description: "Document as-is workflows, capturing steps, handoffs, and pain points to reveal inefficiencies." },
        { title: "ROI Modeling", description: "Quantify time saved, cost reductions, and error reductions for each automation opportunity." },
      ],
      capabilities: [
        { title: "Stakeholder Interviews", description: "Engage teams across departments to surface hidden bottlenecks and gather domain knowledge." },
        { title: "Technology Fit Analysis", description: "Match processes to automation tools—RPA, AI, workflow engines—based on complexity and data availability." },
        { title: "Prioritization Framework", description: "Rank opportunities by business impact, technical difficulty, and strategic alignment to guide investment." },
      ],
      ctaHeading: "Discover Automation Potential",
      ctaText: "Book an automation audit in 1 week. Identify quick wins and strategic projects that deliver measurable ROI.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "implementation-strategy",
      brand: "StrategyWorks",
      title: "Implementation Strategy",
      description: "Develop detailed roadmaps for AI and automation initiatives, covering technology, talent, change management, and governance. Ensure 95% on-time, on-budget delivery. Roadmap: A healthcare system executed a 3-year AI plan, hitting all milestones and achieving 180% ROI.",
      subServices: [
        { title: "Architecture Design", description: "Define technical stack, data flows, and integration points to ensure scalable, maintainable solutions." },
        { title: "Resource Planning", description: "Identify skills gaps, staffing needs, and training programs to build internal AI capabilities." },
      ],
      capabilities: [
        { title: "Phased Rollout", description: "Break initiatives into stages—pilot, scale, optimize—minimizing risk and enabling iterative learning." },
        { title: "Risk Mitigation", description: "Anticipate technical, organizational, and regulatory risks, developing contingency plans for each." },
        { title: "KPI Definition", description: "Establish success metrics, baselines, and targets to track progress and demonstrate value." },
      ],
      ctaHeading: "Execute With Confidence",
      ctaText: "Engage in a 3-week strategy sprint. Walk away with a clear, actionable roadmap to deliver AI at scale.",
      gradient: "from-background to-card/30",
    },
    {
      id: "roi-optimization",
      brand: "ROI Accelerator",
      title: "ROI Optimization",
      description: "Continuously refine AI systems post-deployment to maximize business value, reduce costs, and scale usage. Achieve 200%+ ROI within 18 months through ongoing optimization. Engagement: A retailer doubled AI-driven revenue impact by fine-tuning models and expanding use cases.",
      subServices: [
        { title: "Performance Monitoring", description: "Track model accuracy, latency, and business KPIs in production, identifying degradation and opportunities." },
        { title: "Cost Management", description: "Optimize compute, storage, and API usage to reduce AI infrastructure costs by 40% without sacrificing quality." },
      ],
      capabilities: [
        { title: "A/B Testing", description: "Run controlled experiments to test model updates, features, and UX changes, rolling out winners at scale." },
        { title: "Model Retraining", description: "Automate retraining pipelines to incorporate new data, maintaining accuracy as business conditions evolve." },
        { title: "Expansion Roadmap", description: "Identify adjacent use cases and geographies for AI deployment, compounding value across the organization." },
      ],
      ctaHeading: "Maximize AI Returns",
      ctaText: "Engage for ongoing optimization in 2 weeks. Ensure your AI investments deliver compounding value year over year.",
      gradient: "from-card/30 to-background",
    },
    {
      id: "testimonials",
      brand: "ClientVoice",
      title: "Client Testimonials",
      description: "Hear from enterprises and startups who transformed their operations with our AI solutions. 95% client satisfaction and 90% repeat engagement rate. Testimonial: A Fortune 100 CFO stated, 'Their AI roadmap saved us $20M and positioned us as industry leaders in automation.'",
      subServices: [
        { title: "Video Case Studies", description: "Watch executives and team leads share their AI journey, challenges overcome, and results achieved." },
        { title: "Written Success Stories", description: "Read detailed narratives covering problem, solution, implementation, and quantified business outcomes." },
      ],
      capabilities: [
        { title: "Industry Diversity", description: "Testimonials span retail, finance, healthcare, manufacturing, and tech—proving AI value across sectors." },
        { title: "Role Perspectives", description: "Hear from C-suite, IT leaders, and end users on how AI impacted their roles and the organization." },
        { title: "Metrics & Results", description: "Every testimonial includes hard numbers—cost savings, efficiency gains, revenue growth—demonstrating impact." },
      ],
      ctaHeading: "See What Clients Say",
      ctaText: "Explore testimonials now. Discover how peers in your industry achieved breakthrough results with our AI solutions.",
      gradient: "from-background to-card/30",
    },
    {
      id: "contact",
      brand: "Quantum Innovations",
      title: "Partner Spotlights",
      description: "Meet our ecosystem of technology partners, investors, and academic institutions collaborating to push AI boundaries. Together, we've launched 200+ projects and raised $100M in funding. Spotlight: Our partnership with a top university yielded 3 patents and 2 spinoff ventures.",
      subServices: [
        { title: "Technology Partners", description: "Collaborate with leading cloud providers, software vendors, and hardware manufacturers to deliver integrated solutions." },
        { title: "Academic Collaborations", description: "Partner with research labs and universities for cutting-edge R&D, talent pipelines, and innovation challenges." },
      ],
      capabilities: [
        { title: "Co-Innovation Programs", description: "Joint development initiatives that combine our AI expertise with partners' domain knowledge and go-to-market reach." },
        { title: "Ecosystem Events", description: "Host hackathons, conferences, and workshops that convene partners, clients, and thought leaders." },
        { title: "Shared Resources", description: "Access partner labs, datasets, and infrastructure to accelerate prototyping and reduce time-to-market." },
      ],
      ctaHeading: "Join Our Ecosystem",
      ctaText: "Become a partner in 1 week. Collaborate on innovation, expand your market, and grow together through AI.",
      gradient: "from-card/30 to-background",
    },
  ];

  return (
    <div className="w-full">
      <Navbar activeBrand={activeBrand} />
      <main>
        {sections.map((section) => (
          <ServiceSection key={section.id} {...section} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
