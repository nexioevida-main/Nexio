const PlatformComparison = () => {
  const features = [
    {
      feature: "What matters",
      nexio: "Real work & impact",
      traditional: "Keywords & connections",
    },
    {
      feature: "Visibility",
      nexio: "Track in real-time",
      traditional: "Unknown black box",
    },
    {
      feature: "Employer response",
      nexio: "High-quality responses",
      traditional: "Apply into void",
    },
    {
      feature: "Matching",
      nexio: "Proof-based matches",
      traditional: "Manual job search",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-2">
          <span className="text-blue-500">Our Platform</span>
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
          Nexio vs Traditional Platforms
        </h2>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          Visibility is earned through capability and relevance.
        </p>

        <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 bg-gray-100 p-4 font-semibold">
            <div>Features</div>
            <div>
              <span className="text-blue-500">Nexio</span>
            </div>
            <div>Traditional Platforms</div>
          </div>

          {features.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 sm:grid-cols-3 p-4 ${
                index < features.length - 1 ? "border-b border-gray-200" : ""
              }`}
            >
              <div className="font-medium">{item.feature}</div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500 font-bold">✓</span>
                <span className="text-blue-500">{item.nexio}</span>
              </div>
              <div>{item.traditional}</div>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="block w-fit mx-auto bg-blue-500 text-white px-6 py-4 rounded-full font-medium hover:bg-blue-600 transition-colors"
        >
          Start Building Proof
        </a>
      </div>
    </section>
  );
};

export default PlatformComparison;
