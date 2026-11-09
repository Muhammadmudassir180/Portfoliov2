import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { buildJourney, experience, projects, projectFilters } from './portfolio';
import Home from './pages/Home/Home';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';

test('timeline is built from jobs and degrees, oldest first', () => {
  const steps = buildJourney(
    [{ title: 'Engineer', company: 'Long Company Name', companyShort: 'LCN', period: 'June 2022 to 2024' }],
    [
      { short: 'MS CS', institution: 'Uni', period: '2024 to present', gpa: '4' },
      { short: 'BS EE', institution: 'College', period: '2018 to 2022', gpa: '3' }
    ]
  );
  expect(steps.map((s) => `${s.year} ${s.title}`)).toEqual([
    '2018 Started BS EE',
    '2022 Joined LCN',
    '2022 Graduated',
    '2024 Started MS CS'
  ]);
});

test('entries in the same year read oldest to newest', () => {
  const jobs = [
    { title: 'B', company: 'Later', period: 'July 2027 to December 2027' },
    { title: 'A', company: 'Earlier', period: 'January 2027 to June 2027' }
  ];
  expect(buildJourney(jobs, []).map((s) => s.title)).toEqual(['Joined Earlier', 'Joined Later']);
});

test('an entry with no year in its period is skipped instead of crashing', () => {
  expect(buildJourney([{ title: 'X', company: 'Y', period: 'Recently' }], [])).toEqual([]);
});

test.each([
  ['Home', Home], ['Experience', Experience], ['Education', Education], ['Projects', Projects],
  ['About', About], ['Contact', Contact], ['Resume', Resume]
])('%s renders from portfolio.js', (_, Page) => {
  const { container } = render(<MemoryRouter><Page /></MemoryRouter>);
  expect(container.querySelector('h1')).not.toBeEmptyDOMElement();
});

test('adding a job reaches the Resume page, capped at 4 bullets each', () => {
  const { container } = render(<MemoryRouter><Resume /></MemoryRouter>);
  for (const job of experience) expect(screen.getAllByText(new RegExp(job.company)).length).toBeGreaterThan(0);
  expect(container.querySelectorAll('.r-item .list li').length).toBeLessThanOrEqual(experience.length * 4);
});

test('every project belongs to a filter that exists', () => {
  const keys = projectFilters.map((f) => f.key);
  for (const p of projects) expect(keys).toContain(p.category);
});
