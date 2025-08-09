import { useNavigate } from "react-router-dom";

export default function Feature4() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12 md:px-20 mt-20">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Enterprise-Grade Security
      </h1>

      {/* Image */}
      <div className="flex justify-center mb-10 mt-15 w-[900px] h-[500px] ml-60 ">
        <img
          src="https://images.pexels.com/photos/5380668/pexels-photo-5380668.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Enterprise Security"
          className="rounded-2xl shadow-lg w-full max-w-4xl"
        />
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-lg text-gray-300 mb-10 leading-relaxed">
        Your data is your most valuable asset — and we treat it that way. Our
        Enterprise-Grade Security ensures airtight protection at every layer,
        from encrypted data storage and transmission to continuous monitoring
        and advanced threat detection. Built for compliance and resilience, it
        safeguards your business from today's most complex cyber threats.
      </div>

      {/* Key Benefits */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Benefits:</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li> End-to-end encryption & secure data access</li>
          <li> 24/7 monitoring & threat detection</li>
          <li> Compliance with industry standards (ISO, GDPR, HIPAA)</li>
          <li> Multi-factor authentication and user access controls</li>
          <li> Real-time backup & disaster recovery systems</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 mb-10">
        <h3 className="text-3xl font-bold mb-4">Protect What Matters Most</h3>
        <button
          onClick={() => alert("Security audit demo coming soon!")}
          className="bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full text-lg font-semibold"
        >
          Request Security Audit
        </button>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/features/feature-3")}
          className=" hover:bg-amber-600 font-bold bg-yellow-400 p-3 rounded-4xl text-black duration-300 ease-in-out delay-150 "
        >
          ← Previous: Predictive Analytics
        </button>

        <button
          onClick={() => navigate("/features")}
          className=" hover:bg-amber-600 font-bold bg-yellow-400 p-3 rounded-4xl text-black duration-300 ease-in-out delay-150 "
        >
          Back to All Features ↑
        </button>
      </div>
    </div>
  );
}
