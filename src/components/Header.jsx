import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Icon } from '@/components/Icon'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Icon className="h-24 sm:h-12 w-auto" />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-indigo-600/10 py-4 font-mono text-sm text-indigo-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-2 px-4 overflow-hidden sm:gap-4">
            <p>
              <time dateTime="2023-01-11">27 April, 2023 @ 6:30pm</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p className="overflow-hidden text-ellipsis">Smithfield Works, Hanley</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="https://php-stoke.eventbrite.com/?ref=phpstoke">Get your FREE tickets</Button>
        </div>
      </Container>
    </header>
  )
}
