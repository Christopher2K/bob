import { getDefaultConfig, type MetroConfig } from "expo/metro-config";

const config = getDefaultConfig(__dirname) as MetroConfig;

// @ts-expect-error
config.resolver.sourceExts.push("sql");

module.exports = config;
