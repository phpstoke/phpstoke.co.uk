import Image from 'next/image'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import image6 from '@/images/events/apr-2023/phpstoke1.jpg'
import image7 from '@/images/events/apr-2023/phpstoke2.jpg'
import image8 from '@/images/events/apr-2023/phpstoke3.jpg'
import image9 from '@/images/events/apr-2023/phpstoke4.jpg'
import image10 from '@/images/events/apr-2023/phpstoke5.jpg'
import image11 from '@/images/events/apr-2023/phpstoke6.jpg'
import image12 from '@/images/events/apr-2023/phpstoke7.jpg'
import image13 from '@/images/events/apr-2023/phpstoke8.jpg'
import image14 from '@/images/events/apr-2023/phpstoke9.jpg'

import event from '@/event'

function Photos() {
  const images = [image6, image10, image9, image7, image8, image11, image12, image13, image14]
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="relative mt-16 sm:mt-20">
      <div className="relative flex max-w-[100vw] overflow-hidden py-5">
        <div className="flex gap-8 w-max animate-marquee [--duration:90s] hover:[animation-play-state:paused]">
          {[...images, ...images].map((image, imageIndex) => (
            <div
              key={`${image.src}-${imageIndex}`}
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-2xl sm:w-72 sm:rounded-3xl snap-center drop-shadow-[0_10px_40px_rgba(124,58,237,0.15)]',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Members card - animated community visualization
function MembersCard({ delay = 0 }) {
  return (
    <div 
      className="bento-card relative flex flex-col justify-end min-h-[180px] overflow-hidden opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Large animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated block fills - larger and lighter */}
        <div 
          className="absolute -right-8 -top-8 h-40 w-40 rounded-3xl bg-gradient-to-br from-primary-200/30 to-primary-300/15 dark:from-primary-800/18 dark:to-primary-700/10"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        />
        <div 
          className="absolute right-20 top-0 h-24 w-24 rounded-2xl bg-gradient-to-br from-primary-300/25 to-primary-400/12 dark:from-primary-700/15 dark:to-primary-600/8"
          style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '1s' }}
        />
        <div 
          className="absolute right-4 top-20 h-16 w-16 rounded-xl bg-gradient-to-br from-primary-400/20 to-primary-500/10 dark:from-primary-600/12 dark:to-primary-500/6"
          style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '2s' }}
        />
        <div 
          className="absolute right-28 top-16 h-12 w-12 rounded-lg bg-gradient-to-br from-primary-300/18 to-primary-400/8 dark:from-primary-700/10 dark:to-primary-600/5"
          style={{ animation: 'float 4.5s ease-in-out infinite', animationDelay: '0.5s' }}
        />
        
        {/* Animated people icons spread wider */}
        <div className="absolute right-1 top-1 grid grid-cols-5 gap-2.5 p-2">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center"
              style={{
                animation: 'slide-up 2.5s ease-in-out infinite',
                animationDelay: `${i * 0.12}s`,
              }}
            >
              <svg
                className={clsx(
                  "text-primary-500/50 dark:text-primary-400/40",
                  i % 3 === 0 ? "h-6 w-6" : i % 3 === 1 ? "h-5 w-5" : "h-4 w-4"
                )}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
            </div>
          ))}
        </div>
        
        {/* Glow effect */}
        <div 
          className="absolute right-0 top-0 h-36 w-36 rounded-full bg-primary-400/20 blur-2xl dark:bg-primary-500/12"
          style={{ animation: 'glow-pulse 4s ease-in-out infinite' }}
        />
      </div>
      
      {/* Text with backdrop for readability */}
      <div className="relative z-10">
        <div className="inline-block rounded-lg px-2 py-1 -mx-2 -mb-1">
          <dt className="font-mono text-sm font-medium text-primary-600 dark:text-primary-400">Members</dt>
          <dd className="mt-1 font-display text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {event.members}
          </dd>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">and growing</p>
        </div>
      </div>
    </div>
  )
}

