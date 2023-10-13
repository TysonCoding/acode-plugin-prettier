import prettier from "prettier/standalone";
import prettierParserHTML from "prettier/plugins/html";
import prettierParserBabel from "prettier/plugins/babel";
import prettierParserGraphql from "prettier/plugins/graphql";
import prettierParserAngular from "prettier/plugins/angular";
import prettierParserEstree from "prettier/plugins/estree";
import prettierParserFlow from "prettier/plugins/flow";
import prettierParserGlimmer from "prettier/plugins/glimmer";
import prettierParserMd from "prettier/plugins/markdown";
import prettierParserMeriyah from "prettier/plugins/meriyah";
import prettierParserPostcss from "prettier/plugins/postcss";
import prettierParserTypescript from "prettier/plugins/typescript";
import prettierParserYaml from "prettier/plugins/yaml";
import prettierPluginAcorn from 'prettier/plugins/acorn'

self.acodePluginPrettier = {
    prettier,
    plugins: [
        prettierParserBabel,
        prettierParserGraphql,
        prettierParserAngular,
        prettierParserEstree,
        prettierParserFlow,
        prettierParserGlimmer,
        prettierParserHTML,
        prettierParserMd,
        prettierParserMeriyah,
        prettierParserPostcss,
        prettierParserTypescript,
        prettierParserYaml,
        prettierPluginAcorn,
    ],
};
