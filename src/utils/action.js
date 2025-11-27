import { postrequest } from "./api/request";
import { addResponse } from "./api/response";
import { uploadPdf } from "./api/uploadPdf.js";

export const requestPengajuan = async (type, message, file, navigate) => {
  const token = localStorage.getItem("tokenKey");
  const response = await postrequest(token, {
    type,
    message,
  });

  if (response.status === "success") {
    if (file) {
      const pengajuanId = response.pengajuanId;
      const resultUpload = await uploadPdf(file, pengajuanId, token);
      if (resultUpload.status === "success") {
        navigate("/dashboard");
      }
    } else {
      navigate("/dashboard")
    }
  }
  
};


export const addResponseHandler = async (
  e,
  { id, message, isComplete },
  navigate
) => {
  e.preventDefault();
  const result = await addResponse(id, message, isComplete);
  if (result.status === "success") {
    console.log(result)
    navigate("/admin/pengajuan");
  }
};
