import { useNavigate } from "react-router-dom";
export default function Feature1() {
  const naviGate = useNavigate();
  const features = [
    {
      id: 1,
      title: "Smart Automation",
      description:
        "Automate your most repetitive workflows with AI. Easily integrate with tools like Slack, Trello, and Google Workspace using a no-code rule builder.",
      image:
        "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1200",
      route: "/features/feature-1",
    },
    {
      id: 2,
      title: "Real-Time Insights",
      description:
        "Live dashboards and instant alerts to track key metrics in real-time. Customize your view and make data-driven decisions instantly.",
      image:
        "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200",
      route: "/features/feature-2",
    },
    {
      id: 3,
      title: "Predictive Analytics",
      description:
        "Use AI-powered forecasting tools to predict churn, trends, and critical issues before they happen. Plan ahead with confidence.",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
      route: "/features/feature-3",
    },
    {
      id: 4,
      title: "Enterprise-Grade Security",
      description:
        "Protect your data with role-based access, encryption, and audit trails. Built for GDPR compliance and enterprise security standards.",
      image:
        "https://images.pexels.com/photos/5380668/pexels-photo-5380668.jpeg?auto=compress&cs=tinysrgb&w=1200",
      route: "/features/feature-4",
    },
  ];

  return (
    <div className="w-screen min-h-screen p-10  flex flex-col items-center justify-center mt-18 bg-gray-300">
      <h1 className="text-3xl font-bold capitalize text-blue-600">
        These are our main features
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-15 place-items-center mt-15 ">
        {features.map((feature) => (
          <List key={feature.id} feature={feature} naviGate={naviGate} />
        ))}
      </div>
    </div>
  );
}

function List({ feature, naviGate }) {
  return (
    <div className="bg-white flex flex-col items-center justify-center rounded-xl shadow-lg p-4 w-[500px] h-[450px] opacity-80 hover:opacity-100 duration-300 delay-200 ease-in-out hover:shadow-lg hover:shadow-gray-900 text-justify">
      <div className="text-2xl font-semibold text-gray-800 mb-2 ">
        {feature.title}
      </div>

      <div className=" text-gray-700 rounded-md p-3 mb-4">
        {feature.description}
      </div>

      <div className="w-full h-[200px] overflow-hidden rounded-md mb-4">
        <img
          src={feature.image}
          alt={feature.title}
          className="w-full h-full object-cover"
        />
      </div>

      <button
        className="bg-yellow-400 text-white py-2 px-4 rounded hover:bg-yellow-600 opacity-100"
        onClick={() => naviGate(feature.route)}
      >
        More
      </button>
    </div>
  );
}
