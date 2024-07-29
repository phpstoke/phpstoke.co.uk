import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Logo className="h-12 w-auto text-slate-900" />
        <div>
          <p className="mt-6 text-base text-slate-500 md:mt-0">
            Copyright &copy; {new Date().getFullYear()} PHP Stoke. All
            rights reserved.
          </p>
          <p className="mt-6 text-base text-slate-500 md:mt-0 md:text-sm">
            PHP Stoke is organised by <a href="https://pinkary.com/@jbrooksuk?ref=phpstoke" className="hover:text-indigo-500 font-semibold">James Brooks</a>.
          </p>
        </div>
      </Container>
    </footer>
  )
}
