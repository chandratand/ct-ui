import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ThemeControls } from "@/app/theme-controls";
import { findDocsPage, publishedDocsItems } from "../manifest";

export function generateStaticParams() {
  return publishedDocsItems.map((item) => ({ name: item.name }));
}

export async function generateMetadata({ params }: PageProps<"/docs/[name]">): Promise<Metadata> {
  const found = findDocsPage((await params).name);
  return found ? { title: `${found.item.title} — chandratand/ui` } : {};
}

export default async function DocsPage({ params }: PageProps<"/docs/[name]">) {
  const found = findDocsPage((await params).name);
  if (!found) notFound();
  const { item, Body } = found;

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-12">
      <header className="flex flex-col gap-4 border-b border-border pb-8">
        <Link href="/" className="font-mono text-sm text-muted-foreground hover:text-foreground">
          chandratand/ui
        </Link>
        <h1 className="text-4xl font-semibold">{item.title}</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">{item.description}</p>
        <pre className="w-fit rounded-md border border-border bg-muted px-3 py-2 font-mono text-sm">
          <code>npx shadcn add chandratand/ui/{item.name}</code>
        </pre>
        <ThemeControls />
      </header>
      <Body />
    </main>
  );
}
