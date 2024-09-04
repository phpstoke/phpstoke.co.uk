import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Icon } from '@/components/Icon'

import event from "@/event";

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <a className="mt-10 lg:mt-0 lg:grow lg:basis-0" href="/">
          <Icon className="h-24 sm:h-12 w-auto" />
        </a>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-indigo-600/10 py-4 font-mono text-sm text-indigo-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-2 px-4 overflow-hidden sm:gap-4">
            <p>
              <time dateTime="2024-07-18">{event.event}</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p className="overflow-hidden text-ellipsis">{event.location}</p>
          </div>
          {/*<div className="mx-auto flex items-center gap-2 px-4 overflow-hidden sm:gap-4">*/}
          {/*  <p>*/}
          {/*    January 2024*/}
          {/*  </p>*/}
          {/*  <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />*/}
          {/*  <p className="overflow-hidden text-ellipsis">Sign up to our newsletter.</p>*/}
          {/*</div>*/}
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href={event.meetupUrl}>Get Your Ticket</Button>
        </div>
      </Container>
    </header>
  )
}
