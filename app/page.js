  import Image from "next/image";
  import Link from "next/link";

  export default function Home() {
    return (
      <>
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">AI Mock Interview</h1>
            <nav>
              <Link className="text-white hover:text-gray-200" href="/dashboard">
                Dashboard
              </Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto p-4">
          <section className="text-center my-10">
            <h2 className="text-4xl font-bold mb-4">
              Prepare for Your Dream Job
            </h2>
            <p className="text-lg mb-6">
              Practice mock interviews for any field using AI-based questioning,
              answers, feedback, and real environment simulation with camera and
              mic.
            </p>
            <Link
              href="/dashboard"
              className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
            >
              Start Your Mock Interview
            </Link>
          </section>

          <section className="my-10">
            <h3 className="text-2xl font-bold mb-4 text-center">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">AI-Based Questioning</h4>
                <p>Get questions tailored to your field and experience level.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">Real-Time Feedback</h4>
                <p>
                  Receive instant feedback on your answers to improve your
                  performance.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">
                  Camera & Mic Integration
                </h4>
                <p>
                  Simulate a real interview environment with camera and mic
                  support.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">Comprehensive Reports</h4>
                <p>
                  Get detailed reports on your performance and areas for
                  improvement.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">Multiple Fields</h4>
                <p>Practice interviews for various fields and job roles.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-2">
                  User-Friendly Interface
                </h4>
                <p>Enjoy a seamless and intuitive user experience.</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 text-white p-4 mt-10">
          <div className="container mx-auto text-center">
            <p>&copy; 2023 AI Mock Interview. All rights reserved.</p>
          </div>
        </footer>
      </>
    );
  }
