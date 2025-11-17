import { useEffect, useRef } from "react";
import { CLD_NAME } from "../../utils/cloudinary.config";

const UploadWidget = ({ setPublicId }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: CLD_NAME,
        uploadPreset: "sipekad",
      },
      function (err, res) {
        const { public_id: publicId, secure_url } = res.info;
        if (publicId) {
          setPublicId(secure_url);
        }
      }
    );
  }, [setPublicId]);

  return (
    <button
      className="button-yellow-home text-sm font-[500] w-full mb-4 mt-10"
      onClick={() => widgetRef.current.open()}
    >
      Update foto
    </button>
  );
};

export default UploadWidget;
