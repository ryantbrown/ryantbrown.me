import { Avatar } from "./avatar";
import { ContentContainer } from "./container";
import { DesktopNavigation, MobileNavigation } from "./navigation";

export function Header() {
  return (
    <header className="pointer-events-none relative z-50">
      <ContentContainer>
        <div className="flex items-center gap-4 py-4 md:py-6">
          <Avatar />
          <div className="flex flex-1 justify-end md:justify-end">
            <MobileNavigation className="pointer-events-auto md:hidden" />
            <DesktopNavigation className="pointer-events-auto hidden md:block" />
          </div>
        </div>
      </ContentContainer>
    </header>
  );
}
