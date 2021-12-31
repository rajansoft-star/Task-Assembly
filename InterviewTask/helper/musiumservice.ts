import axios from "axios";

export async function musiumservice() {
  try {
    const response = await axios
      .get("https://data.lacity.org/resource/trxm-jn3c.json")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log("Error: ", err.message);
      });

    if (!response) {
      return null;
    }

    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
}
