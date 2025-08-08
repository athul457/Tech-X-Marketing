import { useNavigate } from "react-router-dom";

export default function Feature1() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12 md:px-20 mt-20">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 ">
        Smart Automation
      </h1>

      {/* Image */}
      <div className="flex justify-center mb-10 mt-15 w-[900px] h-[500px] ml-60">
        <img
          src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Smart Automation"
          className="rounded-2xl shadow-lg w-full max-w-4xl opacity-80 hover:opacity-100 duration-300 p-2 ease-in-out delay-200"
        />
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-lg text-gray-300 mb-10 leading-relaxed">
        Smart Automation uses artificial intelligence to streamline your most
        repetitive workflows. Build powerful automations with our intuitive
        no-code rule builder and integrate them directly with your favorite
        tools like Slack, Trello, and Google Workspace. Save time, reduce human
        error, and boost productivity by allowing your systems to work smarter —
        not harder.
      </div>

      {/* Key Benefits */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Benefits:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>No-code automation builder</li>
          <li>Integrates with Slack, Trello, Google Workspace, and more</li>
          <li>Reduces manual tasks and boosts productivity</li>
          <li>Enhances accuracy and efficiency with AI</li>
          <li>Learns and improves over time</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 mb-10">
        <h3 className="text-3xl font-bold mb-4">Ready to Automate Smarter?</h3>
        <button
          onClick={() => alert("Demo coming soon!")}
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full text-lg font-semibold"
        >
          Request a Demo
        </button>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/features")}
          className=" hover:bg-amber-600 font-bold bg-yellow-400 p-3 rounded-4xl text-black duration-300 ease-in-out delay-150 "
        >
          ← Back to All Features
        </button>

        <button
          onClick={() => navigate("/features/feature-2")}
          className=" hover:bg-amber-600 font-bold bg-yellow-400 p-3 rounded-4xl text-black duration-300 ease-in-out delay-150 "
        >
          Next: Real-Time Insights →
        </button>
      </div>
    </div>
  );
}
