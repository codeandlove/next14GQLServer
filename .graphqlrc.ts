import type { CodegenConfig } from "@graphql-codegen/cli";
import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";

const config = {
  overwrite: true,
  schema: "./api/schema/*.graphql",
  generates: {
    "api/graphql/": defineConfig({
      typesPluginsConfig: {
        optionalInfoArgument: true
      },
      scalarsOverrides: {
        ID: {
          type: "string",
        },
        DateTime: {
          type: "Date"
        }
      },
    }),
  },
  hooks: {
    afterAllFileWrite: ["pnpm prettier --write"],
  },
} satisfies CodegenConfig;

export default config;