// Next Event card - animated calendar (clickable)
function EventCard({ delay = 0 }) {
  const dateParts = event.nextEventDate.split(' ')
  const day = dateParts[0] || '—'
  const month = dateParts[1] || ''
  
  return (
    <a 
      href={event.meetupUrl}
      target="_blank"
      rel="noreferrer"
      className="bento-card group relative flex flex-col justify-end min-h-[180px] overflow-hidden opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Animated background blocks */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -right-6 -top-6 h-36 w-36 rounded-2xl bg-gradient-to-br from-primary-200/25 to-primary-300/12 dark:from-primary-800/15 dark:to-primary-700/8 rotate-6"
          style={{ animation: 'float 7s ease-in-out infinite' }}
        />
        <div 
          className="absolute right-20 top-0 h-20 w-20 rounded-xl bg-gradient-to-br from-primary-300/20 to-primary-400/10 dark:from-primary-700/12 dark:to-primary-600/6 -rotate-6"
          style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '1s' }}
        />
        <div 
          className="absolute right-8 top-16 h-12 w-12 rounded-lg bg-gradient-to-br from-primary-400/18 to-primary-500/8 dark:from-primary-600/10 dark:to-primary-500/5 rotate-12"
          style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '2s' }}
        />
        
        {/* Glow effect */}
        <div 
          className="absolute right-4 top-4 h-28 w-28 rounded-full bg-primary-400/15 blur-2xl dark:bg-primary-500/10"
          style={{ animation: 'glow-pulse 3s ease-in-out infinite' }}
        />
      </div>
      
      {/* Large animated calendar icon */}
      <div className="absolute right-3 top-2">
        <div 
          className="relative transition-transform group-hover:scale-105 opacity-40 md:opacity-100"
          style={{ animation: 'bounce-in 2s ease-in-out infinite' }}
        >
          {/* Calendar body - larger */}
          <div className="h-24 w-20 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 shadow-xl dark:from-primary-900/70 dark:to-primary-800/60">
            {/* Calendar header */}
            <div className="h-6 rounded-t-xl bg-gradient-to-r from-primary-500 to-primary-400" />
            {/* Calendar rings */}
            <div className="absolute -top-1.5 left-3 h-4 w-2 rounded-full bg-primary-400 dark:bg-primary-500" />
            <div className="absolute -top-1.5 right-3 h-4 w-2 rounded-full bg-primary-400 dark:bg-primary-500" />
            {/* Date display */}
            <div className="flex h-[72px] flex-col items-center justify-center">
              <span className="font-display text-3xl font-bold text-primary-700 dark:text-primary-200">{day}</span>
              <span className="text-xs font-medium uppercase tracking-wide text-primary-500 dark:text-primary-400">{month}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <dt className="font-mono text-sm font-medium text-primary-600 dark:text-primary-400">Next Event</dt>
        <dd className="mt-1 font-display text-3xl font-bold tracking-tight text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400 sm:text-4xl">
          {event.nextEventDate}
        </dd>
        <p className="mt-1 inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
          Save your spot
          <svg className="h-3 w-3 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </p>
      </div>
    </a>
  )
}

