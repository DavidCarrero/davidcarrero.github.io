const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

// Mapa de tecnología -> icono real (Devicon). Las que no tienen logo quedan como texto.
const ICONS: Record<string, string> = {
  NestJS: `${DEVICON}/nestjs/nestjs-original.svg`,
  "Node.js": `${DEVICON}/nodejs/nodejs-original.svg`,
  TypeScript: `${DEVICON}/typescript/typescript-original.svg`,
  "ASP.NET Core": `${DEVICON}/dotnetcore/dotnetcore-original.svg`,
  "ASP.NET Core 9": `${DEVICON}/dotnetcore/dotnetcore-original.svg`,
  "C#": `${DEVICON}/csharp/csharp-original.svg`,
  GraphQL: `${DEVICON}/graphql/graphql-plain.svg`,
  React: `${DEVICON}/react/react-original.svg`,
  "Next.js": `${DEVICON}/nextjs/nextjs-original.svg`,
  "Tailwind CSS": `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
  Redux: `${DEVICON}/redux/redux-original.svg`,
  "Redux/Zustand": `${DEVICON}/redux/redux-original.svg`,
  PostgreSQL: `${DEVICON}/postgresql/postgresql-original.svg`,
  MongoDB: `${DEVICON}/mongodb/mongodb-original.svg`,
  "Oracle DB / PL-SQL": `${DEVICON}/oracle/oracle-original.svg`,
  Oracle: `${DEVICON}/oracle/oracle-original.svg`,
  OCI: `${DEVICON}/oracle/oracle-original.svg`,
  "OCI Streaming": `${DEVICON}/apachekafka/apachekafka-original.svg`,
  Redis: `${DEVICON}/redis/redis-original.svg`,
  Elasticsearch: `${DEVICON}/elasticsearch/elasticsearch-original.svg`,
  "Apache Kafka": `${DEVICON}/apachekafka/apachekafka-original.svg`,
  Docker: `${DEVICON}/docker/docker-original.svg`,
  Kubernetes: `${DEVICON}/kubernetes/kubernetes-original.svg`,
  Terraform: `${DEVICON}/terraform/terraform-original.svg`,
  Azure: `${DEVICON}/azure/azure-original.svg`,
  "Azure DevOps": `${DEVICON}/azuredevops/azuredevops-original.svg`,
  "GitHub Actions": `${DEVICON}/githubactions/githubactions-original.svg`,
  Jenkins: `${DEVICON}/jenkins/jenkins-original.svg`,
  Python: `${DEVICON}/python/python-original.svg`,
  OpenCV: `${DEVICON}/opencv/opencv-original.svg`,
};

export default function TechChip({ name }: { name: string }) {
  const icon = ICONS[name];
  return (
    <span className="chip inline-flex items-center gap-1.5">
      {icon && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={icon}
          alt=""
          aria-hidden
          width={14}
          height={14}
          loading="lazy"
          className="inline-block"
        />
      )}
      {name}
    </span>
  );
}
