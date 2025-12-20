const Opportunities = () => {
  const opportunities = [
    {
      title: "Senior React Developer",
      urgent: true,
      company: "Techflow Inc",
      location: "Remote",
      type: "Full Time",
      salary: "₦3M-₦6M",
      tags: ["React", "TypeSetting", "GraphQL"],
      time: "2 hrs ago",
    },
    {
      title: "Product Designer",
      urgent: false,
      company: "DesignStudio",
      location: "Hybrid",
      type: "Contract",
      salary: "₦750k-₦1M",
      tags: ["Figma", "User Research", "Design System"],
      time: "1 hrs ago",
    },
    {
      title: "UI/UX Tutor",
      urgent: true,
      company: "Stangency",
      location: "Remote",
      type: "Contract",
      salary: "₦250k-₦500k",
      tags: ["Figma", "Design Principles", "Design AI"],
      time: "1 hrs ago",
    },
  ];

  return (
    <section className="py-16 sm:py-24" id="opportunities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              Ready for <span className="text-orange-500">Proven Talent</span>
            </h2>
            <p>
              Companies actively seeking verified professionals. Skip the queue.
            </p>
          </div>
          <a
            href="#job"
            className="bg-orange-500 text-white px-5 py-3 rounded-full font-medium whitespace-nowrap"
          >
            View all Jobs
          </a>
        </div>

        <div className="space-y-6" id="job">
          {opportunities.map((opp, index) => (
            <article
              key={index}
              className="bg-white rounded-lg p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-wrap"
            >
              <div className="flex-1 min-w-[250px]">
                <h3 className="text-xl font-bold mb-2">
                  {opp.title}
                  {opp.urgent && (
                    <span className="bg-yellow-400 text-gray-900 text-xs font-semibold px-2 py-1 rounded-full ml-3">
                      Urgent
                    </span>
                  )}
                </h3>

                <div className="flex items-center mb-2 text-gray-600">
                  <img
                    src="/frontend/assets/companybuilding.svg"
                    alt={opp.company}
                    className="w-5 h-5 mr-2"
                  />
                  {opp.company}
                </div>

                <div className="flex gap-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span>📍</span> {opp.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <span>🕒</span> {opp.type}
                  </div>
                </div>

                <div className="text-sm text-gray-600">{opp.salary}</div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
                {opp.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-100 px-3 py-1 rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
                >
                  Apply
                </a>
                <div className="text-sm text-gray-600">{opp.time}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
