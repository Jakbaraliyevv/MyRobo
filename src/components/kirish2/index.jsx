import React, { useState } from "react";

import { CheckOutlined, CodeOutlined, CopyOutlined } from "@ant-design/icons";
import { useData } from "../../datacontect";
import { useLocation } from "react-router-dom";
function KirishComponentsID() {
  const [showFrontendCode, setShowFrontendCode] = useState(false);
  const [showHTMLCode, setShowHTMLCode] = useState(false);
  const [showCSSCode, setShowCSSCode] = useState(false);
  const { data } = useData();
  const location = useLocation();
  const { id } = location?.state;
  console.log(data, id, "njdsbhbehc");

  const findData = data.find((item) => item?.id === id);

  // console.log(findData, "sxjhwxuy");

  const [copied, setCopied] = useState({
    frontend: false,
    html: false,
    css: false,
  });

  const handleCopy = (type) => {
    let codeToCopy = "";

    if (type === "frontend") {
      codeToCopy = frontendCode;
    } else if (type === "html") {
      codeToCopy = htmlCode;
    } else if (type === "css") {
      codeToCopy = cssCode;
    }

    navigator.clipboard.writeText(codeToCopy);
    setCopied({ ...copied, [type]: true });
    setTimeout(() => {
      setCopied({ ...copied, [type]: false });
    }, 2000);
  };

  const frontendCode = `// Frontend asoslari
function nima() {
  console.log("Frontend - bu foydalanuvchilar ko'radigan va ulanish imkoniyatiga ega bo'lgan veb-sahifa qismi");
  
  const technologies = ["HTML", "CSS", "JavaScript"];
  
  return {
    explanation: "Frontend - brauzerda ishlaydigan kod",
    technologies
  };
}`;

  const htmlCode = `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Frontend Kursi</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Frontend Dasturlashga Kirish</h1>
    <nav>
      <ul>
        <li><a href="#intro">Kirish</a></li>
        <li><a href="#html">HTML</a></li>
        <li><a href="#css">CSS</a></li>
        <li><a href="#js">JavaScript</a></li>
      </ul>
    </nav>
  </header>
  
  <main>
    <section id="intro">
      <h2>Kurs haqida</h2>
      <p>Frontend dasturlash asoslari haqida ma'lumot</p>
    </section>
    
    <!-- Boshqa bo'limlar -->
  </main>
  
  <footer>
    <p>© 2025 Frontend Kursi</p>
  </footer>
</body>
</html>`;

  const cssCode = `/* CSS asoslari */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f8f9fa;
}

header {
  background-color: #4a6cf7;
  color: white;
  padding: 1rem 2rem;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
}

section {
  padding: 2rem;
  margin: 1rem 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

h1 { font-size: 2rem; }
h2 { font-size: 1.5rem; margin-bottom: 1rem; }

/* Responsive dizayn */
@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
  }
}`;

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="w-[90%] m-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-2xl md:text-3xl font-semibold">
              Kurs O'qtuvchisi
              <span className="text-blue-600">
                {findData?.teacher?.username}
              </span>
            </h1>

            <div className="bg-orange-200 rounded-lg overflow-hidden p-6 md:p-10 shadow-lg">
              <img
                src={findData?.img}
                className="w-full object-contain mx-auto"
                alt="This is image"
              />
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4">Tavsif</h2>
              <div className="text-gray-700 space-y-4">
                <p>{findData?.description}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                Kurs davomida nimalarga ega bo'lasiz
              </h2>
              <div className="space-y-3">
                {findData?.course_accept?.map((value) => (
                  <div key={value?.id} className="flex items-start">
                    <CheckOutlined
                      className="text-green-500 mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <p className="text-gray-700">{value?.name}</p>
                  </div>
                ))}

                <div className="flex items-start">
                  <CheckOutlined
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-gray-700">Sertifikat</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-900 text-white p-4 rounded-t-lg">
                <h3 className="font-medium">Frontend Nima</h3>
              </div>
              <div className="bg-white p-4 shadow-md rounded-b-lg">
                <p className="text-gray-600 text-sm">Frontend Nima</p>
                <button
                  className="flex items-center text-blue-500 text-sm mt-2 hover:text-blue-700"
                  onClick={() => setShowFrontendCode(!showFrontendCode)}
                >
                  <CodeOutlined size={16} className="mr-1" />
                  code print
                </button>

                {showFrontendCode && (
                  <div className="mt-4 relative">
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400 text-xs">
                          JavaScript
                        </span>
                        <button
                          className="text-gray-400 hover:text-white text-xs flex items-center"
                          onClick={() => handleCopy("frontend")}
                        >
                          {copied.frontend ? (
                            <>
                              <CheckOutlined size={14} className="mr-1" />
                              Nusxalandi
                            </>
                          ) : (
                            <>
                              <CopyOutlined size={14} className="mr-1" />
                              Nusxalash
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                        {frontendCode}
                      </pre>
                    </div>
                    <textarea
                      className="w-full h-40 mt-4 p-3 font-mono text-sm border border-gray-300 rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Bu yerda kod yozing..."
                    ></textarea>
                    <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">
                      Kodni ishga tushirish
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-blue-900 text-white p-4 rounded-t-lg mt-6">
                <h3 className="font-medium">HTML</h3>
              </div>
              <div className="bg-white p-4 shadow-md rounded-b-lg">
                <p className="text-gray-600 text-sm">
                  HTML/Ga dastlabish | 0 Kurs haqida
                </p>
                <button
                  className="flex items-center text-blue-500 text-sm mt-2 hover:text-blue-700"
                  onClick={() => setShowHTMLCode(!showHTMLCode)}
                >
                  <CodeOutlined size={16} className="mr-1" />
                  code print
                </button>

                {showHTMLCode && (
                  <div className="mt-4 relative">
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400 text-xs">HTML</span>
                        <button
                          className="text-gray-400 hover:text-white text-xs flex items-center"
                          onClick={() => handleCopy("html")}
                        >
                          {copied.html ? (
                            <>
                              <CheckOutlined size={14} className="mr-1" />
                              Nusxalandi
                            </>
                          ) : (
                            <>
                              <CopyOutlined size={14} className="mr-1" />
                              Nusxalash
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="text-orange-400 text-sm font-mono whitespace-pre-wrap">
                        {htmlCode}
                      </pre>
                    </div>
                    <textarea
                      className="w-full h-40 mt-4 p-3 font-mono text-sm border border-gray-300 rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Bu yerda HTML kod yozing..."
                    ></textarea>
                    <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">
                      HTML kodni ko'rish
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-blue-900 text-white p-4 rounded-t-lg mt-6">
                <h3 className="font-medium">CSS</h3>
              </div>
              <div className="bg-white p-4 shadow-md rounded-b-lg">
                <p className="text-gray-600 text-sm">CSS | 1 Kirish</p>
                <button
                  className="flex items-center text-blue-500 text-sm mt-2 hover:text-blue-700"
                  onClick={() => setShowCSSCode(!showCSSCode)}
                >
                  <CodeOutlined size={16} className="mr-1" />
                  code print
                </button>

                {showCSSCode && (
                  <div className="mt-4 relative">
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400 text-xs">CSS</span>
                        <button
                          className="text-gray-400 hover:text-white text-xs flex items-center"
                          onClick={() => handleCopy("css")}
                        >
                          {copied.css ? (
                            <>
                              <CheckOutlined size={14} className="mr-1" />
                              Nusxalandi
                            </>
                          ) : (
                            <>
                              <CopyOutlined size={14} className="mr-1" />
                              Nusxalash
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="text-blue-400 text-sm font-mono whitespace-pre-wrap">
                        {cssCode}
                      </pre>
                    </div>
                    <textarea
                      className="w-full h-40 mt-4 p-3 font-mono text-sm border border-gray-300 rounded-lg resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Bu yerda CSS kod yozing..."
                    ></textarea>
                    <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">
                      CSS ni qo'llash
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-4">
              <img
                src={findData?.teacher?.img}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">
                  {findData?.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Mentor: <span>{findData?.teacher?.username}</span>
                </p>

                <div className="border-t border-b py-4 my-4">
                  <p className="text-sm text-gray-500">Kurs narxi:</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xl font-bold">
                      {findData?.price} so'm
                    </span>
                    <span className="text-gray-400 line-through ml-2 text-sm">
                      300000 so'm
                    </span>
                  </div>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md w-full py-3 font-medium transition duration-300 shadow-md">
                  Sotib olish
                </button>

                <div className="flex justify-around mt-4">
                  <img
                    src="https://api.logobank.uz/media/logos_png/Uzcard-01.png"
                    alt="Payment method 1"
                    className="h-12 w-12 rounded-md"
                  />
                  <img
                    src="https://humocard.uz/upload/medialibrary/8cf/ia2yatyqt4l0p0d5523erhmx6y0fssxw/HumoPay-Final-002.png"
                    alt="Payment method 2"
                    className="h-12 w-12 rounded-md"
                  />
                  <img
                    src="https://pr.uz/wp-content/uploads/2024/05/photo_2024-05-14_20-27-31.jpg"
                    alt="Payment method 3"
                    className="h-12 w-12 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KirishComponentsID;
