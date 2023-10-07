import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const ShareButton = ({
  link,
  shareWith,
}: {
  link: string;
  shareWith: string;
}) => {
  return (
    <Link
      target="_blank"
      href={`
       ${
         shareWith === "facebook" ? "https://www.facebook.com/sharer.php" : "//twitter.com/share"
       }?u=127.0.0.1:3000${link}`}
      className="flex items-center gap-1 text-white w-fit px-2 py-1 rounded text-[14px]"
      style={{
        backgroundColor: shareWith === "facebook" ? "#4267B2" : "#1da1f2",
      }}
    >
      {shareWith === "facebook" ? <FaFacebookF /> : <FaTwitter />}

      {shareWith === "facebook" ? "Share" : "Tweet"}
    </Link>
  );
};

export default ShareButton;
