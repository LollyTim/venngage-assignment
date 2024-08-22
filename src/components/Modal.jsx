export const Modal = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Resume Saved</h2>
      <a
        href="/resume"
        className="block w-full py-2 px-4 bg-green-500 text-white rounded-md text-center hover:bg-green-600 transition duration-300"
      >
        View Resume
      </a>
    </div>
  </div>
);
