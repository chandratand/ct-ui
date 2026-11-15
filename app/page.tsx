import { ArrowRight, CircleAlert, CircleCheck, Info, Plus, TriangleAlert } from "lucide-react";

import { Badge } from "@/registry/ct-ui/ui/badge";
import { Button } from "@/registry/ct-ui/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ct-ui/ui/card";
import { Checkbox } from "@/registry/ct-ui/ui/checkbox";
import { Input } from "@/registry/ct-ui/ui/input";
import { Label } from "@/registry/ct-ui/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/ct-ui/ui/select";
import { Switch } from "@/registry/ct-ui/ui/switch";
import { Textarea } from "@/registry/ct-ui/ui/textarea";
import { ThemeControls } from "./theme-controls";

const brandSteps = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];
const chartTokens = ["chart-1", "chart-2", "chart-3", "chart-4", "chart-5"];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-12">
      <header className="flex flex-col gap-4 border-b border-border pb-8">
        <p className="font-mono text-sm text-muted-foreground">ct-ui · v0.1</p>
        <h1 className="text-4xl font-semibold md:text-5xl">chandratand design system</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Tokens and components shared by the portfolio and the SaaS. Calm, precise, trustworthy.
        </p>
        <ThemeControls />
      </header>

      <Section title="Brand ramp">
        <div className="grid grid-cols-11 overflow-hidden rounded-lg border border-border">
          {brandSteps.map((s) => (
            <div key={s} className="flex flex-col">
              <div className="h-14" style={{ background: `var(--brand-${s})` }} />
              <span className="py-1 text-center font-mono text-xs text-muted-foreground">{s}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">
            <Plus aria-hidden /> Small
          </Button>
          <Button size="md">
            Medium <ArrowRight aria-hidden />
          </Button>
          <Button size="lg">Large (touch)</Button>
          <Button size="icon" variant="outline" aria-label="Add">
            <Plus aria-hidden />
          </Button>
          <Button disabled>Disabled</Button>
        </div>
      </Section>

      <Section title="Inputs">
        <div className="grid max-w-md gap-3">
          <Input size="sm" placeholder="Small — dense ERP forms" />
          <Input placeholder="Medium — default" />
          <Input size="lg" placeholder="Large — touch / kiosk" />
          <Input placeholder="Invalid" aria-invalid defaultValue="not-an-email" />
        </div>
      </Section>

      <Section title="Form controls">
        <div className="grid max-w-md gap-6">
          <div className="grid gap-2">
            <Label htmlFor="demo-name">Company name</Label>
            <Input id="demo-name" placeholder="PT Contoh Jaya" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="demo-notes">Notes (optional)</Label>
            <Textarea id="demo-notes" placeholder="Anything the client should know" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="demo-terms">Payment terms</Label>
            <Select defaultValue="net30">
              <SelectTrigger id="demo-terms">
                <SelectValue placeholder="Choose terms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="due">Due on receipt</SelectItem>
                <SelectItem value="net14">Net 14</SelectItem>
                <SelectItem value="net30">Net 30</SelectItem>
                <SelectItem value="net60" disabled>
                  Net 60
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {(["sm", "md", "lg"] as const).map((s) => (
              <Select key={s}>
                <SelectTrigger size={s} className="w-44" aria-label={`Currency (${s})`}>
                  <SelectValue placeholder={`Currency · ${s}`} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="idr">IDR</SelectItem>
                  <SelectItem value="usd">USD</SelectItem>
                </SelectContent>
              </Select>
            ))}
          </div>
          <div className="grid gap-3">
            <Label>
              <Checkbox defaultChecked /> Send a copy to me
            </Label>
            <Label>
              <Checkbox checked="indeterminate" /> Select all rows (partial)
            </Label>
            <Label>
              <Checkbox size="lg" /> Large (touch)
            </Label>
            <Label>
              <Checkbox disabled /> Disabled
            </Label>
          </div>
          <div className="grid gap-3">
            <Label>
              <Switch size="sm" /> Compact rows
            </Label>
            <Label>
              <Switch defaultChecked /> Auto-backup
            </Label>
            <Label>
              <Switch size="lg" defaultChecked /> Email notifications
            </Label>
            <Label>
              <Switch disabled /> Disabled
            </Label>
          </div>
        </div>
      </Section>

      <Section title="Badges">
        <div className="flex flex-wrap gap-2">
          <Badge>Neutral</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">
            <CircleCheck aria-hidden /> Paid
          </Badge>
          <Badge variant="warning">
            <TriangleAlert aria-hidden /> Due soon
          </Badge>
          <Badge variant="destructive">
            <CircleAlert aria-hidden /> Overdue
          </Badge>
          <Badge variant="info">
            <Info aria-hidden /> Draft
          </Badge>
        </div>
      </Section>

      <Section title="Card">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Invoice #1042</CardTitle>
            <CardDescription>Bordered surface, no shadow.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <span className="font-mono text-2xl tabular-nums">Rp 4.250.000</span>
            <Badge variant="success">Paid</Badge>
          </CardContent>
          <CardFooter>
            <Button size="sm" variant="outline">
              View
            </Button>
            <Button size="sm">Send reminder</Button>
          </CardFooter>
        </Card>
      </Section>

      <Section title="Chart palette">
        <div className="flex gap-2">
          {chartTokens.map((t) => (
            <div key={t} className="flex flex-col items-center gap-1">
              <div className="size-12 rounded-md" style={{ background: `var(--${t})` }} />
              <span className="font-mono text-xs text-muted-foreground">{t}</span>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
