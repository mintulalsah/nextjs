import { createRoot } from "react-dom";
import React, { useState, useEffect } from "react";

function mintu() {
  const [jsxCode, setJsxCode] = useState(null);

  useEffect(() => {
    // Dynamic import the "htmltojsx" library only on the client-side
    import("htmltojsx").then((module) => {
      const HTMLtoJSX = module.default;
      const html = `
        <div class="App" style="text-align: center;">
          <h1>html-react-parser</h1>
          <h1>html-react-parser</h1>
          <p>
            <a
              href="https://github.com/remarkablemark/html-react-parser"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub repository
            </a>
          </p>
          <hr class="remove">
        </div>
      `;

      const converter = new HTMLtoJSX();
      const convertedJsx = converter.convert(html);
      setJsxCode(convertedJsx);
    });
  }, []);

  return (
    <div>
      {/* Render the parsed JSX */}
      {jsxCode}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
