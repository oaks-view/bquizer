const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

// JSON configuration
const config = {
  app: {
    base_language: "en",
    push: {
      source: [
        { language: "en", file_format: "react_nested_json", path: "./i18n/en/common.json" },
        { language: "en", file_format: "java_properties", path: "./i18n/en/messages.properties" },
        { language: "en", file_format: "xls", path: "./i18n/en/translations.xlsx" },
        { language: "en", file_format: "tsx", path: "./i18n/en/Translations.tsx" },
        { language: "en", file_format: "xliff", path: "./i18n/en/translations.xliff" }
      ]
    },
    pull: {
      target: [
        { exclude_languages: ["en"], file_format: "react_nested_json", path: "./i18n/<language>/common.json" },
        { exclude_languages: ["en"], file_format: "java_properties", path: "./i18n/<language>/messages.properties" },
        { exclude_languages: ["en"], file_format: "xls", path: "./i18n/<language>/translations.xlsx" },
        { exclude_languages: ["en"], file_format: "tsx", path: "./i18n/<language>/Translations.tsx" },
        { exclude_languages: ["en"], file_format: "xliff", path: "./i18n/<language>/translations.xliff" }
      ]
    }
  }
};

// Sample languages for target files
const targetLanguages = ["es", "de", "fr"];

// Sample translation strings
const sampleStrings = {
  react_nested_json: {
    welcome: "Welcome",
    goodbye: "Goodbye",
    cart: "Shopping Cart",
    checkout: "Checkout",
    profile: "User Profile"
  },
  java_properties: {
    welcome: "welcome=Welcome",
    goodbye: "goodbye=Goodbye",
    cart: "cart=Shopping Cart",
    checkout: "checkout=Checkout",
    profile: "profile=User Profile"
  },
  tsx: `export const translations = {
    welcome: "Welcome",
    goodbye: "Goodbye",
    cart: "Shopping Cart",
    checkout: "Checkout",
    profile: "User Profile"
  };`,
  xliff: `<?xml version="1.0" encoding="UTF-8"?>
  <xliff version="1.2">
    <file source-language="en" datatype="plaintext" original="file.ext">
      <body>
        <trans-unit id="welcome">
          <source>Welcome</source>
        </trans-unit>
        <trans-unit id="goodbye">
          <source>Goodbye</source>
        </trans-unit>
      </body>
    </file>
  </xliff>`
};

// Function to create a file with sample content
function createFile(filePath, content) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✅ Created: ${filePath}`);
}

// Function to create an Excel file
function createExcelFile(filePath, data) {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.aoa_to_sheet(data);
  XLSX.utils.book_append_sheet(workbook, worksheet, "Translations");
  XLSX.writeFile(workbook, filePath);
  console.log(`✅ Created Excel: ${filePath}`);
}

// Generate source files
config.app.push.source.forEach(fileConfig => {
  let content = "";
  
  if (fileConfig.file_format === "react_nested_json") {
    content = JSON.stringify(sampleStrings.react_nested_json, null, 2);
  } else if (fileConfig.file_format === "java_properties") {
    content = Object.values(sampleStrings.java_properties).join("\n");
  } else if (fileConfig.file_format === "tsx") {
    content = sampleStrings.tsx;
  } else if (fileConfig.file_format === "xliff") {
    content = sampleStrings.xliff;
  } else if (fileConfig.file_format === "xls") {
    return createExcelFile(fileConfig.path, [["Key", "Translation"], ["welcome", "Welcome"], ["goodbye", "Goodbye"]]);
  }

  createFile(fileConfig.path, content);
});

// Generate target files for each language
config.app.pull.target.forEach(fileConfig => {
  targetLanguages.forEach(lang => {
    let content = "";
    let filePath = fileConfig.path.replace("<language>", lang);

    if (fileConfig.file_format === "react_nested_json") {
      content = JSON.stringify(sampleStrings.react_nested_json, null, 2);
    } else if (fileConfig.file_format === "java_properties") {
      content = Object.values(sampleStrings.java_properties).join("\n");
    } else if (fileConfig.file_format === "tsx") {
      content = sampleStrings.tsx;
    } else if (fileConfig.file_format === "xliff") {
      content = sampleStrings.xliff;
    } else if (fileConfig.file_format === "xls") {
      return createExcelFile(filePath, [["Key", "Translation"], ["welcome", "Bienvenido"], ["goodbye", "Adiós"]]);
    }

    createFile(filePath, content);
  });
});

console.log("🎉 All localization files created successfully!");
