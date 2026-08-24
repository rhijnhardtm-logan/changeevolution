'use client'

import * as React from 'react'
import {
  makeStyles,
  mergeClasses,
  tokens,
  typographyStyles,
  Title1,
  Title2,
  Subtitle1,
  Body1,
  Body2,
  Caption1,
  Button,
  ToggleButton,
  Input,
  Field,
  Textarea,
  Dropdown,
  Option,
  Card,
  CardHeader,
  Divider,
  Avatar,
  Badge,
  TabList,
  Tab,
  MessageBar,
  MessageBarBody,
  Tooltip,
} from '@fluentui/react-components'
import {
  WeatherSunny24Regular,
  WeatherMoon24Regular,
  Search24Regular,
  Add24Regular,
  Lightbulb24Regular,
  ArrowRight16Regular,
  CheckmarkCircle24Regular,
  Home24Regular,
  Board24Regular,
  PeopleTeam24Regular,
  Settings24Regular,
  MoreHorizontal24Regular,
  Dismiss24Regular,
} from '@fluentui/react-icons'
import { useThemeMode } from '@/app/providers'

const stages = [
  { name: 'Capture', detail: 'Make the opportunity visible', status: 'active' },
  { name: 'Shape', detail: 'Build a shared understanding', status: 'next' },
  { name: 'Assess', detail: 'Explore value and viability', status: 'next' },
  { name: 'Decide', detail: 'Align on the right path', status: 'next' },
  { name: 'Mobilise', detail: 'Turn intent into action', status: 'next' },
]

const seedIdeas = [
  { id: 1, title: 'Reduce manual customer onboarding', owner: 'A. Patel', team: 'Customer Success', impact: 'High', updated: 'Today', description: 'Streamline handoffs and remove duplicate data entry across the onboarding journey.' },
  { id: 2, title: 'Create one view of account health', owner: 'M. Chen', team: 'Sales Operations', impact: 'Medium', updated: 'Yesterday', description: 'Bring signals from service, sales and product into a shared account view.' },
  { id: 3, title: 'Modernise field service scheduling', owner: 'J. Wilson', team: 'Field Operations', impact: 'High', updated: '2 days ago', description: 'Give dispatch teams a faster way to match work, skills and availability.' },
]

