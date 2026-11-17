import registry from "@/registry.json";

import { docsPages } from "./_pages";

const documentedTypes = new Set(["registry:ui", "registry:block"]);

/** Components and Blocks in the registry manifest: each one gets a docs page. */
const docsItems = registry.items.filter((item) => documentedTypes.has(item.type));

/** Items whose docs page exists, i.e. the routes under `/docs/<name>`. */
export const publishedDocsItems = docsItems.filter((item) => item.name in docsPages);

/** The item and its page body for `/docs/<name>`, or null when either is missing. */
export function findDocsPage(name: string) {
  const item = docsItems.find((candidate) => candidate.name === name);
  const Body = docsPages[name];
  return item && Body ? { item, Body } : null;
}
