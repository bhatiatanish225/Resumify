import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/ui/section';
import { cn } from '@/lib/utils';

type Skills = readonly string[];

interface SkillsProps {
  skills: Skills;
  className?: string;
}

/**
 * Skills section component
 * Displays a list of professional skills as badges
 */
export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        Skills
      </h2>
      <ul
        className={cn('flex list-none flex-wrap gap-1 p-0')}
        aria-label="List of skills"
        aria-labelledby="skills-section"
      >
        {skills.map((skill) => (
          <li key={skill}>
            <Badge
              className="print:text-[10px] pointer-events-none"
              aria-label={`Skill: ${skill}`}
            >
              {skill}
            </Badge>
          </li>
        ))}
      </ul>
    </Section>
  );
}
