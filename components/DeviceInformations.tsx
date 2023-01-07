import React from "react";
import { CpuInfo } from "os";
import { toMinutes } from "../lib/dateHelpers";

type Props = {
  hostname: string;
  cpus: CpuInfo[];
  uptime: number;
};

export const DeviceInformations = (deviceInfos: Partial<Props>) => {
  if (!deviceInfos.hostname || !deviceInfos.uptime) return null;
  return (
    <div>
      <p>
        Vous avez fait la requête depuis : {deviceInfos.hostname} (
        {deviceInfos?.cpus?.[0].model})
      </p>
      <p>
        Votre PC est allumé depuis{" "}
        <span className="italic">
          {toMinutes(deviceInfos.uptime)} minutes !{" "}
        </span>
        , il serait peut être temps de le laisser se reposer !
      </p>
    </div>
  );
};
