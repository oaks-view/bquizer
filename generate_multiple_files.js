const fs = require('fs');
const path = require('path');

// JSON configuration
const config = {
  app: {
    base_language: "en",
    push: {
      source: [
        {
          language: "en",
          file_format: "react_nested_json",
          path: "./js-storefront/markethub/src/assets/i18n-assets/en/common.json",
          tag: "storefront:i18n:common.json",
          key_prefix: "storefront_i18n_common-"
        },
        {
          language: "en",
          file_format: "react_nested_json",
          path: "./js-storefront/markethub/src/assets/i18n-assets/en/mcms.json",
          tag: "storefront:i18n:mcms.json",
          key_prefix: "storefront_i18n_mcms-"
        },
        {
          language: "en",
          file_format: "react_nested_json",
          path: "./js-storefront/markethub/src/assets/i18n-assets/en/createuser.json",
          tag: "storefront:i18n:createuser.json",
          key_prefix: "storefront_i18n_createuser-"
        },
        {
          language: "en",
          file_format: "react_nested_json",
          path: "./js-storefront/markethub/src/assets/i18n-assets/en/rolesandprivileges.json",
          tag: "storefront:i18n:rolesandprivileges.json",
          key_prefix: "storefront_i18n_rolesandprivileges-"
        },
        {
          language: "en",
          file_format: "react_nested_json",
          path: "./js-storefront/markethub/src/assets/i18n-assets/en/profile.json",
          tag: "storefront:i18n:profile.json",
          key_prefix: "storefront_i18n_profile-"
        },
        {
          language: "en",
          file_format: "java_properties",
          path: "./core-customize/hybris/bin/custom/markethub-financials/financialsfacades/resources/localization/financialsfacades-locales_en.properties",
          tag: "storefront:java_properties:financialsfacades-locales",
          key_prefix: "storefront:java_properties:financialsfacades-locales"
        }
      ]
    },
    pull: {
      target: [
        {
          exclude_languages: ["en"],
          file_format: "react_nested_json",
          path: "./js-storefront/markethub/src/assets/i18n-assets/<language>/common.json",
          tag: "storefront:i18n:common.json",
          key_prefix: "storefront_i18n_common-"
        },
        {
          exclude_languages: ["en"],
          file_format: "react_nested_json",
          path: "./js-storefront/markethub/src/assets/i18n-assets/<language>/mcms.json",
          tag: "storefront:i18n:mcms.json",
          key_prefix: "storefront_i18n_mcms-"
        },
        {
          exclude_languages: ["en"],
          file_format: "react_nested_json",
          path: "./js-storefront/markethub/src/assets/i18n-assets/<language>/createuser.json",
          tag: "storefront:i18n:createuser.json",
          key_prefix: "storefront_i18n_createuser-"
        },
        {
          exclude_languages: ["en"],
          file_format: "react_nested_json",
          path: "./js-storefront/markethub/src/assets/i18n-assets/<language>/rolesandprivileges.json",
          tag: "storefront:i18n:rolesandprivileges.json",
          key_prefix: "storefront_i18n_rolesandprivileges-"
        },
        {
          exclude_languages: ["en"],
          file_format: "react_nested_json",
          path: "./js-storefront/markethub/src/assets/i18n-assets/<language>/profile.json",
          tag: "storefront:i18n:profile.json",
          key_prefix: "storefront_i18n_profile-"
        },
        {
          exclude_languages: ["en"],
          file_format: "java_properties",
          path: "./core-customize/hybris/bin/custom/markethub-financials/financialsfacades/resources/localization/financialsfacades-locales_<language>.properties",
          tag: "storefront:java_properties:financialsfacades-locales",
          key_prefix: "storefront:java_properties:financialsfacades-locales"
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
  }
};

// Function to create a file with sample content
function createFile(filePath, content) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, "utf8");
  console.log(`✅ Created: ${filePath}`);
}

// Generate source files
config.app.push.source.forEach(fileConfig => {
  let content = "";
  
  if (fileConfig.file_format === "react_nested_json") {
    content = JSON.stringify(sampleStrings.react_nested_json, null, 2);
  } else if (fileConfig.file_format === "java_properties") {
    content = Object.values(sampleStrings.java_properties).join("\n");
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
      filePath = filePath.replace("<language>", lang);
      content = Object.values(sampleStrings.java_properties).join("\n");
    }

    createFile(filePath, content);
  });
});

console.log("🎉 All localization files created successfully!");
