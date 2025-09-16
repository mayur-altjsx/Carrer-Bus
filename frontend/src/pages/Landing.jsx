import { GraduationCap, Users, Brain, ArrowRight, CheckCircle, Star, BookOpen, Target, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom"; // Add this import

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Find Your Perfect
              <span className="text-purple-600 block">Career Path</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
              Get personalized course recommendations, connect with expert advisors, and discover your ideal career through AI-powered assessments.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <Link 
                to="/signup/student" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[48px]"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link 
                to="/login/student" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-xl font-semibold text-base sm:text-lg transition-all min-h-[48px]"
              >
                Take Assessment
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements - Hidden on mobile for cleaner look */}
        <div className="hidden md:block absolute top-20 left-10 animate-bounce">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
            <BookOpen className="h-8 w-8 text-purple-600" />
          </div>
        </div>
        <div className="hidden md:block absolute top-32 right-16 animate-pulse">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
            <Target className="h-10 w-10 text-blue-600" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Why Choose Our Platform?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
              Everything you need to make informed decisions about your future
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* AI Assessment */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Brain className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">AI-Powered Assessment</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Take our intelligent assessment test and get personalized recommendations for your top 3 career paths based on your interests and skills.
              </p>
              <div className="flex items-center justify-center text-purple-600 font-semibold text-sm sm:text-base">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Instant Results
              </div>
            </div>

            {/* Expert Advisors */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Users className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Expert Advisors</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Connect with experienced career advisors who can provide personalized guidance and answer all your questions about courses and careers.
              </p>
              <div className="flex items-center justify-center text-blue-600 font-semibold text-sm sm:text-base">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                1-on-1 Guidance
              </div>
            </div>

            {/* Course Database */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <GraduationCap className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Comprehensive Database</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Access detailed information about courses, colleges, career paths, and requirements to make well-informed decisions about your future.
              </p>
              <div className="flex items-center justify-center text-green-600 font-semibold text-sm sm:text-base">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                Extensive Resources
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              What Students Say
            </h2>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Priya Sharma",
                role: "Engineering Student",
                content: "The AI assessment helped me discover my passion for computer science. The advisor guidance was invaluable!",
                rating: 5
              },
              {
                name: "Rahul Patel",
                role: "Commerce Student", 
                content: "Found the perfect MBA program through their recommendations. The platform made my decision so much easier.",
                rating: 5
              },
              {
                name: "Ananya Singh",
                role: "Medical Aspirant",
                content: "Connected with an amazing advisor who guided me through the NEET preparation strategy. Highly recommend!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 italic text-sm sm:text-base leading-relaxed">"{testimonial.content}"</p>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                <div className="text-purple-600 text-xs sm:text-sm">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
            Ready to Shape Your Future?
          </h2>
          <p className="text-lg sm:text-xl text-purple-100 mb-6 sm:mb-8 px-2">
            Join thousands of students who have found their perfect career path with our guidance.
          </p>
          <Link 
            to="/signup/student" 
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 hover:bg-gray-100 rounded-xl font-semibold text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg min-h-[48px]"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400" />
              <span className="text-lg sm:text-xl font-bold text-center">Course & Career Advisor</span>
            </div>
            <div className="text-gray-400 text-sm sm:text-base text-center">
              © 2025 Career Bus. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;