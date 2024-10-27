const Table = ({ headers, data }) => {
  return (
    <div className="items-center  justify-center mx-auto relative overflow-x-auto shadow-md sm:rounded-lg w-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers.map((header, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {header.charAt(0).toUpperCase() + header.slice(1)}{" "}
                {/* Capitalize header */}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {headers.map((header, index) => (
                <td
                  key={index}
                  className="px-6 py-4 whitespace-nowrap dark:text-white"
                >
                  {item[header]}{" "}
                  {/* Access property directly based on header */}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
