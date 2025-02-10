const fs = require("fs");
const path = require("path");

// JSON configuration
const config = {
  app: {
    base_language: "en",
    push: {
      source: [
        {
          language: "en",
          file_format: "react_nested_json",
          path: "./localization/en/common.json",
          tag: "localization:json:common",
          key_prefix: "localization_common-"
        },
        {
          language: "en",
          file_format: "java_properties",
          path: "./localization/en/common.properties",
          tag: "localization:properties:common",
          key_prefix: "localization_common-"
        },
        {
          language: "en",
          file_format: "csv",
          path: "./localization/en/common.csv",
          tag: "localization:csv:common",
          key_prefix: "localization_common-"
        },
        {
          language: "en",
          file_format: "tsv",
          path: "./localization/en/common.tsv",
          tag: "localization:tsv:common",
          key_prefix: "localization_common-"
        },
        {
          language: "en",
          file_format: "xliff",
          path: "./localization/en/common.xliff",
          tag: "localization:xliff:common",
          key_prefix: "localization_common-"
        }
      ]
    },
    pull: {
      target: [
        {
          exclude_languages: ["en"],
          file_format: "react_nested_json",
          path: "./localization/<language>/common.json",
          tag: "localization:json:common",
          key_prefix: "localization_common-"
        },
        {
          exclude_languages: ["en"],
          file_format: "java_properties",
          path: "./localization/<language>/common.properties",
          tag: "localization:properties:common",
          key_prefix: "localization_common-"
        },
        {
          exclude_languages: ["en"],
          file_format: "csv",
          path: "./localization/<language>/common.csv",
          tag: "localization:csv:common",
          key_prefix: "localization_common-"
        },
        {
          exclude_languages: ["en"],
          file_format: "tsv",
          path: "./localization/<language>/common.tsv",
          tag: "localization:tsv:common",
          key_prefix: "localization_common-"
        },
        {
          exclude_languages: ["en"],
          file_format: "xliff",
          path: "./localization/<language>/common.xliff",
          tag: "localization:xliff:common",
          key_prefix: "localization_common-"
        }
      ]
    }
  }
};

// Sample languages for target files
const targetLanguages = ["es", "de", "fr"]; // Spanish, German, French

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
  csv: [
    ["key", "value"],
    ["welcome", "Welcome"],
    ["goodbye", "Goodbye"],
    ["cart", "Shopping Cart"],
    ["checkout", "Checkout"],
    ["profile", "User Profile"]
  ],
  tsv: [
    ["key", "value"],
    ["welcome", "Welcome"],
    ["goodbye", "Goodbye"],
    ["cart", "Shopping Cart"],
    ["checkout", "Checkout"],
    ["profile", "User Profile"]
  ],
  xliff: `<?xml version="1.0" encoding="UTF-8"?>
<xliff version="1.2">
  <file source-language="en" datatype="plaintext" original="messages">
    <body>
      <trans-unit id="welcome">
        <source>Welcome</source>
      </trans-unit>
      <trans-unit id="goodbye">
        <source>Goodbye</source>
      </trans-unit>
      <trans-unit id="cart">
        <source>Shopping Cart</source>
      </trans-unit>
      <trans-unit id="checkout">
        <source>Checkout</source>
      </trans-unit>
      <trans-unit id="profile">
        <source>User Profile</source>
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

// Function to convert CSV/TSV array to string format
function convertToDelimitedFormat(array, delimiter) {
  return array.map(row => row.join(delimiter)).join("\n");
}

// Generate source files
config.app.push.source.forEach(fileConfig => {
  let content = "";

  switch (fileConfig.file_format) {
    case "react_nested_json":
      content = JSON.stringify(sampleStrings.react_nested_json, null, 2);
      break;
    case "java_properties":
      content = Object.values(sampleStrings.java_properties).join("\n");
      break;
    case "csv":
      content = convertToDelimitedFormat(sampleStrings.csv, ",");
      break;
    case "tsv":
      content = convertToDelimitedFormat(sampleStrings.tsv, "\t");
      break;
    case "xliff":
      content = sampleStrings.xliff;
      break;
  }

  createFile(fileConfig.path, content);
});

// Generate target files for each language
config.app.pull.target.forEach(fileConfig => {
  targetLanguages.forEach(lang => {
    let content = "";
    let filePath = fileConfig.path.replace("<language>", lang);

    switch (fileConfig.file_format) {
      case "react_nested_json":
        content = JSON.stringify(sampleStrings.react_nested_json, null, 2);
        break;
      case "java_properties":
        content = Object.values(sampleStrings.java_properties).join("\n");
        break;
      case "csv":
        content = convertToDelimitedFormat(sampleStrings.csv, ",");
        break;
      case "tsv":
        content = convertToDelimitedFormat(sampleStrings.tsv, "\t");
        break;
      case "xliff":
        content = sampleStrings.xliff.replace(
          `source-language="en"`,
          `source-language="${lang}"`
        );
        break;
    }

    createFile(filePath, content);
  });
});

console.log("🎉 All localization files created successfully!");
