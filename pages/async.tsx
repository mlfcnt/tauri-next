import Link from "next/link";
import React, { useRef, useState } from "react";
import { DeviceInformations } from "../components/DeviceInformations";
import useDebounce from "../lib/useDebounce";
import styles from "../styles/Home.module.css";
import { trpc } from "../utils/trpc";

const Async = () => {
  const [name, setName] = useState("");
  const debouncedName = useDebounce(name, 500);

  const { data } = trpc.hello.useQuery(
    {
      text: debouncedName,
    },
    {
      enabled: !!debouncedName,
    }
  );

  return (
    <main className={styles.main}>
      <div>
        <h1 className="text-3xl mb-9">Appel serveur</h1>
        <form>
          <label htmlFor="server" className="mr-4">
            Indiquer votre nom
          </label>
          <input
            type="text"
            name="server"
            id="server"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {data && <p>{data.greeting}</p>}
          {/* <DeviceInformations
            hostname={data?.osInfo.hostname}
            cpus={data?.osInfo.cpus}
            uptime={data?.osInfo.uptime}
          /> */}
        </form>
      </div>

      <button>
        <Link href={"/"}>Accueil</Link>
      </button>
    </main>
  );
};

export default Async;