const useStyles = makeStyles({
  page: { minHeight: '100vh', backgroundColor: tokens.colorNeutralBackground2, color: tokens.colorNeutralForeground1 },
  shell: { display: 'flex', minHeight: '100vh' },
  rail: { width: 'clamp(64px, 18vw, 240px)', flexShrink: 0, display: 'flex', flexDirection: 'column', backgroundColor: tokens.colorNeutralBackground1, borderRight: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}`, paddingTop: tokens.spacingVerticalL, paddingBottom: tokens.spacingVerticalL },
  brand: { display: 'flex', alignItems: 'center', gap: tokens.spacingHorizontalS, paddingLeft: tokens.spacingHorizontalL, paddingRight: tokens.spacingHorizontalL, paddingBottom: tokens.spacingVerticalXL },
  brandMark: { width: '32px', height: '32px', display: 'grid', placeItems: 'center', borderRadius: tokens.borderRadiusMedium, backgroundColor: tokens.colorBrandBackground, color: tokens.colorNeutralForegroundOnBrand, fontWeight: tokens.fontWeightSemibold },
  brandText: { display: 'flex', flexDirection: 'column', gap: tokens.spacingVerticalNone },
  nav: { display: 'flex', flexDirection: 'column', gap: tokens.spacingVerticalXS, paddingLeft: tokens.spacingHorizontalS, paddingRight: tokens.spacingHorizontalS },
  navButton: { justifyContent: 'flex-start', width: '100%', paddingLeft: tokens.spacingHorizontalM, paddingRight: tokens.spacingHorizontalM },
  navActive: { backgroundColor: tokens.colorNeutralBackground3, color: tokens.colorBrandForeground1 },
  railFooter: { marginTop: 'auto', paddingLeft: tokens.spacingHorizontalL, paddingRight: tokens.spacingHorizontalL },
  profile: { display: 'flex', alignItems: 'center', gap: tokens.spacingHorizontalS, paddingTop: tokens.spacingVerticalM, borderTop: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}` },
  content: { flex: 1, minWidth: 0 },
  topbar: { minHeight: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: tokens.spacingHorizontalL, flexWrap: 'wrap', paddingLeft: tokens.spacingHorizontalXXL, paddingRight: tokens.spacingHorizontalXXL, backgroundColor: tokens.colorNeutralBackground1, borderBottom: `${tokens.strokeWidthThin} solid ${tokens.colorNeutralStroke2}` },
  topActions: { display: 'flex', alignItems: 'center', gap: tokens.spacingHorizontalS },
  main: { maxWidth: '1320px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: tokens.spacingHorizontalXXL, paddingRight: tokens.spacingHorizontalXXL, paddingTop: tokens.spacingVerticalXXL, paddingBottom: tokens.spacingVerticalXXXL, display: 'flex', flexDirection: 'column', gap: tokens.spacingVerticalXXL },
  breadcrumb: { display: 'flex', alignItems: 'center', gap: tokens.spacingHorizontalXS, color: tokens.colorNeutralForeground3 },
  hero: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: tokens.spacingHorizontalXXL, flexWrap: 'wrap' },
  heroCopy: { display: 'flex', flexDirection: 'column', gap: tokens.spacingVerticalS, maxWidth: '720px' },
  heroMeta: { display: 'flex', alignItems: 'center', gap: tokens.spacingHorizontalM, flexWrap: 'wrap' },
  processCard: { paddingTop: tokens.spacingVerticalL, paddingBottom: tokens.spacingVerticalL, paddingLeft: tokens.spacingHorizontalL, paddingRight: tokens.spacingHorizontalL },
  processHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: tokens.spacingHorizontalM, marginBottom: tokens.spacingVerticalL },
  stageRow: { display: 'flex', alignItems: 'flex-start', gap: 0, overflowX: 'auto', paddingBottom: tokens.spacingVerticalXS },
  stage: { minWidth: '150px', display: 'flex', flexDirection: 'column', gap: tokens.spacingVerticalXS },
  stageTop: { display: 'flex', alignItems: 'center' },
  stageDot: { width: '28px', height: '28px', display: 'grid', placeItems: 'center', borderRadius: tokens.borderRadiusCircular, backgroundColor: tokens.colorNeutralBackground3, color: tokens.colorNeutralForeground3, fontWeight: tokens.fontWeightSemibold, flexShrink: 0 },
  stageDotActive: { backgroundColor: tokens.colorBrandBackground, color: tokens.colorNeutralForegroundOnBrand },
  stageLine: { height: tokens.strokeWidthThick, flex: 1, minWidth: '40px', backgroundColor: tokens.colorNeutralStroke2 },
  stageLineActive: { backgroundColor: tokens.colorBrandBackground },
  stageName: { ...typographyStyles.subtitle2 },
  stageDetail: { color: tokens.colorNeutralForeground3 },
  sectionHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: tokens.spacingHorizontalM, flexWrap: 'wrap' },
  toolbar: { display: 'flex', alignItems: 'center', gap: tokens.spacingHorizontalS, flexWrap: 'wrap' },
  ideaGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: tokens.spacingHorizontalL },
  ideaCard: { cursor: 'pointer', transitionProperty: 'box-shadow, transform', transitionDuration: tokens.durationNormal },
  ideaCardSelected: { boxShadow: tokens.shadow8, transform: 'translateY(-2px)' },
  cardBody: { display: 'flex', flexDirection: 'column', gap: tokens.spacingVerticalM, paddingLeft: tokens.spacingHorizontalM, paddingRight: tokens.spacingHorizontalM, paddingBottom: tokens.spacingVerticalL },
  cardTags: { display: 'flex', alignItems: 'center', gap: tokens.spacingHorizontalS, flexWrap: 'wrap' },
  cardFooter: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: tokens.spacingHorizontalS, color: tokens.colorNeutralForeground3 },
  drawer: { display: 'flex', flexDirection: 'column', gap: tokens.spacingVerticalL, padding: tokens.spacingHorizontalXXL, backgroundColor: tokens.colorNeutralBackground1, borderRadius: tokens.borderRadiusLarge, boxShadow: tokens.shadow16 },
  drawerOverlay: { position: 'fixed', inset: 0, display: 'grid', placeItems: 'center', padding: tokens.spacingHorizontalL, backgroundColor: tokens.colorBackgroundOverlay, zIndex: 20 },
  drawerHeader: { display: 'flex', justifyContent: 'space-between', gap: tokens.spacingHorizontalM, alignItems: 'flex-start' },
  form: { display: 'flex', flexDirection: 'column', gap: tokens.spacingVerticalL },
  formActions: { display: 'flex', justifyContent: 'flex-end', gap: tokens.spacingHorizontalS },
  empty: { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: tokens.spacingVerticalM, paddingTop: tokens.spacingVerticalXXL, paddingBottom: tokens.spacingVerticalXXL },
  '@media (max-width: 700px)': { rail: { width: '64px' }, brand: { paddingLeft: tokens.spacingHorizontalS, paddingRight: tokens.spacingHorizontalS }, brandText: { display: 'none' }, navButton: { minWidth: 0, justifyContent: 'center', paddingLeft: 0, paddingRight: 0 }, navLabel: { display: 'none' }, railFooter: { paddingLeft: tokens.spacingHorizontalS, paddingRight: tokens.spacingHorizontalS }, profileName: { display: 'none' }, topbar: { paddingLeft: tokens.spacingHorizontalL, paddingRight: tokens.spacingHorizontalL }, main: { paddingLeft: tokens.spacingHorizontalL, paddingRight: tokens.spacingHorizontalL } },
})

