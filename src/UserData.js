import { useContext } from "react";
import { DataContext } from "./CreateContext";

const UserData = () => {
  const data = useContext(DataContext);

  return (
    <div className="overflow-x-auto">
      <table className="table table-auto">
        <thead>
          <tr className="bg-purple-600 text-white">
            <th className="px-4 py-2 sm:text-sm border border-collapse">
              Sr No.
            </th>
            <th className="px-4 py-2 sm:text-sm border border-collapse">
              Title
            </th>
            <th className="px-4 py-2 sm:text-sm border border-collapse">URL</th>
            <th className="px-4 py-2 sm:text-sm border border-collapse">
              Author
            </th>
            <th className="px-4 py-2 sm:text-sm border border-collapse">
              Date of Creation
            </th>
            <th className="px-4 py-2 sm:text-sm border border-collapse">
              Comments
            </th>
            <th className="px-4 py-2 sm:text-sm border border-collapse">
              Points
            </th>
            <th className="px-4 py-2 sm:text-sm border border-collapse">
              Score
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="bg-purple-300" key={item.objectID}>
              <td className="border border-collapse px-4 py-2 sm:text-sm">
                {index + 1}
              </td>
              <td className="border border-collapse px-4 py-2 sm:text-sm">
                {item.title}
              </td>
              <td className="border border-collapse px-4 py-2 sm:text-sm">
                <a href={item.url} target="_blank">
                  {item.url}
                </a>
              </td>
              <td className="border border-collapse px-4 py-2 sm:text-sm">
                {item.author}
              </td>
              <td className="border border-collapse px-4 py-2 sm:text-sm">
                {new Date(item.created_at_i).toDateString()}
              </td>
              <td className="border border-collapse px-4 py-2 sm:text-sm">
                {item.num_comments}
              </td>
              <td className="border border-collapse px-4 py-2 sm:text-sm">
                {item.points}
              </td>
              <td className="border border-collapse px-4 py-2 sm:text-sm">
                {item.relevancy_score || "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
