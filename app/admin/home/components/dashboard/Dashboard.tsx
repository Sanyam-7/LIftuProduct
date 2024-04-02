import React from "react";
import Image from "next/image";

export default function Dashboard() {
  return (
    <main className="container mx-auto px-4 py-8 flex-grow">
      <div className="flex flex-col items-center justify-center mt-10 sm:mt-16">
        <h1 className="text-2xl sm:text-4xl font-sans font-medium text-neutral-500">
          <span className="text-2xl sm:text-4xl font-sans font-medium bg-gradient-to-r from-[#F2CA91] to-[#F67678] bg-clip-text text-transparent">
            Hello, Username
          </span>
          <br />
          How can I help you today?
        </h1>
      </div>
      <div className="w-5/12 grid grid-cols-2 gap-4 mt-10 mx-auto">
        <div className="w-full h-36 bg-zinc-900 shadow-md rounded-lg p-4 flex items-center justify-center">
          <button className="flex flex-col sm:flex-row justify-center items-center">
            <Image
              src="/images/create-assessment-img.png"
              alt="Create Assessment"
              width={48}
              height={48}
              className="mb-2 sm:mb-0 sm:mr-2"
            />
            <h3 className="text-lg font-bold text-center sm:text-left">
              Create an assessment
            </h3>
          </button>
        </div>
        <div className="w-full h-36 bg-zinc-900 shadow-md rounded-lg p-4 flex items-center justify-center">
          <button className="flex flex-col sm:flex-row justify-center items-center">
            <Image
              src="/images/view-assessment-img.png"
              alt="View Assessments"
              width={48}
              height={48}
              className="mb-2 sm:mb-0 sm:mr-2"
            />
            <h3 className="text-lg font-bold text-center sm:text-left">
              View Assessments
            </h3>
          </button>
        </div>
        <div className="w-full h-36 bg-zinc-900 shadow-md rounded-lg p-4 flex items-center justify-center">
          <button className="flex flex-col sm:flex-row justify-center items-center">
            <Image
              src="/images/view-students-img.png"
              alt="View Students"
              width={48}
              height={48}
              className="mb-2 sm:mb-0 sm:mr-2"
            />
            <h3 className="text-lg font-bold text-center sm:text-left">
              View Students
            </h3>
          </button>
        </div>
        <div className="w-full h-36 bg-zinc-900 shadow-md rounded-lg p-4 flex items-center justify-center">
          <button className="flex flex-col sm:flex-row justify-center items-center">
            <Image
              src="/images/view-reports-img.png"
              alt="View Reports"
              width={48}
              height={48}
              className="mb-2 sm:mb-0 sm:mr-2"
            />
            <h3 className="text-lg font-bold text-center sm:text-left">
              View Reports
            </h3>
          </button>
        </div>
      </div>
    </main>
  );
}
