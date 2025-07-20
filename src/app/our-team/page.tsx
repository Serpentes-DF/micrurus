import GridCard from "@/components/layout/gridCard/gridCard";
import Menu from "@/components/ui/Menu/menu";
import Title from "@/components/ui/Title/title";

export default function ourTeam() {
  /* 
    1 - Voluntários
    2 - Colaboradores Externos
  */

  const profileType = 1;
  return (
    <div>
      <Menu />
      <Title title={"Nossa Equipe"} />
      <GridCard profileType={profileType} />
    </div>
  );
}
