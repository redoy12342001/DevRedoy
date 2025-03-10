"use client";
import { Sandpack } from "@codesandbox/sandpack-react";
import { nightOwl } from "@codesandbox/sandpack-themes";
// import { githubDark } from "@codesandbox/sandpack-themes"

export default function CodePreview() {
    const hover = `<!-- From Uiverse.io by gagan-gv --> 
<button class="btn cube cube-hover" type="button">
  <div class="bg-top">
    <div class="bg-inner"></div>
  </div>
  <div class="bg-right">
    <div class="bg-inner"></div>
  </div>
  <div class="bg">
    <div class="bg-inner"></div>
  </div>
  <div class="text">Hover Me</div>
</button>
`
  return (
    <Sandpack
      template="vanilla" // Ensures no JS execution
      theme={nightOwl}
      files={{
        "/index.html": {
          code: `${hover}`,
          active: true, // Set this as the default visible file
        },
        "/styles.css": {
          code: `/* From Uiverse.io by gagan-gv */ 
.btn {
  display: block;
  padding: 0.7em 1em;
  background: transparent;
  outline: none;
  border: 0;
  color: #d4af37;
  letter-spacing: 0.1em;
  font-family: monospace;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  z-index: 1;
}

.cube {
  position: relative;
  transition: all 0.5s;
}

.cube .bg-top {
  position: absolute;
  height: 10px;
  background: #d4af37;
  bottom: 100%;
  left: 5px;
  right: -5px;
  transform: skew(-45deg, 0);
  margin: 0;
  transition: all 0.4s;
}

.cube .bg-top .bg-inner {
  bottom: 0;
}

.cube .bg {
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background: #d4af37;
  transition: all 0.4s;
}

.cube .bg-right {
  position: absolute;
  background: #d4af37;
  top: -5px;
  z-index: 0;
  bottom: 5px;
  width: 10px;
  left: 100%;
  transform: skew(0, -45deg);
  transition: all 0.4s;
}

.cube .bg-right .bg-inner {
  left: 0;
}

.cube .bg-inner {
  background: #28282d;
  position: absolute;
  left: 2px;
  right: 2px;
  top: 2px;
  bottom: 2px;
}

.cube .text {
  position: relative;
  transition: all 0.4s;
}

.cube:hover .bg-inner {
  background: #d4af37;
  transition: all 0.4s;
}

.cube:hover .text {
  color: #28282d;
  transition: all 0.4s;
}

.cube:hover .bg-right,
.cube:hover .bg,
.cube:hover .bg-top {
  background: #28282d;
}

.cube:active {
  z-index: 9999;
  animation: bounce 0.1s linear;
}

@keyframes bounce {
  50% {
    transform: scale(0.9);
  }
}
`,
        },
        "/index.js": {
          code: `// This file is intentionally left empty to prevent errors`,
          hidden: true, // Hides the file from the editor
        },
      }}
    //   theme={githubDark}
      
      options={{
        showNavigator: false, // Hide file navigator
        showLineNumbers: true,
        editorHeight: 300,
        externalResources: ["/styles.css"], // Ensure CSS is applied
        classes: {
            "sp-editor": "rounded-lg border border-gray-700 shadow-md", // Custom styling
          },
      }}
    />
  );
}
