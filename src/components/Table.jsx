import React from "react";
import { Table } from "@radix-ui/themes";

const MyTable = ({ data }) => {
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
        </Table.Row>
      </Table.Header>

      <Table.Body className="bg-white divide-y divide-gray-200">
        {data.map((element) => (
          <Table.Row key={element.FullName} className="bg-white">
            <Table.RowHeaderCell className="px-6 py-4 whitespace-nowrap text-lg font-medium text-gray-900">
              {element.FullName}
            </Table.RowHeaderCell>
            <Table.Cell className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">
              {element.Email}
            </Table.Cell>
            <Table.Cell className="px-6 py-4 whitespace-nowrap text-lg text-gray-500">
              {element.Group}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default MyTable;
