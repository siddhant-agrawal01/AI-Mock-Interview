// import AddNewInterview from "./_components/AddNewInterview";
// import InterviewList from "./_components/InterviewList";

// export default function Dashboard() {
//   return (
//     <div className="bg-white dark:bg-gray-900 min-h-screen w-full pb-10">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="font-bold text-2xl text-gray-900 dark:text-white">
//           Dashboard
//         </h2>
//         <h2 className="text-gray-500 dark:text-gray-400 mb-6">
//           Create and Start your AI mockup Interview
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
//           <AddNewInterview />
//         </div>

//         <div className="w-full">
//           <InterviewList />
//         </div>
//       </div>
//     </div>
//   );
// }
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Dashboard
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Create and manage your AI-powered mock interviews
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Add New Interview Section */}
          <section className=" dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Start New Interview
              </h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Quick Setup
              </span>
            </div>
            <div className="max-w-xl shadow-lg bg-blue-100">
              <AddNewInterview />
            </div>
          </section>

          {/* Interview List Section */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Your Interviews
            </h3>
            <div className="overflow-x-auto">
              <InterviewList />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}