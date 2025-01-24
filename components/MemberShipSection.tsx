const MembershipPartnership = () => {
    return (
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            Membership & Partnership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-center">
            {/* NSDC Logo */}
            <div className="flex justify-center items-center">
              <img
                src="/ugc.gif"
                alt="NSDC Logo"
                className="h-28 w-auto transition-transform transform hover:scale-110 shadow-lg rounded-lg bg-white p-4"
              />
            </div>
            {/* Glocal University Logo */}
            <div className="flex justify-center items-center">
              <img
                src="/The_Glocal_University-_Logo.png"
                alt="Glocal University Logo"
                className="h-28 w-auto transition-transform transform hover:scale-110 shadow-lg rounded-lg bg-white p-4"
              />
            </div>
            {/* Skill India Logo */}
            <div className="flex justify-center items-center">
              <img
                src="/skill india.jpeg"
                alt="Skill India Logo"
                className="h-28 w-auto transition-transform transform hover:scale-110 shadow-lg rounded-lg bg-white p-4"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default MembershipPartnership;
  