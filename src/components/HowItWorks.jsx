const HowItWorks = () => {
  const steps = [
    {
      icon: "/frontend/assets/badge.svg",
      title: "Build Your Proof",
      description:
        "Add real projects with measurable outcomes. Show what you've built, not what you claim.",
    },
    {
      icon: "/frontend/assets/eye.svg",
      title: "Gain Visibility",
      description:
        "Your verified profile gets surfaced to employers actively seeking your exact skill set.",
    },
    {
      icon: "/frontend/assets/mynaui_target.svg",
      title: "Connect Directly",
      description:
        "Express interest in matched opportunities. No applying into black holes—get real responses.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 text-center" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-2">
          <span className="text-blue-500">How It Works</span>
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
          Your Path to <span className="text-blue-500">Selection</span>
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          A streamlined process designed to put your capabilities front and
          center
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm w-full max-w-md text-left"
            >
              <div className="w-10 h-10 flex items-center justify-center mb-4">
                <img
                  src={step.icon}
                  alt={`${step.title} icon`}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
