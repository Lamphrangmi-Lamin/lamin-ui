import Badge from "./components/Badge/Badge"
import Button from "./components/Button/Button"
import TextInput from "./components/TextInput/TextInput"

function App() {
  return (
    // <div className="flex flex-col gap-12 px-6 md:px-8 py-28">
    //   <div className="flex gap-5 items-center flex-wrap">
    //     <Button variant="primary" size="md">Button CTA</Button>
    //     <Button variant="primary" icon={<i class="ri-star-line"></i>} size="lg">Button CTA</Button>
    //     <Button variant="primary" icon={<i class="ri-star-line"></i>} iconPosition="right" size="xl">Button CTA</Button>
    //     <Button variant="primary" size="xxl">Button CTA</Button>
    //     <Button variant="primary" icon={<i className="ri-star-line"></i>} />
    //   </div>

    //   <div className="flex gap-5 items-center flex-wrap">
    //     <Button variant="secondary" size="md" icon={<i class="ri-star-line"></i>}>Button CTA</Button>
    //     <Button variant="secondary" size="lg" icon={<i class="ri-star-line"></i>}>Button CTA</Button>
    //     <Button variant="secondary" size="xl" icon={<i class="ri-star-line"></i>}>Button CTA</Button>
    //     <Button variant="secondary" size="xxl" icon={<i class="ri-star-line"></i>}>Button CTA</Button>
    //     <Button variant="secondary" icon={<i className="ri-star-line"></i>} />
    //   </div>

    //   <div className="flex gap-5 items-center flex-wrap">
    //     <Button variant="tertiary" size="md" icon={<i class="ri-star-line"></i>}>Button CTA</Button>
    //     <Button variant="tertiary" size="lg" icon={<i class="ri-star-line"></i>}>Button CTA</Button>
    //     <Button variant="tertiary" size="xl" icon={<i class="ri-star-line"></i>}>Button CTA</Button>
    //     <Button variant="tertiary" size="xxl" icon={<i class="ri-star-line"></i>}>Button CTA</Button>
    //     <Button variant="tertiary" icon={<i className="ri-star-line"></i>} />
    //   </div>

    //   <div className="flex gap-5 items-center flex-wrap">
    //     <Button variant="linkColor" size="md">Button CTA</Button>
    //     <Button variant="linkColor" size="lg">Button CTA</Button>
    //     <Button variant="linkColor" size="xl">Button CTA</Button>
    //     <Button variant="linkColor" size="xxl">Button CTA</Button>
    //     <Button variant="linkColor" icon={<i className="ri-star-line"></i>} />
    //   </div>

    //   <div className="flex gap-5 items-center flex-wrap">
    //     <Button variant="linkGray" size="md">Button CTA</Button>
    //     <Button variant="linkGray" size="lg">Button CTA</Button>
    //     <Button variant="linkGray" size="xl">Button CTA</Button>
    //     <Button variant="linkGray" size="xxl">Button CTA</Button>
    //     <Button variant="linkGray" icon={<i className="ri-star-line"></i>} />
    //   </div>

    //   <div className="flex gap-5 items-center flex-wrap">
    //     <Button variant="destructive" size="md">Button CTA</Button>
    //     <Button variant="destructive" size="lg">Button CTA</Button>
    //     <Button variant="destructive" size="xl">Button CTA</Button>
    //     <Button variant="destructive" size="xxl">Button CTA</Button>
    //     <Button variant="destructive" icon={<i className="ri-star-line"></i>} />
    //   </div>
    // </div>
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-[24rem] flex flex-col gap-12">
        <TextInput
          name="email"
          label="Email"
          type="email"
          placeholder="name@email.com"
          hint="This is a hint text."
          trailingIcon={<i className="ri-question-line" />}
          defaultValue="I am a software engineer"
        />
        <TextInput 
          name="email"
          label="Email"
          type="email"
          placeholder="name@email.com"
          hint="This is a hint text."
          leadingIcon={<i className="ri-mail-line" />}
          trailingIcon={<i className="ri-question-line" />}
        />
        <TextInput 
          name="email"
          disabled
          type="email"
          label="Email"
          placeholder="name@email.com"
          hint="This is a hint text."
          trailingIcon={<i className="ri-question-line" />}
        />
        <TextInput 
          name="email"
          label="Email"
          type="email"
          placeholder="name@email.com"
          defaultValue="name@email.com"
          error="Email is required."
          trailingIcon={<i className="ri-question-line" />}
        />
      </div>
    </div>
  )
}

export default App