// Venue card - double height with animated map pin
function VenueCard({ delay = 0 }) {
  return (
    <a 
      href={event.venueUrl}
      target="_blank"
      rel="noreferrer"
      className="bento-card group relative flex flex-col justify-between row-span-2 overflow-hidden opacity-0 animate-fade-in-up col-span-2 sm:col-span-1"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Animated map visualization - positioned in upper area */}
      <div className="relative h-40 w-full">
        {/* Block fills for map-like appearance */}
        <div 
          className="absolute left-2 top-2 h-16 w-16 rounded-xl bg-gradient-to-br from-primary-200/20 to-primary-300/10 dark:from-primary-800/12 dark:to-primary-700/6"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        />
        <div 
          className="absolute right-3 top-4 h-12 w-20 rounded-lg bg-gradient-to-br from-primary-300/18 to-primary-400/8 dark:from-primary-700/10 dark:to-primary-600/5"
          style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '1s' }}
        />
        <div 
          className="absolute left-8 bottom-8 h-10 w-14 rounded-lg bg-gradient-to-br from-primary-200/15 to-primary-300/6 dark:from-primary-800/10 dark:to-primary-700/4"
          style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '2s' }}
        />
        <div 
          className="absolute right-8 bottom-4 h-8 w-8 rounded-md bg-gradient-to-br from-primary-400/12 to-primary-500/5 dark:from-primary-600/8 dark:to-primary-500/4"
          style={{ animation: 'float 3.5s ease-in-out infinite', animationDelay: '0.5s' }}
        />
        
        {/* Grid lines to simulate map */}
        <div className="absolute inset-0 opacity-20 dark:opacity-15">
          <div className="absolute left-1/4 top-0 h-full w-px bg-primary-400" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-primary-400" />
          <div className="absolute left-3/4 top-0 h-full w-px bg-primary-400" />
          <div className="absolute left-0 top-1/4 h-px w-full bg-primary-400" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-primary-400" />
          <div className="absolute left-0 top-3/4 h-px w-full bg-primary-400" />
        </div>
        
        {/* Pulse rings - centered in the map area */}
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full border-2 border-primary-500/50 dark:border-primary-400/40"
            style={{
              width: 60 + i * 35,
              height: 60 + i * 35,
              marginLeft: -(60 + i * 35) / 2,
              marginTop: -(60 + i * 35) / 2,
              animation: 'pulse-ring 2.5s ease-out infinite',
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
        
        {/* Glow behind pin */}
        <div 
          className="absolute left-1/2 top-1/2 -ml-8 -mt-8 h-16 w-16 rounded-full bg-primary-400/50 blur-xl dark:bg-primary-500/35"
          style={{ animation: 'glow-pulse 3s ease-in-out infinite' }}
        />
        
        {/* Map pin - centered */}
        <div 
          className="absolute left-1/2 top-1/2 z-10 -ml-6 -mt-6"
          style={{ animation: 'bounce-in 1.5s ease-in-out infinite' }}
        >
          <svg className="h-12 w-12 text-primary-600 drop-shadow-lg dark:text-primary-400" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 3.69 2.923l.036.025.01.006.004.003.001.001.001.001ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      {/* Text content at bottom */}
      <div className="relative mt-auto">
        <dt className="font-mono text-sm font-medium text-primary-600 dark:text-primary-400">Venue</dt>
        <dd className="mt-1">
          <p className="font-display text-xl font-bold tracking-tight text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400 sm:text-2xl">
            {event.location}
          </p>
          <p className="mt-1 inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            {'///next.inform.served'}
            <svg className="h-3 w-3 opacity-50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </p>
        </dd>
      </div>
    </a>
  )
}

