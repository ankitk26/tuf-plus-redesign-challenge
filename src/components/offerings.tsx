import {
  BookAIcon,
  BookCheckIcon,
  BoxesIcon,
  BrainCircuitIcon,
  Building2Icon,
  CodeSquareIcon,
  CpuIcon,
  DatabaseIcon,
  FileDigitIcon,
  LightbulbIcon,
  MonitorIcon as MonitorCogIcon,
  NetworkIcon,
  NotebookTextIcon,
} from "lucide-react";
import OfferingCard from "./offering-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";

export default function Offerings() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-medium">
          Everything you need to{" "}
          <span className="text-primary font-mono">crack interviews</span>
        </h3>
      </div>

      <div className="border rounded-lg p-4 lg:p-6">
        <Tabs className="space-y-6">
          {/* Responsive Tabs List */}
          <div className="overflow-x-auto">
            <TabsList className="bg-transparent w-full justify-start min-w-max">
              <TabsTrigger
                value="dsa"
                className="px-4 py-3 lg:px-8 lg:py-4 text-sm lg:text-base whitespace-nowrap"
              >
                DSA
              </TabsTrigger>
              <TabsTrigger
                value="premium"
                className="px-4 py-4 lg:px-8 lg:py-4 text-sm lg:text-base whitespace-nowrap"
              >
                Premium
                <Badge>New</Badge>
              </TabsTrigger>
              <TabsTrigger
                value="core-subjects"
                className="px-4 py-3 lg:px-8 lg:py-4 text-sm lg:text-base whitespace-nowrap"
              >
                Core Subjects
              </TabsTrigger>
              <TabsTrigger
                value="system-design"
                className="px-4 py-3 lg:px-8 lg:py-4 text-sm lg:text-base whitespace-nowrap"
              >
                System Design
                <Badge>New</Badge>
              </TabsTrigger>
              <TabsTrigger
                value="aptitude"
                className="px-4 py-3 lg:px-8 lg:py-4 text-sm lg:text-base whitespace-nowrap"
              >
                Aptitude
                <Badge>New</Badge>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="dsa">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
              <OfferingCard
                title="DSA"
                description="Designed for beginners as well as experts to prepare DSA"
                icon={BoxesIcon}
                points={["19+ topics", "16+ contests", "473+ problems"]}
              />
              <OfferingCard
                title="DSA (Concept revision)"
                description="Suitable for people looking to study concepts for similar kind of problems"
                icon={LightbulbIcon}
                points={["40+ topics", "199+ problems"]}
              />
              <OfferingCard
                title="DSA (Quick revision)"
                description="Suitable to bump up your last moment confidence with quick revision"
                icon={NotebookTextIcon}
                points={["10+ topics", "79+ problems"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="premium">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
              <OfferingCard
                title="Premium"
                description="Set of 1000+ problems with company tags and difficulty to help you prepare end to end"
                icon={Building2Icon}
                points={["1000+ problems"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="core-subjects">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
              <OfferingCard
                title="Computer Networks"
                description="Student friendly structured course, helping individual to prepare and assess knowledge post module completion"
                icon={NetworkIcon}
                points={["10+ modules", "50+ chapters"]}
              />
              <OfferingCard
                title="DBMS"
                description="Student friendly structured course, helping individual to prepare and assess knowledge post module completion"
                icon={DatabaseIcon}
                points={["14+ modules", "108+ chapters"]}
              />
              <OfferingCard
                title="Operating System"
                description="Student friendly structured course, helping individual to prepare and assess knowledge post module completion"
                icon={CpuIcon}
                points={["9+ modules", "61+ chapters"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="system-design">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
              <OfferingCard
                title="Low Level Design (LLD)"
                description="Level up LLD with video content on each concepts"
                icon={MonitorCogIcon}
                points={["13+ topics", "46+ problems"]}
              />
              <OfferingCard
                title="OOPs"
                description="Bridging all gaps to make you system design ready!"
                icon={CodeSquareIcon}
                points={["6+ topics", "52+ problems"]}
              />
            </div>
          </TabsContent>

          <TabsContent value="aptitude">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-6">
              <OfferingCard
                title="Logical Reasoning"
                description="Widely thought of college grads/professionals covering basic to advance topics"
                icon={BrainCircuitIcon}
                points={["13+ topics", "720+ problems"]}
              />
              <OfferingCard
                title="Mock Test"
                description="Practice tests to evaluate your preparation and performance"
                icon={BookCheckIcon}
                points={["3+ topics", "1500+ problems"]}
              />
              <OfferingCard
                title="Quantitative Aptitude"
                description="Widely thought of college grads/professionals covering basic to advance topics"
                icon={FileDigitIcon}
                points={["25+ topics", "1500+ problems"]}
              />
              <OfferingCard
                title="Verbal Ability"
                description="Widely thought of college grads/professionals covering basic to advance topics"
                icon={BookAIcon}
                points={["8+ topics", "480+ problems"]}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
