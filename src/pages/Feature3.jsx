import { useNavigate } from "react-router-dom";

export default function Feature3() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12 md:px-20 mt-20">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        🔮 Predictive Analytics
      </h1>

      {/* Image */}
      <div className="flex justify-center mb-10 mt-15">
        <img
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Predictive Analytics"
          className="rounded-2xl shadow-lg w-full max-w-4xl"
        />
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-lg text-gray-300 mb-10 leading-relaxed">
        Predictive Analytics empowers you to see the future with data. Using
        machine learning and statistical models, we analyze historical patterns
        to forecast future outcomes—helping you anticipate demand, avoid risks,
        and seize opportunities before they arise. Get ahead of the curve and
        transform your strategy with foresight-driven insights.
      </div>

      {/* Key Benefits */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Benefits:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li> Forecast trends and market shifts</li>
          <li> AI-powered decision support</li>
          <li> Better risk and resource planning</li>
          <li> Inventory and supply chain optimization</li>
          <li> Improved ROI through data-backed strategies</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 mb-10">
        <h3 className="text-3xl font-bold mb-4">Predict What Happens Next</h3>
        <button
          onClick={() => alert("Predictive demo coming soon!")}
          className="bg-violet-600 hover:bg-violet-700 transition px-6 py-3 rounded-full text-lg font-semibold"
        >
          Try Forecast Demo
        </button>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/features/feature-2")}
          className=" hover:bg-amber-600 font-bold bg-yellow-400 p-3 rounded-4xl text-black duration-300 ease-in-out delay-150 "
        >
          ← Previous: Real-Time Insights
        </button>

        <button
          onClick={() => navigate("/features/feature-4")}
          className=" hover:bg-amber-600 font-bold bg-yellow-400 p-3 rounded-4xl text-black duration-300 ease-in-out delay-150 "
        >
          Next: Enterprise-Grade Security →
        </button>
      </div>
    </div>
  );
}
