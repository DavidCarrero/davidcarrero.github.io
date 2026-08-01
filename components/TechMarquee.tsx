const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const TECHS: { name: string; icon: string }[] = [
  { name: "NestJS", icon: `${DEVICON}/nestjs/nestjs-original.svg` },
  { name: "ASP.NET Core", icon: `${DEVICON}/dotnetcore/dotnetcore-original.svg` },
  { name: "C#", icon: `${DEVICON}/csharp/csharp-original.svg` },
  { name: "TypeScript", icon: `${DEVICON}/typescript/typescript-original.svg` },
  { name: "Node.js", icon: `${DEVICON}/nodejs/nodejs-original.svg` },
  { name: "React", icon: `${DEVICON}/react/react-original.svg` },
  { name: "Next.js", icon: `${DEVICON}/nextjs/nextjs-original.svg` },
  { name: "Apache Kafka", icon: `${DEVICON}/apachekafka/apachekafka-original.svg` },
  { name: "PostgreSQL", icon: `${DEVICON}/postgresql/postgresql-original.svg` },
  { name: "MongoDB", icon: `${DEVICON}/mongodb/mongodb-original.svg` },
  { name: "Oracle", icon: `${DEVICON}/oracle/oracle-original.svg` },
  { name: "Redis", icon: `${DEVICON}/redis/redis-original.svg` },
  { name: "Elasticsearch", icon: `${DEVICON}/elasticsearch/elasticsearch-original.svg` },
  { name: "Docker", icon: `${DEVICON}/docker/docker-original.svg` },
  { name: "Kubernetes", icon: `${DEVICON}/kubernetes/kubernetes-original.svg` },
  { name: "Terraform", icon: `${DEVICON}/terraform/terraform-original.svg` },
  { name: "Azure", icon: `${DEVICON}/azure/azure-original.svg` },
  { name: "GitHub Actions", icon: `${DEVICON}/githubactions/githubactions-original.svg` },
  { name: "Tailwind CSS", icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg` },
  { name: "GraphQL", icon: `${DEVICON}/graphql/graphql-plain.svg` },
];

function Row() {
  return (
    <div className="marquee-row">
      {TECHS.map((t) => (
        <span key={t.name} className="marquee-item">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={t.icon} alt="" aria-hidden width={22} height={22} loading="lazy" />
          {t.name}
        </span>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section aria-label="Technologies" className="marquee-section">
      <div className="marquee">
        <div className="marquee-track">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  );
}
