import { useNavigate } from "react-router-dom";

export default function Feature2() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12 md:px-20 mt-20">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Real-Time Insights
      </h1>

      {/* Image */}
      <div className="flex justify-center mb-10 mt-15 w-[900px] h-[500px] ml-60">
        <img
          src="https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Real-Time Insights"
          className="rounded-2xl shadow-lg w-full max-w-4xl"
        />
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-lg text-gray-300 mb-10 leading-relaxed">
        Real-Time Insights provide up-to-the-second analytics across all your
        systems. Track performance, monitor KPIs, and uncover trends as they
        happen — not hours later. Our live dashboards and intelligent alerting
        ensure you never miss a beat, empowering your team to act instantly and
        decisively.
      </div>

      {/* Key Benefits */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Benefits:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li> Live analytics and performance metrics</li>
          <li> Customizable real-time dashboards</li>
          <li> Smart alerts to catch anomalies early</li>
          <li> 360° visibility across systems and teams</li>
          <li> Enables instant decision-making</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 mb-10">
        <h3 className="text-3xl font-bold mb-4">See Live Metrics in Action</h3>
        <button
          onClick={() => alert("Live dashboard coming soon!")}
          className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-full text-lg font-semibold"
        >
          View Dashboard Demo
        </button>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/features/feature-1")}
          className=" hover:bg-amber-600 font-bold bg-yellow-400 p-3 rounded-4xl text-black duration-300 ease-in-out delay-150 "
        >
          ← Previous: Smart Automation
        </button>

        <button
          onClick={() => navigate("/features/feature-3")}
          className=" hover:bg-amber-600 font-bold bg-yellow-400 p-3 rounded-4xl text-black duration-300 ease-in-out delay-150 "
        >
          Next: Predictive Analytics →
        </button>
      </div>
    </div>
  );
}
