import Badge from "./components/Badge/Badge"
import Button from "./components/Button/Button"

function App() {
  return (
    <div className="flex flex-col gap-12 px-6 md:px-8 py-28">
      <div className="flex gap-5 items-center flex-wrap">
        <Button variant="primary" size="md">Button CTA</Button>
        <Button variant="primary" icon={<i class="ri-star-line"></i>} size="lg">Button CTA</Button>
        <Button variant="primary" icon={<i class="ri-star-line"></i>} iconPosition="right" size="xl">Button CTA</Button>
        <Button variant="primary" size="xxl">Button CTA</Button>
        <Button variant="primary" icon={<i className="ri-star-line"></i>} />
      </div>

      <div className="flex gap-5 items-center flex-wrap">
        <Button variant="secondary" size="md" icon={<i class="ri-star-line"></i>}>Button CTA</Button>
        <Button variant="secondary" size="lg" icon={<i class="ri-star-line"></i>}>Button CTA</Button>
        <Button variant="secondary" size="xl" icon={<i class="ri-star-line"></i>}>Button CTA</Button>
        <Button variant="secondary" size="xxl" icon={<i class="ri-star-line"></i>}>Button CTA</Button>
        <Button variant="secondary" icon={<i className="ri-star-line"></i>} />
      </div>

      <div className="flex gap-5 items-center flex-wrap">
        <Button variant="tertiary" size="md" icon={<i class="ri-star-line"></i>}>Button CTA</Button>
        <Button variant="tertiary" size="lg" icon={<i class="ri-star-line"></i>}>Button CTA</Button>
        <Button variant="tertiary" size="xl" icon={<i class="ri-star-line"></i>}>Button CTA</Button>
        <Button variant="tertiary" size="xxl" icon={<i class="ri-star-line"></i>}>Button CTA</Button>
        <Button variant="tertiary" icon={<i className="ri-star-line"></i>} />
      </div>

      <div className="flex gap-5 items-center flex-wrap">
        <Button variant="linkColor" size="md">Button CTA</Button>
        <Button variant="linkColor" size="lg">Button CTA</Button>
        <Button variant="linkColor" size="xl">Button CTA</Button>
        <Button variant="linkColor" size="xxl">Button CTA</Button>
        <Button variant="linkColor" icon={<i className="ri-star-line"></i>} />
      </div>

      <div className="flex gap-5 items-center flex-wrap">
        <Button variant="linkGray" size="md">Button CTA</Button>
        <Button variant="linkGray" size="lg">Button CTA</Button>
        <Button variant="linkGray" size="xl">Button CTA</Button>
        <Button variant="linkGray" size="xxl">Button CTA</Button>
        <Button variant="linkGray" icon={<i className="ri-star-line"></i>} />
      </div>

      <div className="flex gap-5 items-center flex-wrap">
        <Button variant="destructive" size="md">Button CTA</Button>
        <Button variant="destructive" size="lg">Button CTA</Button>
        <Button variant="destructive" size="xl">Button CTA</Button>
        <Button variant="destructive" size="xxl">Button CTA</Button>
        <Button variant="destructive" icon={<i className="ri-star-line"></i>} />
      </div>
    </div>
  )
}

export default App
