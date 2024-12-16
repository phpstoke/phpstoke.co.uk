import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Icon } from '@/components/Icon'

export function News() {
  return (
    <div className="relative z-50 bg-amber-200">
      <div className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap px-3 py-2">
        <div className="mx-auto flex flex-auto basis-full overflow-x-auto whitespace-nowrap py-4 text-sm sm:text-xs text-amber-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:py-0">
          <div className="mx-auto flex items-center gap-2 px-4 overflow-hidden sm:gap-4">
            <p>
              Use code <span className="font-semibold font-mono">PHPCOMMUNITY</span> for a community discount off <a href="https://www.phpconference.co.uk/" className="font-semibold underline">PHP UK Conference tickets</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
