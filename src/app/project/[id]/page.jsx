"use client";

import { useEffect, useState } from "react";
import logo from "../../../../public/furlong_new_logo.png";
import Image from "next/image";

export default function Project({ params }) {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [variation, setVariation] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      `http://localhost:3000/api/projectapi?id=${params.id}`
    );

    const data = await res.json();
    console.log({ data: data.variationData });
    setProjectData(data);
    setLoading(false);
    if (data.variationData.length > 0) {
      setVariation(data.variationData);
    }
  };

  if (loading === true) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          {/* <div style={{ display: "flex", alignItems: "center" }}>
            <Image src={logo} alt="logo" height="50px" width={"100%"} />
          </div> */}
          <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "" }}>
            Loading.............
          </h1>
        </div>
      </div>
    );
  }

  // console.log({ data });

  return (
    <main>
      <div className="w-1/2 mx-auto p-6 border mt-4">
        <div className="mt-6">
          {/* <div className="px-4 sm:px-0">
            <h1 className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Hi <span className="text-base font-semibold leading-7 text-gray-900">{projectData?.projectData?.Salesperson?.name},</span></h1>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">A quick email to say that the following project has now been completed.</p>
          </div> */}
          <dl className="">
            <h2 className="mt-6 text-xl font-medium leading-6 text-gray-900">
              Project details:
            </h2>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Project name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {projectData?.projectData?.Name}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Project summary
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {projectData?.projectData?.Work_Summary_Sale}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Current estimated time (Budget)
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {projectData?.projectData?.Budget_time_Add_Remove}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Current estimated time (Allowance)
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {projectData?.projectData?.Allowance_time_Add_Remove}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Relevant issues /notes
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
               {projectData?.projectData?.Notes_for_Operations_Manager}
              </dd>
            </div>
          </dl>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Project variations
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {
                variation.length > 0 ? "Yes" : "None"
              }
            </dd>
          </div>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Variation name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Estimated Time (budget)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cost
                  </th>
                </tr>
              </thead>
              <tbody>
                {console.log({ variation })}
                {variation.length > 0 &&
                  variation.map((item, index) => {
                    return (
                      <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.Name}
                        </th>

                        <td className="px-6 py-4">
                          {item.Variation_to_Estimated_Time_budget}
                        </td>
                        <td className="px-6 py-4">
                          {item.Variation_to_Project_Cost}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          marginTop: "5%",
          backgroundColor: "lightgrey"
        }}
      >
        <div style={{ padding: "30px" }}>
          <p>Hi {projectData?.projectData?.Salesperson?.name},</p>
          <br />
          <p>
            A quick email to say that the following project has now been
            completed.
          </p>
          <br />
          <p>Project details : Project - {projectData?.projectData?.Name}</p>
          <br />
          <p>Project Summary- {projectData?.projectData?.Work_Summary_Sale}</p>
          <br />
          <p>
            Current Estimated time (Budget) -
            {projectData?.projectData?.Budget_time_Add_Remove}
          </p>
          <br />
          <p>
            {" "}
            Current Estimated time (Allowance) -
            {projectData?.projectData?.Allowance_time_Add_Remove}
          </p>
          <br />
          <p>
            {" "}
            Relevant notes / issues : -{" "}
            {projectData?.projectData?.Work_Summary_Sale}
          </p>
          <br />
          <br />
          {projectData?.projectData?.variationData.length > 0 && (
            <p>
              Project Variations (False = none) -
              {projectData?.projectData?.variationData}
            </p>
          )}
          <p>
            Should you wish to discuss anything further please make contact.
          </p>
          <br />
          <p>Regards,</p>
          <br />
          Furlong Painting
        </div>
      </div> */}
    </main>
  );
}
