import { Contact } from '@/components/modules/contact';
import { Hero } from '@/components/modules/hero';
import { Projects } from '@/components/modules/projects';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <Projects />
      <Contact />
    </main>
  );
}