// Organiser card - with Laravel branding
function OrganiserCard({ delay = 0 }) {
  return (
    <div 
      className="bento-card relative flex flex-col justify-end col-span-2 sm:col-span-2 min-h-[180px] overflow-hidden opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Animated background with large block fills */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large animated blocks */}
        <div 
          className="absolute -right-8 -top-8 h-44 w-44 rounded-3xl bg-gradient-to-br from-primary-200/25 to-primary-300/12 dark:from-primary-800/18 dark:to-primary-700/8 rotate-12"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        />
        <div 
          className="absolute right-24 -top-4 h-32 w-32 rounded-2xl bg-gradient-to-br from-primary-300/20 to-primary-400/10 dark:from-primary-700/15 dark:to-primary-600/6 -rotate-6"
          style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s' }}
        />
        <div 
          className="absolute right-48 top-8 h-20 w-20 rounded-xl bg-gradient-to-br from-primary-400/18 to-primary-500/8 dark:from-primary-600/12 dark:to-primary-500/5 rotate-12"
          style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '2s' }}
        />
        <div 
          className="absolute right-72 top-2 h-14 w-14 rounded-lg bg-gradient-to-br from-primary-500/15 to-primary-600/6 dark:from-primary-500/10 dark:to-primary-400/4 -rotate-12"
          style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '0.5s' }}
        />
        
        {/* Additional smaller floating elements */}
        <div 
          className="absolute right-16 top-20 h-8 w-8 rounded-md bg-primary-400/12 dark:bg-primary-500/8"
          style={{ animation: 'bounce-in 3s ease-in-out infinite', animationDelay: '1.5s' }}
        />
        <div 
          className="absolute right-40 top-24 h-6 w-6 rounded bg-primary-500/10 dark:bg-primary-400/6"
          style={{ animation: 'bounce-in 2.5s ease-in-out infinite', animationDelay: '2.5s' }}
        />

        {/* Glow effects */}
        <div 
          className="absolute right-8 top-4 h-40 w-40 rounded-full bg-primary-400/15 blur-3xl dark:bg-primary-500/10"
          style={{ animation: 'glow-pulse 4s ease-in-out infinite' }}
        />
        <div 
          className="absolute right-32 top-8 h-24 w-24 rounded-full bg-primary-500/12 blur-2xl dark:bg-primary-400/8"
          style={{ animation: 'glow-pulse 3s ease-in-out infinite', animationDelay: '1s' }}
        />

        {/* Laravel logo - larger */}
        <div 
          className="absolute right-4 top-8"
          style={{ animation: 'float 4s ease-in-out infinite' }}
        >
          <svg className="size-24 text-primary-700 dark:text-primary-300 drop-shadow-lg" viewBox="0 0 50 52" fill="currentColor">
            <path d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.483L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764 4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833 7.993 4.524z" />
          </svg>
        </div>
      </div>
      
      <div className="relative">
        <dt className="font-mono text-sm font-medium text-primary-600 dark:text-primary-400">Organised By</dt>
        <dd className="mt-1">
          <p className="font-display text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">
            {event.organiser.name}
          </p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
            {event.organiser.role}
          </p>
        </dd>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      {/* Background gradient - stops before Photos */}
      <div className="absolute inset-x-0 -top-48 bottom-32 overflow-hidden bg-warm-gradient sm:bottom-40">
        <div className="pattern-dots absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-surface-50 dark:from-surface-900" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface-50 dark:from-surface-900" />
      </div>

      <Container className="relative">
        {/* Constrained text content */}
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          {/* Tagline with subtle glow in dark mode */}
          <p className="animate-fade-in font-mono text-sm font-medium tracking-wide text-primary-600 dark:text-primary-400">
            {event.tagline}
          </p>

          {/* Main headline with gradient text */}
          <h1 className="animate-fade-in-up animation-delay-100 mt-4 font-display text-5xl font-bold tracking-tight sm:text-7xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary-800 to-gray-900 dark:from-white dark:via-primary-200 dark:to-white">
              {event.title}
            </span>
          </h1>

          {/* Description */}
          <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-3xl font-display text-xl text-gray-600 dark:text-gray-300 sm:text-2xl">
            {event.description}
          </p>

          {/* CTA */}
          <div className="animate-fade-in-up animation-delay-300 mt-8">
            <Button href={event.meetupUrl} className="sm:hidden w-full">
              Save Your Spot — Free
            </Button>
          </div>
        </div>

        {/* Full-width Bento grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 sm:grid-cols-3 sm:grid-rows-2">
          <MembersCard delay={400} />
          <EventCard delay={500} />
          <VenueCard delay={600} />
          <OrganiserCard delay={700} />
        </div>

        {/* Social links */}
        <div className="mx-auto max-w-2xl lg:max-w-7xl flex justify-center">
          <div className="animate-fade-in-up animation-delay-500 mt-6 flex items-center gap-6">
            <a 
              href="https://x.com/phpstoke" 
              className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="h-5 w-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 300 300">
                <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
              </svg>
              @phpstoke
            </a>
            <a 
              href="https://what3words.com/next.inform.served" 
              className="group inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="h-5 w-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
              </svg>
              Get directions
            </a>
          </div>
        </div>
      </Container>

      <Photos />
    </div>
  )
}
