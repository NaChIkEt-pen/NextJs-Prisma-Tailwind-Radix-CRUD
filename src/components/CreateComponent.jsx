"use client";
import { useState, useEffect } from "react";

import { TextField } from "@radix-ui/themes";

//prisma imports
import { PrismaClient, Prisma } from "@prisma/client";
import { cardPropDefs } from "@radix-ui/themes/dist/cjs/props";
const prisma = new PrismaClient();

const CreateComponent = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    name: "",
    group: "",
  });

  // useEffect(() => {
  //   console.log(inputValue);
  // }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  const createRecord = async () => {
    console.log(inputValues);
    // try {
    //   await prisma.User.create({
    //     data: {
    //       email: inputValues.email,
    //       name: inputValues.name,
    //       group: inputValues.group,
    //     },
    //   });
    // } catch (error) {
    //   console.error(error);
    //   return {
    //     message: "Failed to Push Record",
    //   };
    // }
  };
  return (
    <>
      <div className={`TextInputDiv space-y-4`} style={{ marginLeft: "400px" }}>
        <TextField.Root
          name="name"
          className={`border border-zinc-500 w-80 `}
          value={inputValues.name}
          onChange={handleInputChange}
          placeholder="Enter Name"
        />
        <TextField.Root
          name="email"
          className={`border border-zinc-500 w-80  `}
          value={inputValues.email}
          onChange={handleInputChange}
          placeholder="Enter Email"
        />
        <TextField.Root
          name="group"
          className={`border border-zinc-500 w-80`}
          value={inputValues.group}
          onChange={handleInputChange}
          placeholder="Enter Name"
        />
      </div>
      <button
        style={{ marginLeft: "500px" }}
        className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={createRecord}
      >
        Create Record
      </button>
    </>
  );
};

export default CreateComponent;
