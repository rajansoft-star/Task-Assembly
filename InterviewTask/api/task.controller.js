"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAttendance = exports.Getmusium = void 0;
const musiumservice_1 = require("../helper/musiumservice");
function Getmusium(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let date = req.query.date;
            let ignoreval = req.query.ignore;
            var dateInServer = new Date(parseInt(date, 10));
            dateInServer.setUTCHours(0, 0, 0, 0); // format date
            const apiresponse = yield (0, musiumservice_1.musiumservice)();
            const response = apiresponse.filter((s) => s.month === dateInServer.toISOString().replace("Z", ""));
            var responsedata = yield GetAttendance(response, ignoreval);
            res.send(responsedata);
        }
        catch (err) {
            res.send(err);
        }
    });
}
exports.Getmusium = Getmusium;
function GetAttendance(response, ignoredata) {
    return __awaiter(this, void 0, void 0, function* () {
        let lowest = {
            museum: "",
            visitors: 0,
        };
        let highest = {
            museum: "",
            visitors: 0,
        };
        let dataval = {
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
                }
                else if (parseInt(response[0][key]) > maxval) {
                    maxval = response[0][key];
                    dataval.highest.museum = key;
                    dataval.highest.visitors = maxval;
                }
                temp = parseInt(response[0][key]);
                total += parseInt(response[0][key]);
            }
            else {
                let ignoreval = {
                    museum: key,
                    visitors: response[0][key],
                };
                dataval.ignore = ignoreval;
            }
        }
        dataval.total = total;
        return { attendance: dataval };
    });
}
exports.GetAttendance = GetAttendance;
