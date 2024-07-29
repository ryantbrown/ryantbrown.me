import { Avatar } from "./avatar";
import { Container } from "./container";
import { DesktopNavigation, MobileNavigation } from "./navigation";

export function Header() {
  return (
    <header className="pointer-events-none relative z-50 flex flex-none flex-col">
      <div className="top-0 z-10 pt-6">
        <Container className="top-6 w-full">
          <div className="relative flex gap-4">
            <div className="flex flex-1">
              <Avatar />
            </div>
            <div className="flex flex-1 justify-end md:justify-end">
              <MobileNavigation className="pointer-events-auto md:hidden" />
              <DesktopNavigation className="pointer-events-auto hidden md:block" />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
