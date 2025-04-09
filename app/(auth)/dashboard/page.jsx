import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";

export default function Dashboard() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen w-full pb-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bold text-2xl text-gray-900 dark:text-white">
          Dashboard
        </h2>
        <h2 className="text-gray-500 dark:text-gray-400 mb-6">
          Create and Start your AI mockup Interview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <AddNewInterview />
        </div>

        <div className="w-full">
          <InterviewList />
        </div>
      </div>
    </div>
  );
}
