const MDXComponents = {
  h1: (props) => <h1 className="text-3xl font-bold mb-6" {...props} />,
  h2: (props) => <h2 className="text-2xl font-bold mb-4" {...props} />,
  h3: (props) => <h3 className="text-xl font-bold mb-3" {...props} />,
  h4: (props) => <h4 className="text-lg font-bold mb-2" {...props} />,
  h5: (props) => <h5 className="text-base font-bold mb-2" {...props} />,
  h6: (props) => <h6 className="text-sm font-bold mb-2" {...props} />,
  p: (props) => <p className="mb-4" {...props} />,
  a: (props) => <a className="text-blue-500 hover:underline" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="pl-4 border-l-4 border-gray-700 italic my-4"
      {...props}
    />
  ),
  ul: (props) => <ul className="list-disc list-inside mb-4" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside mb-4" {...props} />,
  li: (props) => <li className="mb-1" {...props} />,
  table: (props) => (
    <table className="min-w-full divide-y divide-gray-200 mb-4" {...props} />
  ),
  th: (props) => (
    <th
      className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
      {...props}
    />
  ),
  tr: (props) => <tr className="even:bg-gray-50" {...props} />,
  code: (props) => (
    <code className="bg-gray-200 text-red-500 px-1 rounded" {...props} />
  ),
  pre: (props) => (
    <pre
      className="bg-gray-800 text-white p-4 rounded mb-4 overflow-x-auto"
      {...props}
    />
  ),
  img: (props) => <img className="my-4 w-full h-auto rounded" {...props} />,
  video: (props) => (
    <video className="my-4 w-full h-auto rounded" controls {...props} />
  ),
};

export default MDXComponents;
