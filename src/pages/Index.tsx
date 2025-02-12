import { ArrowRight, Briefcase, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="animate-fade-up">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-r from-primary to-secondary min-h-[600px] flex items-center"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join Us in Shaping <span className="text-primary-light">the Future!</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We help businesses transform through innovative technology solutions
              and expert consulting.
            </p>
            <Link
              to="/careers"
              className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-md hover:bg-primary-light transition-colors"
            >
              Explore Careers
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Highlights Section */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose IIT Labs Private Limited Company?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  {highlight.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {highlight.title}
                  </h3>
                </div>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-red-100 p-6 shadow-md rounded-lg"
              >
                <p className="text-gray-500 text-lg">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const highlights = [
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Expert Team",
    description:
      "Our team of seasoned professionals brings years of industry experience and technical expertise. We drive innovation through cutting-edge research and collaboration to create next-generation solutions.We continuously invest in upskilling our team, ensuring they stay ahead of emerging technologies. By fostering a culture of continuous learning and knowledge sharing, we empower our experts to deliver robust, scalable, and efficient solutions that drive business growth and digital transformation.",
     
    },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Collaborative Culture",
    description:
      "We foster an environment of innovation, learning, and growth through teamwork. Our expert team works together to develop cutting-edge solutions, fostering an inclusive and knowledge-driven environment.By embracing an inclusive and knowledge-driven culture, we encourage open communication, cross-functional collaboration, and continuous learning. Regular brainstorming sessions, knowledge-sharing workshops, and mentorship programs empower our employees to excel and innovate together. This synergy allows us to tackle complex challenges effectively and deliver impactful solutions that transform industries.",
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "Proven Results",
    description:
      "Our success is defined by impactful projects across AI, computing, and enterprise solutions. We consistently deliver high-quality, results-driven solutions that optimize business processes and drive efficiency.With a strong focus on data-driven decision-making, automation, and scalability, our solutions are designed to meet the evolving needs of industries. We collaborate with global partners, leverage the latest technologies, and continuously refine our strategies to ensure measurable success for our clients.",
  },
];

const stats = [
  { label: "Clients Served", value: "35+" },
  { label: "Employee Strength", value: "400+" },
  { label: "Core Skills", value: "15+" },
];

export default Home;
