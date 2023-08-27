import axios from "axios";

export async function GET(request) {
  const response = await axios.get(process.env.ACCESSTOKEN_URL);

  // console.log({request: request})

  const url = request.url;

  const id = url.split("=")[1];

  const projectData = await axios.get(
    `https://www.zohoapis.com/crm/v3/FP_Projects/${id}?fields=Salesperson,Name,Work_Summary_Sale,Budget_time_Add_Remove,Allowance_time_Add_Remove,Project_Variation,Notes_for_Operations_Manager`,
    {
      headers: {
        Authorization: response.data.access_token,
      },
    }
  );

  const relatedListData = await axios.get(
    `https://www.zohoapis.com/crm/v3/FP_Projects/${id}/Project_Variation?fields=Name,Variation_to_Estimated_Time_budget,Variation_to_Project_Cost`,
    {
      headers: {
        Authorization: response.data.access_token,
      },
    }
  );

  const combinedData = {
    variationData: relatedListData.data.data,
    projectData: projectData.data.data[0],
  };

  return new Response(JSON.stringify(combinedData));
}
