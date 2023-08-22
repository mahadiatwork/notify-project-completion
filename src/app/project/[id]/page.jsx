"use client";

import { useEffect, useState } from "react";
import logo from "../../../../public/furlong_new_logo.png";
import Image from "next/image";

export default function Project({ params }) {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const res = await fetch(
      `https://notify-project-completion.vercel.app/projectapi?id=${params.id}`
    );

    const data = await res.json();

    setProjectData(data);
    setLoading(false);
  }, []);

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

  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          marginTop: "5%",
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
          {/* {projectData?.projectData?.variationData.length > 0 && (
            <p>
              Project Variations (False = none) -
              {projectData?.projectData?.variationData}
            </p>
          )} */}
          <p>
            Should you wish to discuss anything further please make contact.
          </p>
          <br />
          <p>Regards,</p>
          <br />
          Furlong Painting
        </div>
      </div>
    </main>
  );
}
