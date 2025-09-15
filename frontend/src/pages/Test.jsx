import React, { useState, useEffect } from 'react';

const TestRoute = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [student, setStudent] = useState(null);
  const [redirecting, setRedirecting] = useState(false);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          setError('Please login to access the test.');
          setLoading(false);
          return;
        }

        // Add token to request headers
        const response = await fetch('https://sih-73ja.onrender.com/api/auth/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch student data');
        }

        const studentData = await response.json();
        setStudent(studentData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching student data:', err);
        setError('Failed to fetch student information. Please try again.');
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  const extractGrade = (studyingIn) => {
    if (!studyingIn) return null;
    
    // Extract grade number from strings like "Grade 10", "10th Grade", "Class 12", etc.
    const gradeMatch = studyingIn.match(/(\d+)/);
    return gradeMatch ? parseInt(gradeMatch[1]) : null;
  };

  const handleTestAccess = () => {
    if (!student) return;

    const grade = extractGrade(student.studyingIn);
    
    if (grade === null) {
      setError('Unable to determine your grade. Please contact support.');
      return;
    }

    setRedirecting(true);

    if (grade >= 10 && grade !== 12) {
      // Grade 10, 11, or higher (except 12)
      setTimeout(() => {
        window.open('https://forms.gle/dnPM4CjZcBiu37q59', '_blank');
        setRedirecting(false);
      }, 1000);
    } else if (grade === 12) {
      // Grade 12
      setTimeout(() => {
        window.open('https://forms.gle/4S1kxw7rAd3Q8Edr8', '_blank');
        setRedirecting(false);
      }, 1000);
    }
  };

  const handleTestDone = () => {
    window.location.href = '/after-test-info';
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
              <span className="text-lg text-gray-700">Loading your information...</span>
            </div>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-50 to-pink-100">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
            <div className="mb-4">
              <svg className="mx-auto h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Access Error</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.href = '/login/student'}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Go to Login
            </button>
          </div>
        </div>
      );
    }

    if (!student) return null;

    const grade = extractGrade(student.studyingIn);
    
    if (grade < 10) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
            <div className="mb-4">
              <svg className="mx-auto h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Test Not Available</h2>
            <p className="text-gray-600 mb-4">
              Sorry, tests are not available for students below grade 10.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Current Grade: {student.studyingIn}
            </p>
            <button 
              onClick={() => window.history.back()}
              className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md text-center">
          <div className="mb-6">
            <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Test Access Approved!</h1>
          <p className="text-gray-600 mb-4">
            Welcome, {student.firstName} {student.lastName}
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Grade: {student.studyingIn}
          </p>

          {redirecting ? (
            <div className="flex items-center justify-center space-x-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
              <span className="text-green-700">Redirecting to test...</span>
            </div>
          ) : (
            <button 
              onClick={handleTestAccess}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
            >
              Start Test
            </button>
          )}
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Test Information</h3>
            <p className="text-sm text-blue-700">
              {grade === 12 ? 
                'You will be redirected to the Grade 12 specialized test.' : 
                'You will be redirected to the standard test for your grade level.'
              }
            </p>
          </div>
        </div>

        {/* Test Done Button - Bottom Left */}
        <button 
          onClick={handleTestDone}
          className="fixed bottom-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg text-sm font-medium z-10"
        >
          Click here once your test is done
        </button>
      </div>
    );
  };

  return renderContent();
};

export default TestRoute;