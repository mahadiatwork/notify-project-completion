// "use server"

export default async function Home({ params }: { params: { slug: string } }) {

  const res = await fetch('http://localhost:3000/api/project');

  console.log("url", params)


  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          marginTop: "5%"
        }}
      >
        <div style={{ padding: "30px" }}>
          <p>Hi ${`Lookup:Salesperson.First Name`},</p>
          <br />
          <p>
            A quick email to say that the following project has now been
            completed.
          </p>
          <br />
          {
          JSON.stringify(res)
          }
          <p>Project details : Project - ${`FP Projects.Project Name`}</p>
          <br />
          <p>Project Summary- ${`FP Projects.Work Summary (Sale)`}</p>
          <br />
          <p>
            Project Variations (False = none) - $
            {`FP Projects.Project Variation`}
          </p>
          <br />
          <p>
            Current Estimated time (Budget) - $
            {`FP Projects.Current Estimated Time Budget`}
          </p>
          <br />
          <p>
            {" "}
            Current Estimated time (Allowance) - $
            {`FP Projects.Current Estimated Time Allowance`}
          </p>
          <br />
          <p>
            {" "}
            Relevant notes / issues : - ${`FP Projects.Project notes / Issues`}
          </p>
          <br />
          <p>
            Should you wish to discuss anything further please make contact.
          </p>
          <br />
          <p>Regards,</p>
          <br />${`userSignature`}
        </div>
      </div>
    </main>
  );
}
