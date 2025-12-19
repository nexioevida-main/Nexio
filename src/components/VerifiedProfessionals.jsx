const VerifiedProfessionals = () => {
  const professionals = [
    {
      avatar: "/frontend/assets/clifford.svg",
      name: "Clifford Bigred",
      role: "Product designer",
      project: "Redesigned checkout flow +34% conversion rate",
      matches: 18,
      callbacks: 14,
    },
    {
      avatar: "/frontend/assets/tiwalade.svg",
      name: "Tiwalade Christain",
      role: "Software Engineer",
      project: "Built API serving 10M+ request per day",
      matches: 12,
      callbacks: 7,
    },
    {
      avatar: "/frontend/assets/chisom.svg",
      name: "Chisom Frank",
      role: "Marketing Lead",
      project: "Campaign that generated $2M in revenue",
      matches: 9,
      callbacks: 4,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-100" id="verified-pros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-2">
          <span className="text-blue-500">Real Proof, Real Results</span>
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
          Verified <span className="text-blue-500">Professionals</span>
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Hand-picked talent with proven skills ready for their next opportunity
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {professionals.map((prof, index) => (
            <article key={index} className="bg-white rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img
                    src={prof.avatar}
                    alt={prof.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{prof.name}</div>
                  <div className="text-sm text-gray-600">{prof.role}</div>
                </div>
              </div>

              <div className="bg-blue-50 p-3 rounded mb-4 flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src="/frontend/assets/badge.svg"
                    alt="badge"
                    className="w-6 h-6 mr-2"
                  />
                  <span className="text-sm font-medium">{prof.project}</span>
                </div>
                <span>→</span>
              </div>

              <div className="flex justify-between text-sm">
                <div className="text-center">
                  <div className="font-bold text-blue-500">{prof.matches}</div>
                  <div>matches</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-blue-500">
                    {prof.callbacks}
                  </div>
                  <div>callbacks</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerifiedProfessionals;
