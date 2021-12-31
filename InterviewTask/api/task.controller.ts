import { Request, Response } from "express";
import { musiumservice } from "../helper/musiumservice";

export async function Getmusium(req: Request, res: Response) {
  try {
    let date: string = req.query.date as string;
    let ignoreval: string = req.query.ignore as string;

    var dateInServer = new Date(parseInt(date, 10));
    dateInServer.setUTCHours(0, 0, 0, 0); // format date

    const apiresponse = await musiumservice();

    const response = apiresponse.filter(
      (s: { month: string }) =>
        s.month === dateInServer.toISOString().replace("Z", "")
    );

    var responsedata = await GetAttendance(response, ignoreval);

    res.send(responsedata);
  } catch (err) {
    res.send(err);
  }
}

export async function GetAttendance(response: any, ignoredata?: string) {
  let lowest: Lowest = {
    museum: "",
    visitors: 0,
  };

  let highest: Highest = {
    museum: "",
    visitors: 0,
  };

  let dataval: Attendance = {
    month: "",
    year: 0,
    total: 0,
    highest: highest,
    lowest: lowest,
  };

  dataval.month = new Date(response[0]["month"]).toLocaleString("default", {
    month: "short",
  });

  dataval.year = new Date(response[0]["month"]).getFullYear();

  var temp = 0;
  var maxval = 0;
  var total = 0;
  delete response[0].month;

  for (var key in response[0]) {
    if (key !== ignoredata) {
      if (temp > parseInt(response[0][key])) {
        dataval.lowest.museum = key;
        dataval.lowest.visitors = response[0][key];
      } else if (parseInt(response[0][key]) > maxval) {
        maxval = response[0][key];
        dataval.highest.museum = key;
        dataval.highest.visitors = maxval;
      }

      temp = parseInt(response[0][key]);
      total += parseInt(response[0][key]);
    } else {
      let ignoreval: Ignore = {
        museum: key,
        visitors: response[0][key],
      };
      dataval.ignore = ignoreval;
    }
  }
  dataval.total = total;

  return { attendance: dataval };
}
