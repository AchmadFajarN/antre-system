import { useState, useEffect } from "react";
import { getRequestDetail } from "../../../utils/api/request";
import { useParams } from "react-router";
import { addResponseHandler } from "../../../utils/action";
import { useNavigate } from "react-router";
import TableResponse from "./TableResponse";
import IframeRequest from "./IframeRequest";

const RequestDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isActive, setIsActive] = useState(true);
  const [requestDetail, setRequestDetail] = useState(null);
  const [message, setMessage] = useState("");
  const [responses, setResponses] = useState([]);
  const [displayIframe, setDisplayIframe] = useState(false);
  useEffect(() => {
    getRequestDetail(id, setRequestDetail, setResponses);
  }, [id]);
  const propertyResponse = ["No", "message", "created at"];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="bg-white shadow-md overflow-y-auto max-h-full rounded-md px-4 py-6">
          <div className="flex gap-4 mb-4 items-center">
            <div className="size-20 md:size-30 xl:size-40 rounded-full overflow-hidden">
              <img
                src={requestDetail?.url_photo}
                alt="image user"
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="">
              <div className="flex items-center gap-4 mb-1">
                <p className="md:text-xl text-gray-500">
                  {requestDetail?.username}
                </p>
                <p
                  className={` px-2 py-1 inline rounded-md ${
                    requestDetail?.status === "completed" &&
                    "bg-green-300 text-green-800"
                  } ${
                    requestDetail?.status === "pending" &&
                    "bg-yellow-400 text-yellow-800"
                  } ${
                    requestDetail?.status === "canceled" &&
                    "bg-red-400 text-red-800"
                  }`}
                >
                  {requestDetail?.status}
                </p>
              </div>
              <p className="text-xl md:text-2xl mt-2 font-bold">
                {requestDetail?.type}
              </p>
              <p className="text-xl text-gray-500">
                {requestDetail?.nim}
              </p>
            </div>
          </div>
          <p className="mt-4 text-gray-500">
            <i>Pesan pengaju:</i>
          </p>
          <p>{requestDetail?.message}</p>
          {requestDetail?.url && (
            <button
              onClick={() => setDisplayIframe(!displayIframe)}
              className="mt-4 px-4 py-1 bg-yellow-500 rounded-md shadow-md cursor-pointer border-3 border-transparent hover:border-gray-800 transition-duration transition-all hover:bg-transparent"
            >
              Tampilkan File
            </button>
          )}
          {displayIframe && <IframeRequest url={requestDetail?.url} />}
        </div>
        <div className="bg-white px-4 py-6 shadow-md overflow-y-auto">
          <h2 className="mb-4 text-xl font-bold">Response</h2>
          <form
            onSubmit={(e) =>
              addResponseHandler(
                e,
                { id, message, isComplete: isActive },
                navigate
              )
            }
            className="flex flex-col justify-between w-full gap-4"
            action=""
          >
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              placeholder="message"
              className="px-4 py-2 bg-gray-200 rounded-md shadow-md focus:outline-1"
            />
            <div className="">
              <p className="font-semibold text-xl mt-2">Status</p>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="isActive"
                    value="true"
                    checked={isActive === true}
                    onChange={() => setIsActive(true)}
                  />
                  <span>Completed</span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="isActive"
                    value="false"
                    checked={isActive === false}
                    onChange={() => setIsActive(false)}
                  />
                  <span>Canceled</span>
                </label>
              </div>
            </div>
            <button
              disabled={
                requestDetail?.status === "completed" ||
                requestDetail?.status === "canceled"
              }
              type="submit"
              className="md:px-4 disabled:bg-yellow-500/50 disabled:cursor-not-allowed md:py-2 bg-yellow-500 rounded-md font-semibold border-3 cursor-pointer transition-color transition-duration border-transparent hover:bg-transparent hover:border-gray-800"
            >
              Add Response
            </button>
          </form>
        </div>
      </div>
      <div className="bg-white rounded-md shadow-md mt-4 md:px-6 md:py-4">
        <h1 className="mb-2 font-semibold text-xl">Response</h1>
        {responses.length === 0 ? (
          <>
            <h1>Response Belum Ada</h1>
          </>
        ) : (
          <TableResponse response={responses} dataKey={propertyResponse} />
        )}
      </div>
    </>
  );
};

export default RequestDetail;
