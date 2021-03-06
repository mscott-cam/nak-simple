import { useState } from 'react'
import styled from 'styled-components/native'
import { v4 as uuid } from 'uuid'

import { List } from './src/pages'

const singleAction = [
  {
    text: 'feed the dog',
    key: uuid(),
  },
]

export default function App() {
  const [actions, setActions] = useState(singleAction)
  // const [actions, setActions] = useState(testActions)
  console.log(actions.length)

  return (
    <AppView>
      <List actions={actions} />
    </AppView>
  )
}

const AppView = styled.View`
  flex: 1;
  border-radius: 40px;
  background-color: #a0a58d;
`

export const testActionText = [
  'React Training: React, Inline Functions, and Performance',
  'Tao of React - Software Design, Architecture & Best Practices | Alex Kondov - Software Engineer',
  'React Architecture: How to Structure and Organize a React Application | Tania Rascia',
  'I Was Discipled by . . . the Church',
  'Why I Love Remix',
  'Why youve been bad about Profiling React Apps | Epic React by Kent C. Dodds',
  'Learn all about Micro-Frontends',
  'MoSCoW Method - Better Product Feature Prioritization',
  '6 Concrete Tips That Will Make Your React Pull Requests Easier To Review | A Technical Blog by Chak Shun Yu',
  'Take the Hill: How Mission Brings Men Together | Desiring God',
  'Every Father’s Calling: How to Nurture and Admonish | Desiring God',
  '5 Tips to Help You Avoid React Hooks Pitfalls',
  'You Are and Will Be Justified: The Future Promise of a Finished Work | Desiring God',
  'Bible Memory Brings Reality to Life | Desiring God',
  'Is Stress Making Me More Holy or More Sinful? | Desiring God',
  'Simplify the development life cycle with Nx, a monorepo tool | by Hiroki Gota | Code道 | Medium',
  'Feed His Sheep: Whom Does Christ Call to Preach? | Desiring God',
  'React Fundamentals: Props vs State',
  'How to Start Freelancing – Tips for Launching a Successful Freelance Career',
  'High Performance SVGs | CSS-Tricks',
  'Masking vs. Clipping: When to Use Each | CSS-Tricks',
  'Perfect Full Page Background Image | CSS-Tricks',
  'Requisite React | Epic React by Kent C. Dodds',
  'Synchronous vs Asynchronous JavaScript – Call Stack, Promises, and More',
  'Jsx article',
  'Colocation?',
  'React Natives Many Platform Vision · React Native',
  'Authentication in React Applications',
  'Netlifys AWS Lambda functions bring the backend to your frontend workflow | Netlify',
  'The Plan for React 18 – React Blog',
  'Application State Management with React',
  'Prop Drilling',
  'CSS Cheat Sheet – 10 Tricks to Improve Your Next Coding Project',
  'Fix the slow render before you fix the re-render',
  'A Visual Guide to React Rendering - Props | Alex Sidorenko',
  '13 Freelance Developer Portfolios to Inspire You',
  'TypeScript + React: Why I dont use React.FC',
  'How to optimize your context value',
  'UI/UX Design Guide: What Are UI Designers, and How Are They Different Than UX Designers?',
  'How Git Branches Work',
  'Whats New in React 18 Alpha? Concurrency, Batching, the Transition API and More',
  'One React mistake thats slowing you down | Epic React by Kent C. Dodds',
  'Freelance React Developer Checklist - then store if needed',
  'How to use React Context effectively',
  'The State Of Web Workers In 2021 — Smashing Magazine',
  'How to useContext in React - RWieruch',
  'Read up on Recoil',
  'Kent Dodds react 18',
  'What is Smoke Testing? Build Verification Tests Explained With Examples',
  'Myths about useEffect | Epic React by Kent C. Dodds',
  'React Architecture: How to Structure and Organize a React Application | Tania Rascia',
  'A Complete Guide to useEffect — Overreacted',
  'React Table with server-side Data - RWieruch',
  'How the CSS Position Property Works – Explained with Code Examples',
  'ES2021 releases',
  'How to Design Keyboard Accessibility for Complex React Experiences',
  '10 Things You Should Know about Marriage | Crossway Articles',
  'Seven Lessons for Productivity - read transcript',
  'We Are Blind Without the Spirit | Desiring God',
  'God Delights to Dwell in Us | Desiring God',
  'C. S. Lewis and the Beauty of Self-Forgetfulness | Crossway Articles',
  'Singing, Suffering, and Scripture: How God Keeps Us Through Song | Desiring God',
  'Parenting Is About Treasuring: Four Ways to Nurture Joy in God | Desiring God',
  'How Does Sanctification Work? | Crossway',
  'Against Every Accusation: What to Say When Satan Whispers | Desiring God',
  'How Did Evil Begin? | Desiring God',
  'Sin Never Keeps Its Promises | Desiring God',
  'The secret of Christ-magnifying contentment as the path to costly love',
  'How to Win Any Argument: The Key to Abortion, Feminism, Politics, and More | Desiring God',
  'Read the Bible with All of You | Desiring God',
  'Come What May: Finding Patience and Joy in a Slow Calamity | Desiring God',
  'Humbled by the Hand of God: How to Receive Hard Mercies | Desiring God',
  'Love Tells the (Hard) Truth | Desiring God',
  'Men Too Easily Forgotten: Why Nice Is Not Enough | Desiring God',
  'Above Reproach: The First Requirement for Christian Leaders | Desiring God',
  'How to Suffer Well: Three Ways to Prepare Now | Desiring God',
  'Reading Without Seeing: How Not to Study the Bible | Desiring God',
  'The Bible Is a Lifelong Project | Desiring God',
  'The PARA Method: A Universal System for Organizing Digital Information - Forte Labs',
  'Glorify God with Your Body: How Exercise Serves the Christian Life | Desiring God',
  'Bored to Death: How Triviality Ruins a Man | Desiring God',
  'Prophet, Priest, and King: The High Calling of Christian Husbands | Desiring God',
  'Religious Affections: A Reader’s Guide to a Christian Classic | Desiring God',
  'Reformation Theology in the Hands of a Servant | Desiring God',
  'Article - Don’t Fill Every Open Moment with Content',
  'Lord, Make Us Diligent and Desperate: A Prayer for the Pursuit of Holiness | Desiring God',
  'The Dangerous Love of Ease | Desiring God',
  'Worthily Reading - Bethlehem College and Seminary',
  'Devote Yourself to Faithfulness: How to Cultivate a Quiet Virtue | Desiring God',
  'How to Think Wisely About 40-Hour Workweeks and Offices',
  'Overseers of Souls: Why Elders Must See and Act | Desiring God',
  'Small Group Apprentice Development Guide',
  'Love Makes a Man a Man | Desiring God',
  'When My Heart Is Cold: Bible Meditation for Beginners | Desiring God',
  'Jesus Rose Early: What Mornings Say About Us | Desiring God',
  'Ungodly Ambition: How to Test Our Motivations | Desiring God',
  'Entrepreneur Starts Bank That Will Fund Christian Charities Instead Of Planned Parenthood',
  'Never Underestimate the Value of Ordinary, Brief, Christian Conversations : 9Marks',
  'Hostage to Hurry: Recovering the Human Pace of Love | Desiring God',
  'A Man Among Men: Why Friendship Is Worth the Fight | Desiring God',
  'How to Ask Excellent Bible Study Discussion Questions',
  'A Place to Eat, Sleep, and Watch: Emptiness in the Modern Household | Desiring God',
]

export const testActions = testActionText.map((text) => ({ text, key: uuid() }))
