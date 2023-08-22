import axios from "axios";

export async function GET(request){
    const response = await axios.get(process.env.ACCESSTOKEN_URL);


    const data = await axios.get(`https://www.zohoapis.com/crm/v3/Leads?fields=Last_Name,Email`, {
      headers: {
        Authorization: response.data.access_token,
      },
    });
    console.log(data)
    return new Response(JSON.stringify(data.data));
}