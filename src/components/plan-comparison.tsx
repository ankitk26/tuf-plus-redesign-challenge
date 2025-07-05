import { freePaidfeatures } from "@/constants/freePaidFeatures";
import FeatureCell from "./feature-cell";
import { useTheme } from "./theme-provider";

export default function PlanComparison() {
  const { theme } = useTheme();

  return (
    <section className="space-y-8">
      <h3 className="text-2xl font-medium">Compare what you learn</h3>
      <div className="border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full table-fixed">
            {/* Header */}
            <thead>
              <tr className="border-b bg-muted/30">
                <th className="text-left p-4 lg:p-6 font-medium text-card-foreground w-1/3">
                  Features
                </th>
                <th className="text-center p-4 lg:p-6 font-medium text-card-foreground w-1/3">
                  <div className="space-y-1 flex items-center justify-center">
                    <img
                      src={
                        theme === "dark"
                          ? "https://takeuforward.org/static/media/TufLogoWhite.55c3498a0dd7701d258e.png"
                          : "https://takeuforward.org/static/media/Tuf%20Logo%20B.a2ce02c035734f237b8a.png"
                      }
                      alt="tuf-free"
                      className="w-20"
                    />
                  </div>
                </th>
                <th className="text-center p-4 lg:p-6 font-medium text-card-foreground w-1/3">
                  <div className="space-y-1 flex items-center justify-center">
                    <img
                      src={
                        theme === "dark"
                          ? "https://takeuforward.org/static/media/TufPlusLight.041fc694d612b3fbaaa0.png"
                          : "https://takeuforward.org/static/media/TufPlusDark.2f9770f2ccd35b40c4c5.png"
                      }
                      alt="tuf-free"
                      className="w-20"
                    />
                  </div>
                </th>
              </tr>
            </thead>
            {/* Body */}
            <tbody>
              {freePaidfeatures.map((feature, index) => (
                <tr
                  key={feature.name}
                  className={`border-b last:border-b-0 ${
                    index % 2 === 0 ? "bg-card" : "bg-muted/10"
                  }`}
                >
                  <td className="p-4 lg:p-6 w-1/3">
                    <div className="space-y-1">
                      <div className="font-medium text-card-foreground">
                        {feature.name}
                      </div>
                    </div>
                  </td>
                  <td className="p-4 lg:p-6 w-1/3">
                    <FeatureCell value={feature.free} />
                  </td>
                  <td className="p-4 lg:p-6 w-1/3">
                    <FeatureCell value={feature.premium} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
