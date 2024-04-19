import { useState, useEffect } from "react";
import { Table } from "@radix-ui/themes";

const MyTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/user");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        //console.log(data);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const deleteData = async (id) => {
    try {
      const response = await fetch(`/api/user/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete data");
      }
      // Refresh data or handle successful deletion
      console.log(`Deleted user with id ${id}`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Table.Root className="min-w-full border border-zinc-500 mb-4">
      <Table.Header>
        <Table.Row className="bg-gray-50">
          <Table.ColumnHeaderCell className=" py-3 text-left text-xl  font-medium text-gray-500 uppercase tracking-wider">
            Full name
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="px-6 py-3 text-left text-xl  font-medium text-gray-500 uppercase tracking-wider">
            Email
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="px-6 py-3 text-left text-xl  font-medium text-gray-500 uppercase tracking-wider">
            Group
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="px-6 py-3 text-left text-xl  font-medium text-gray-500 uppercase tracking-wider">
            Action
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body className="bg-white divide-y divide-gray-200">
        {data.map((element) => (
          <Table.Row key={element.id} id={element.id} className="bg-white">
            <Table.RowHeaderCell className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
              {element.name}
            </Table.RowHeaderCell>
            <Table.Cell className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">
              {element.email}
            </Table.Cell>
            <Table.Cell className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">
              {element.group}
            </Table.Cell>
            <Table.Cell className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">
              <button
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={() => deleteData(element.id)}
              >
                Delete
              </button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default MyTable;
