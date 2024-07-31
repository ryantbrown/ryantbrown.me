import { Button } from "../components/button";

export default function NotFound() {
  return (
    <div className="mx-auto size-full max-w-6xl pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <p className="font-semibold text-base text-gray-400 dark:text-gray-500">
          404
        </p>
        <h1 className="mt-4 font-bold text-4xl text-gray-800 tracking-tight sm:text-5xl dark:text-gray-100">
          Page not found
        </h1>
        <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button href="/" variant="secondary" className="mt-4">
          Go back home
        </Button>
      </div>
    </div>
  );
}
