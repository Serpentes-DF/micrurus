import ProfileCard from "@/components/ui/ProfileCard/profile-card";
import styles from "./gridCard.module.css";

export default function GridCard({ profileType }: { profileType: number }) {
  return (
    <div className={styles.DivMain}>
      <ProfileCard profileType={profileType} />
    </div>
  );
}
