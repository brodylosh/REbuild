import { Label, TextInput, Checkbox, Button } from 'flowbite-react'

function Signup() {
    return (
        <div className="pt-14 pb-32">
            <div className="text-center py-6 md:px-40">
                <h1 className="text-5xl font-bold mb-4">Signup</h1>
            </div>
            <form className="flex flex-col gap-4 px-4 md:px-40 lg:px-64 xl:px-96">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Your email"
            />
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@flowbite.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Your password"
            />
          </div>
          <TextInput
            id="password1"
            type="password"
            required={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">
            Remember me
          </Label>
        </div>
        <Button type="submit">
          Submit
        </Button>
      </form>
      </div>
    );
  }
  
  export default Signup;