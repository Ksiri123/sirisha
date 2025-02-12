import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="animate-fade-up">
          {/* Hero Section */}
          <section className="bg-primary-light py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  IIT Labs Private Limited Careers
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  IIT Labs provides exciting career opportunities for
                  professionals in the fields of IT, Software Development,
                  Consulting, and Administration. We are committed to building
                  successful careers by hiring the best talent and fostering a
                  dynamic work environment.
                </p>
              </div>
            </div>
          </section>

          {/* Job Roles Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Job Roles at IIT Labs:
                  </h2>
                  <p className="text-gray-600 mb-4">We offer positions in:</p>
                  <p>✅ IT & Cloud Services (AWS, DevOps, Cybersecurity)</p>
                  <p>✅ Software Development (Java, Python, Web Development, Mobile Apps)</p>
                  <p>✅ Consulting & Business Solutions (Project Management, Client Solutions)</p>
                  <p>✅ Administrative & Support Roles</p>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/care.jpg"
                    alt="Team"
                    className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Internship Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"> 
            {/* ADDED mb-16 TO CREATE SPACE ABOVE FOOTER */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Internship & Training Programs
                </h2>
                <p className="text-gray-600 mb-4">
                  IIT Labs also provides internships and training programs for
                  fresh graduates and students, helping them gain industry
                  exposure and develop technical expertise.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How to apply?
                </h2>
                <p className="text-gray-600 mb-4">
                  IIT Labs provides exciting career opportunities for
                  professionals in the fields of IT, Software Development,
                  Consulting, and Administration. We are committed to building
                  successful careers by hiring the best talent and fostering a
                  dynamic work environment.
                </p>
                <p>For information related to hiring, please contact:</p>
                <strong>📩 Andrew@iitlabs.com</strong>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NotFound;
