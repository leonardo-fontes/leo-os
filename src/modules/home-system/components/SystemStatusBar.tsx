import { statusBarStyles } from "../data/systemStyles";

export function SystemStatusBar() {
  return (
    <footer className={`${statusBarStyles.container} hidden lg:block`}>
      <div className={statusBarStyles.content}>
        <span className={statusBarStyles.title}>System Status</span>
        <span className={statusBarStyles.online}>ONLINE</span>
        <span>Location: Brazil</span>
        <span>Current Focus: Frontend Engineering</span>
      </div>
    </footer>
  );
}
