import React from 'react';

const UnderConstruction: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🚧 Under Construction
        </h1>
        <p className="text-gray-600">
         Hi, welcome to Dianne&apos;s website! We&apos;re currently working on this page. Please check back soon!
         In the meanwhile, check out the <a
           href="https://github.com/dfayesantos/my-portfolio"
           target="_blank"
           rel="noopener noreferrer"
           className="text-indigo-600 hover:underline"
         >GitHub repository</a> for this site.
        </p>
      </div>
    </main>
  );
};

export default UnderConstruction;
