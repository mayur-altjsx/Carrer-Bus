import React from 'react';

const AfterTestInfo = () => {
  const handleGoHome = () => {
    window.location.href = '/home';
  };

  const handleCloseTab = () => {
    window.close();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-purple-100">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-4 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Test Completed Successfully!</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-blue-900 mb-3">What Happens Next?</h2>
                  <p className="text-blue-800 leading-relaxed mb-4">
                    Your test responses are now being processed by our advanced AI analysis system. Our intelligent algorithms will carefully evaluate your answers to provide you with personalized insights and recommendations.
                  </p>
                  <p className="text-blue-800 leading-relaxed">
                    You can expect to receive detailed results and feedback directly to your registered email address within the next 10-15 minutes. The analysis will include your performance breakdown, areas of strength, and suggestions for improvement.
                  </p>
                </div>
              </div>
            </div>

            {/* Email Notification Info */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Email Results</h3>
                  <p className="text-purple-800 leading-relaxed">
                    Keep an eye on your inbox (including spam folder) for a comprehensive report containing your test results, personalized recommendations, and next steps for your academic journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-gray-100">
            <button
              onClick={handleGoHome}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span>Go Back to Home</span>
            </button>
            
            <button
              onClick={handleCloseTab}
              className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold text-lg hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2 border border-gray-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span>Close This Tab</span>
            </button>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Thank you for completing the assessment. We're excited to help you on your learning journey! 🎓
          </p>
        </div>
      </div>
    </div>
  );
};

export default AfterTestInfo;