import axios from "axios";

export const editReportStatus = async (info:any) => {
    const response = (await axios.put("/report", info)).data;
    return response;
}   
