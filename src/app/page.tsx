import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HomeIcon from "@mui/icons-material/Home";
import PlaceIcon from "@mui/icons-material/Place";

export default function Home() {
  return (
    <div>
      <div>
        <div style={{ position: "absolute", padding: "64px 32px" }}>
          <p style={{ fontSize: "32px" }}>샤링으로 초대합니다.</p>
        </div>
        <img src="/main.png" width="70%" style={{ opacity: 0.6 }} />
      </div>
      <div
        style={{
          background: "black",
          width: "100%",
          padding: "32px 64px",
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AccessTimeIcon
            sx={{ color: "#fff", paddingRight: "8px", fontSize: "64px" }}
          />
          <div>
            <p style={{ color: "#fff", fontSize: "24px", fontWeight: 500 }}>
              운영 시간
            </p>
            <p style={{ color: "#fff", fontSize: "16px", fontWeight: 600 }}>
              10:00 ~ 19:00
            </p>
          </div>
        </div>
        <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
          <p style={{ color: "#fff", fontSize: "24px" }}>이용 안내</p>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HomeIcon
            sx={{ color: "#fff", paddingRight: "8px", fontSize: "64px" }}
          />
          <p style={{ color: "#fff", fontSize: "24px" }}>블로그</p>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PlaceIcon
            sx={{ color: "#fff", paddingRight: "8px", fontSize: "64px" }}
          />
          <p style={{ color: "#fff", fontSize: "24px" }}>오시는 길</p>
        </div>
      </div>
      <div>
        <img src="/main.png" width="70%" style={{ opacity: 0.6 }} />
      </div>
    </div>
  );
}
