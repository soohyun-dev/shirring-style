import Provider from "./Provider";
import { Footer } from "./footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Provider>
          <div
            style={{
              padding: "16px",
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#fff",
            }}
          >
            <div style={{ paddingLeft: "32px" }}>
              <div style={{ fontSize: 24 }}>샤링 스타일</div>
              <div>Shirring Style</div>
            </div>
          </div>
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
