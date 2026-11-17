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
import { Alert, AlertDescription, AlertTitle } from "@/registry/ct-ui/ui/alert";
import { Avatar, AvatarFallback, AvatarGroup } from "@/registry/ct-ui/ui/avatar";
import { RadioGroup, RadioGroupItem } from "@/registry/ct-ui/ui/radio-group";
import { Separator } from "@/registry/ct-ui/ui/separator";
import { Skeleton } from "@/registry/ct-ui/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/ct-ui/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/ct-ui/ui/tabs";
import { DemoOverlays } from "./demo-overlays";
import { ThemeControls } from "./theme-controls";

const invoices = [
  { id: "INV-1042", client: "PT Contoh Jaya", status: "Paid", amount: "Rp 4.250.000" },
  { id: "INV-1043", client: "CV Maju Bersama", status: "Due", amount: "Rp 1.800.000" },
  { id: "INV-1044", client: "Toko Sinar", status: "Paid", amount: "Rp 920.000" },
];

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

      <Section title="Overlays">
        <DemoOverlays />
      </Section>

      <Section title="Alerts">
        <div className="grid max-w-xl gap-3">
          <Alert>
            <Info aria-hidden />
            <AlertTitle>New tax rules from 1 January</AlertTitle>
            <AlertDescription>Invoices issued after this date use 12% VAT.</AlertDescription>
          </Alert>
          <Alert variant="info">
            <Info aria-hidden />
            <AlertTitle>Draft</AlertTitle>
            <AlertDescription>This invoice has not been sent yet.</AlertDescription>
          </Alert>
          <Alert variant="success">
            <CircleCheck aria-hidden />
            <AlertTitle>Payment received</AlertTitle>
          </Alert>
          <Alert variant="warning">
            <TriangleAlert aria-hidden />
            <AlertTitle>Due in 3 days</AlertTitle>
          </Alert>
          <Alert variant="destructive">
            <CircleAlert aria-hidden />
            <AlertTitle>Could not send invoice</AlertTitle>
            <AlertDescription>The client email address bounced. Check it and try again.</AlertDescription>
          </Alert>
        </div>
      </Section>

      <Section title="Tabs">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="text-sm text-muted-foreground">
            Segmented tabs (default).
          </TabsContent>
          <TabsContent value="invoices" className="text-sm text-muted-foreground">
            12 open invoices.
          </TabsContent>
          <TabsContent value="settings" className="text-sm text-muted-foreground">
            Workspace settings.
          </TabsContent>
        </Tabs>
        <Tabs defaultValue="activity">
          <TabsList variant="line">
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>
          <TabsContent value="activity" className="text-sm text-muted-foreground">
            Line tabs, for page sections.
          </TabsContent>
          <TabsContent value="payments" className="text-sm text-muted-foreground">
            2 payments.
          </TabsContent>
          <TabsContent value="notes" className="text-sm text-muted-foreground">
            No notes.
          </TabsContent>
        </Tabs>
      </Section>

      <Section title="Table">
        {(["comfortable", "compact"] as const).map((density) => (
          <div key={density} className="rounded-lg border border-border">
            <Table density={density}>
              <TableCaption className="mb-3">{density} density</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((inv) => (
                  <TableRow key={inv.id}>
                    <TableCell className="font-mono">{inv.id}</TableCell>
                    <TableCell>{inv.client}</TableCell>
                    <TableCell>
                      <Badge variant={inv.status === "Paid" ? "success" : "warning"}>
                        {inv.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right tabular-nums">{inv.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}
      </Section>

      <Section title="Radio group">
        <RadioGroup defaultValue="transfer" className="max-w-md">
          <Label>
            <RadioGroupItem value="transfer" /> Bank transfer
          </Label>
          <Label>
            <RadioGroupItem value="card" /> Card
          </Label>
          <Label>
            <RadioGroupItem value="cash" size="lg" /> Cash (large, touch)
          </Label>
          <Label>
            <RadioGroupItem value="crypto" disabled /> Crypto (disabled)
          </Label>
        </RadioGroup>
      </Section>

      <Section title="Avatar, separator, skeleton">
        <div className="flex items-center gap-4">
          <Avatar size="sm">
            <AvatarFallback>CT</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>CT</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>CT</AvatarFallback>
          </Avatar>
          <Separator orientation="vertical" className="h-8!" />
          <AvatarGroup>
            {["AB", "CD", "EF"].map((i) => (
              <Avatar key={i}>
                <AvatarFallback>{i}</AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>
        </div>
        <Separator />
        <div className="flex max-w-sm items-center gap-3" aria-busy="true">
          <Skeleton className="size-control-md rounded-full" />
          <div className="grid flex-1 gap-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
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
