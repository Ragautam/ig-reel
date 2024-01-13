import { getLocalDate, getLocalTime } from "../../utils";

function Footer({ userName, userAvtarUrl, createdAt }) {
  const localDate = getLocalDate(createdAt);
  const localTime = getLocalTime(createdAt);
  return (
    <div className="footer">
      <div className="user-detail">
        <img src={userAvtarUrl} alt={userName} />
        <span>{userName}</span>
      </div>
      <div className="date">
        {localDate} {localTime}
      </div>
    </div>
  );
}

export default Footer;
