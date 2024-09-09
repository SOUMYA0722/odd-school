import React from 'react';
import Head from 'next/head';

const TransitionPlatform = ({ data }) => {
  return (
    <div>
      <Head>
        <title>School Trans Platform</title>
        <meta
          name="description"
          content="Guidelines, best practices, and resources for schools transitioning from odd to standard structures."
        />
      </Head>
      <main className="bg-violet-100 min-h-screen">
        {/* Header */}
        <header className="bg-violet-700 py-8 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white">School Transition Platform</h1>
            <p className="text-xl text-white mt-2">
              Guidelines, best practices, and resources for schools transitioning from odd to standard structures.
            </p>
          </div>
        </header>

        {/* Section 1: Infrastructure Planning */}
        <section className="bg-violet-200 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Infrastructure Planning</h2>
            <ul className="space-y-6">
              {data.infrastructurePlanning.map((item, index) => (
                <li key={index} className="bg-white p-6 shadow-md rounded-md">
                  <h3 className="text-2xl font-semibold text-violet-700">{item.title}</h3>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                  <a
                    href={item.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-800 transition"
                  >
                    Download PDF
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 2: Grade Reconfiguration */}
        <section className="bg-violet-100 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Grade Reconfiguration</h2>
            <ul className="space-y-6">
              {data.gradeReconfiguration.map((item, index) => (
                <li key={index} className="bg-white p-6 shadow-md rounded-md">
                  <h3 className="text-2xl font-semibold text-violet-700">{item.title}</h3>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                  <a
                    href={item.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-800 transition"
                  >
                    Download PDF
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 3: Community Engagement */}
        <section className="bg-violet-200 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Community Engagement Strategies</h2>
            <ul className="space-y-6">
              {data.communityEngagement.map((item, index) => (
                <li key={index} className="bg-white p-6 shadow-md rounded-md">
                  <h3 className="text-2xl font-semibold text-violet-700">{item.title}</h3>
                  <p className="text-gray-700 mt-2">{item.description}</p>
                  <a
                    href={item.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-800 transition"
                  >
                    Download PDF
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-violet-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          © 2024 School Transition Platform. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export async function getStaticProps() {
  const data = {
    infrastructurePlanning: [
      {
        title: 'Classroom Design Optimization',
        description: 'Guidelines for optimizing classroom layouts to support new standards.',
        pdfLink: 'https://samagra.education.gov.in/docs/ss_implementation.pdf', // Link to PDF
      },
      {
        title: 'Facility Modernization',
        description: 'Best practices for upgrading facilities during the transition.',
        pdfLink: '/pdfs/facility_modernization.pdf', // Link to PDF
      },
    ],
    gradeReconfiguration: [
      {
        title: 'Grade Clustering Techniques',
        description: 'How to efficiently reconfigure grades to match standard structures.',
        pdfLink: '/pdfs/grade_clustering.pdf', // Link to PDF
      },
      {
        title: 'Teacher Allocation and Training',
        description: 'Strategies for reallocating teachers and providing necessary training.',
        pdfLink: '/pdfs/teacher_allocation.pdf', // Link to PDF
      },
    ],
    communityEngagement: [
      {
        title: 'Parent and Student Workshops',
        description: 'Engaging the community with informative workshops and open discussions.',
        pdfLink: '/pdfs/parent_student_workshops.pdf', // Link to PDF
      },
      {
        title: 'School-Community Partnerships',
        description: 'Building partnerships with local organizations to support the transition.',
        pdfLink: '/pdfs/school_community_partnerships.pdf', // Link to PDF
      },
    ],
  };

  return {
    props: {
      data,
    },
  };
}

export default TransitionPlatform;
