import { Label, TextInput, Textarea, Button } from 'flowbite-react'

function Contact() {
    return (
      <div className="pt-14 pb-32">
            <div className="text-center py-6 md:px-40">
                <h1 className="text-5xl font-bold mb-4">Get in touch</h1>
            </div>
      <form className="flex flex-col gap-4 px-4 md:px-40 lg:px-64 xl:px-96">
        <div>
          <div className="mb-2 block">
            <Label
              value="First Name"
            />
          </div>
          <TextInput
            type="text"
            placeholder="First Name"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              value="Last Name"
            />
          </div>
          <TextInput
            type="text"
            placeholder="Last Name"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              value="Email"
            />
          </div>
          <TextInput
            type="email"
            placeholder="email@example.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              value="Message"
            />
          </div>
          <Textarea
            placeholder="Leave a message..."
            rows={5}
            required={true}
          />
        </div>
        <Button type="submit">
          Submit
        </Button>
      </form>
      </div>
    );
  }
  
  export default Contact;