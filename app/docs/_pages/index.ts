import type { ComponentType } from "react";

import { ButtonDocs } from "./button";

/** Docs page body per registry item name. Items missing here 404 until they are migrated. */
export const docsPages: Record<string, ComponentType> = {
  button: ButtonDocs,
};
