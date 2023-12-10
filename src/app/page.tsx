import { Codepen, Github } from "lucide-react";
import { Grid } from "./(components)/Grid";
import { ButtonCopy } from "./(components)/ButtonCopy";
import { BoxCompletion } from "./(components)/BoxCompletion";
import { Code } from "bright";
import { myTheme } from "@/lib/codeHighlightTheme";
import { Card } from "./(components)/Card";
import { Symbols } from "./(components)/Symbols";
import { Sign } from "./(components)/Sign";
import Image from "next/image";

Code.theme = myTheme;

const quickStart = `
import { GravityScrollArea } from "react-gravity-scroll";

export default function App() {
  const { content } = ...

  return (
    <GravityScrollArea
        autoScrollEnabled
        scrollThreshold={200}
        >
        {content}
    </GravityScrollArea>
  )
}
`.trim();

const radixExample = `
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { useGravityScroll, GravityScrollAreaProps } from "react-gravity-scroll";

export function RadixGravityScroll({
  children,
  scrollThreshold,
  autoScrollEnabled,
}: GravityScrollAreaProps) {
  const { scrollAreaProps, viewportProps } = useGravityScroll({
    autoScrollEnabled,
    scrollThreshold,
  });

  return (
    <ScrollArea.Root>
      {/* The viewport is the element with overflow: scroll */}
      <ScrollArea.Viewport {...scrollAreaProps}>
        {/* Here we add the gravity viewport that contains the content of the ScrollArea */}
        <div {...viewportProps}>{children}</div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar orientation="vertical">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}
`.trim();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-6 md:pt-20 px-6 pb-20 md:pb-40 relative">
      <Grid
        className="absolute top-0 left-0 w-full h-full -z-10"
        squareColor="rgba(0,0,0,0.05)"
        squareSize={40}
      />
      <div className="flex flex-col max-w-[600px] w-full gap-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between items-start gap-4">
              <div className="flex items-center">
                <Image
                  src="/logo.png"
                  width={1024}
                  height={1024}
                  alt=""
                  className="w-12 h-12"
                />
                <div className="text-4xl font-bold">RGScroll</div>
              </div>

              <div className="flex items-center gap-2 flex-row-reverse md:flex-row">
                <ButtonCopy />
                <a href="https://github.com/marcoripa96/react-gravity-scroll">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <p className="text-black/50 text-xl">
              React Gravity Scroll is a simple component and hook to keep your
              container anchored to the bottom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-2 md:gap-y-2 gap-y-4">
            <div className="flex flex-row items-center gap-2">
              <span className="w-6 h-6 bg-black/5 rounded-full flex items-center justify-center">
                <Codepen className="w-4 h-4 text-black/50" />
              </span>
              <span>Small and dependency free</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <span className="w-6 h-6 bg-black/5 rounded-full flex items-center justify-center">
                <Codepen className="w-4 h-4 text-black/50" />
              </span>
              <span>SSR compatible</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <span className="w-6 h-6 bg-black/5 rounded-full flex items-center justify-center">
                <Codepen className="w-4 h-4 text-black/50" />
              </span>
              <span>Headless</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <span className="w-6 h-6 bg-black/5 rounded-full flex items-center justify-center">
                <Codepen className="w-4 h-4 text-black/50" />
              </span>
              <span>Simple and customizable</span>
            </div>
          </div>
        </div>

        <BoxCompletion />

        <div className="flex items-center justify-center">
          <Symbols />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-medium">Quick start</h3>
          <p className="text-black/50">
            ReactGravityScroll ships with a pre-built{" "}
            <span className="bg-white/60 rounded-md px-1 italic">
              GravityScrollArea
            </span>{" "}
            component. You can easily use it in your project as follows:
          </p>

          <Card className="shadow-none h-auto">
            <Code lang="ts" className="z-10" style={{ margin: 0 }} lineNumbers>
              {quickStart}
            </Code>
          </Card>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-medium">
            Build your own GravityScroller
          </h3>
          <p className="text-black/50">
            You can also use the{" "}
            <span className="bg-white/60 rounded-md px-1 italic">
              useGravityScroll
            </span>{" "}
            hook to build your own gravity scroller component. For example let's
            use Radix ScrollArea primitive component:
          </p>

          <Card className="shadow-none h-auto">
            <Code lang="ts" className="z-10" style={{ margin: 0 }} lineNumbers>
              {radixExample}
            </Code>
          </Card>
        </div>

        <div className="flex items-center justify-center">
          <Symbols />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Sign />
        </div>
      </div>
    </main>
  );
}
