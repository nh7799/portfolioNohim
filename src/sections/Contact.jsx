import Button from "../components/Button";
import PdfViewer from "../components/PdfViewer";
import Layout from "./Layout";

export default function Contact() {
  return (
    <>
      <Layout sectionName={"Contact Me"} id={"contact"}>
        <div className="flex flex-col gap-y-10 justify-center items-center rounded-lg">
          <form
            action="https://formspree.io/f/mredjrrp"
            method="POST"
            className="flex w-full max-w-2xl flex-col gap-6 rounded-lg border border-gray-600 p-7"
          >
            <fieldset>
              {" "}
              <label htmlFor="first">Firstname</label>
              <input
                className="mt-3 font-medium text-gray-500 outline-0 border-b block w-full  border-gray-700 "
                type="text"
                name="first"
                placeholder="John"
                id=""
                required
              />
            </fieldset>

            <fieldset>
              <label htmlFor="last">Lastname</label>
              <input
                className="mt-3 font-medium text-gray-500 outline-0 border-b block  border-gray-700 w-full"
                type="text"
                name="last"
                placeholder="doe"
                id=""
              />
            </fieldset>

            <fieldset>
              <label htmlFor="email">Email</label>
              <input
                className="mt-3 font-medium text-gray-500  outline-0 border-b block  border-gray-700 w-full"
                type="email"
                name="email"
                id="email"
                placeholder="johndoe@email.com"
                required
              />
            </fieldset>

            <Button
              type={"submit"}
              className="border-gray-700 bg-blue-700 hover:bg-blue-400"
              onClick={(e) => {
                const button = e.currentTarget;
                button.textContent = "please wait...";

                setTimeout(() => {
                  button.textContent = "Submit";
                  button.classList.add("disabled");
                }, 3000);
              }}
            >
              Contact me
            </Button>
          </form>
        </div>
      </Layout>
    </>
  );
}