export function StarterPage() {
  const styles = useStyles()
  const { mode, setMode } = useThemeMode()
  const [ideas, setIdeas] = React.useState(seedIdeas)
  const [selectedId, setSelectedId] = React.useState<number | null>(null)
  const [query, setQuery] = React.useState('')
  const [showNew, setShowNew] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [newTitle, setNewTitle] = React.useState('')
  const [newDescription, setNewDescription] = React.useState('')
  const filteredIdeas = ideas.filter((idea) => `${idea.title} ${idea.team} ${idea.description}`.toLowerCase().includes(query.toLowerCase()))
  const selected = ideas.find((idea) => idea.id === selectedId)

  function submitIdea(event: React.FormEvent) {
    event.preventDefault()
    if (!newTitle.trim()) return
    setIdeas((current) => [{ id: Date.now(), title: newTitle, owner: 'You', team: 'My team', impact: 'To assess', updated: 'Just now', description: newDescription || 'A new opportunity ready to be shaped with the right people.' }, ...current])
    setSubmitted(true)
    setNewTitle('')
    setNewDescription('')
    setShowNew(false)
  }

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <aside className={styles.rail} aria-label="Primary navigation">
          <div className={styles.brand}><div className={styles.brandMark}>F</div><div className={styles.brandText}><Subtitle1>Forward</Subtitle1><Caption1>Change workspace</Caption1></div></div>
          <nav className={styles.nav}>
            <Button className={styles.navButton} appearance="subtle" icon={<Home24Regular />}><span className={styles.navLabel}>Home</span></Button>
            <Button className={mergeClasses(styles.navButton, styles.navActive)} appearance="subtle" icon={<Lightbulb24Regular />}><span className={styles.navLabel}>Ideas</span></Button>
            <Button className={styles.navButton} appearance="subtle" icon={<Board24Regular />}><span className={styles.navLabel}>My work</span></Button>
            <Button className={styles.navButton} appearance="subtle" icon={<PeopleTeam24Regular />}><span className={styles.navLabel}>People</span></Button>
          </nav>
          <div className={styles.railFooter}><div className={styles.profile}><Avatar name="Alex Morgan" color="brand" size={32} /><div className={styles.profileName}><Body2>Alex Morgan</Body2><Caption1>Product team</Caption1></div><Button appearance="subtle" icon={<MoreHorizontal24Regular />} aria-label="More profile options" /></div></div>
        </aside>
        <div className={styles.content}>
          <header className={styles.topbar}><TabList defaultSelectedValue="ideas" size="small"><Tab value="ideas">Ideas</Tab><Tab value="process">Process</Tab><Tab value="insights">Insights</Tab></TabList><div className={styles.topActions}><Tooltip content={mode === 'light' ? 'Switch to dark theme' : 'Switch to light theme'} relationship="label"><ToggleButton checked={mode === 'dark'} onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} icon={mode === 'light' ? <WeatherMoon24Regular /> : <WeatherSunny24Regular />} appearance="subtle" aria-label="Toggle dark theme" /></Tooltip><Button appearance="subtle" icon={<Settings24Regular />} aria-label="Settings" /></div></header>
          <main className={styles.main}>
            <div className={styles.breadcrumb}><Caption1>Forward</Caption1><ArrowRight16Regular /><Caption1>Ideas</Caption1></div>
            <section className={styles.hero}><div className={styles.heroCopy}><Badge appearance="tint" color="brand">Dynamics CE change approach</Badge><Title1 as="h1">Make change visible.</Title1><Body1>Forward gives every idea a clear path from a spark of opportunity to meaningful action across Microsoft Dynamics 365.</Body1><div className={styles.heroMeta}><Caption1>12 active ideas</Caption1><Divider vertical /><Caption1>Last activity 14 minutes ago</Caption1></div></div><Button appearance="primary" icon={<Add24Regular />} onClick={() => setShowNew(true)}>Share an idea</Button></section>
            <Card className={styles.processCard}><div className={styles.processHeader}><div><Title2 as="h2">The Forward process</Title2><Body2>One shared view of how change moves forward.</Body2></div><Button appearance="subtle">View process guide <ArrowRight16Regular /></Button></div><div className={styles.stageRow}>{stages.map((stage, index) => <div className={styles.stage} key={stage.name}><div className={styles.stageTop}><div className={mergeClasses(styles.stageDot, stage.status === 'active' && styles.stageDotActive)}>{index + 1}</div>{index < stages.length - 1 && <div className={mergeClasses(styles.stageLine, index === 0 && styles.stageLineActive)} />}</div><span className={styles.stageName}>{stage.name}</span><Caption1 className={styles.stageDetail}>{stage.detail}</Caption1></div>)}</div></Card>
            {submitted && <MessageBar intent="success"><MessageBarBody><strong>Idea shared.</strong> Your opportunity is now visible in Capture.</MessageBarBody><Button appearance="transparent" icon={<Dismiss24Regular />} onClick={() => setSubmitted(false)} aria-label="Dismiss notification" /></MessageBar>}
            <section><div className={styles.sectionHeader}><div><Title2 as="h2">Ideas in Capture</Title2><Body2>Start with the opportunities worth bringing into the room.</Body2></div><div className={styles.toolbar}><Field><Input contentBefore={<Search24Regular />} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search ideas" aria-label="Search ideas" /></Field><Dropdown defaultValue="All teams" aria-label="Filter by team"><Option>All teams</Option><Option>Customer Success</Option><Option>Sales Operations</Option><Option>Field Operations</Option></Dropdown></div></div></section>
            {filteredIdeas.length ? <div className={styles.ideaGrid}>{filteredIdeas.map((idea) => <Card key={idea.id} className={mergeClasses(styles.ideaCard, selectedId === idea.id && styles.ideaCardSelected)} onClick={() => setSelectedId(idea.id)}><CardHeader image={<Avatar name={idea.owner} color="colorful" />} header={<Subtitle1>{idea.title}</Subtitle1>} description={<Caption1>{idea.owner} · {idea.updated}</Caption1>} /><div className={styles.cardBody}><Body2>{idea.description}</Body2><div className={styles.cardTags}><Badge appearance="tint" color={idea.impact === 'High' ? 'danger' : 'informative'}>{idea.impact} impact</Badge><Badge appearance="outline">{idea.team}</Badge></div><div className={styles.cardFooter}><Caption1>Capture stage</Caption1><Button appearance="subtle" size="small" icon={<ArrowRight16Regular />} aria-label={`Open ${idea.title}`} /></div></div></Card>)}</div> : <Card><div className={styles.empty}><Lightbulb24Regular /><Title2 as="h2">No ideas found</Title2><Body2>Try another search or share the next opportunity.</Body2></div></Card>}
          </main>
        </div>
      </div>
      {selected && <aside aria-label="Selected idea details" className={styles.drawerOverlay} onClick={() => setSelectedId(null)}><div className={styles.drawer} onClick={(event) => event.stopPropagation()}><div className={styles.drawerHeader}><div><Badge appearance="tint" color="brand">Idea in Capture</Badge><Title2 as="h2">{selected.title}</Title2></div><Button appearance="subtle" icon={<Dismiss24Regular />} onClick={() => setSelectedId(null)} aria-label="Close idea details" /></div><Body1>{selected.description}</Body1><Divider /><div className={styles.form}><Field label="Owner"><Input value={selected.owner} readOnly /></Field><Field label="Team"><Input value={selected.team} readOnly /></Field><Field label="Next step"><Dropdown defaultValue="Shape this idea"><Option>Shape this idea</Option><Option>Invite collaborators</Option><Option>Assess the opportunity</Option></Dropdown></Field></div><div className={styles.formActions}><Button appearance="secondary" onClick={() => setSelectedId(null)}>Close</Button><Button appearance="primary" icon={<ArrowRight16Regular />} onClick={() => setSelectedId(null)}>Move to Shape</Button></div></div></aside>}
      {showNew && <aside aria-label="Share a new idea" className={styles.drawerOverlay} onClick={() => setShowNew(false)}><div className={styles.drawer} onClick={(event) => event.stopPropagation()}><div className={styles.drawerHeader}><div><Badge appearance="tint" color="brand">New opportunity</Badge><Title2 as="h2">Share an idea</Title2></div><Button appearance="subtle" icon={<Dismiss24Regular />} onClick={() => setShowNew(false)} aria-label="Close share idea form" /></div><form className={styles.form} onSubmit={submitIdea}><Field label="What opportunity do you see?" required><Input value={newTitle} onChange={(event) => setNewTitle(event.target.value)} placeholder="Give your idea a clear title" /></Field><Field label="Tell us a little more"><Textarea value={newDescription} onChange={(event) => setNewDescription(event.target.value)} placeholder="What could be better, faster or simpler?" /></Field><div className={styles.formActions}><Button type="button" appearance="secondary" onClick={() => setShowNew(false)}>Cancel</Button><Button type="submit" appearance="primary" icon={<CheckmarkCircle24Regular />}>Share idea</Button></div></form></div></aside>}
    </div>
  )
}
